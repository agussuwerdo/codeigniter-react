<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Cache_kv
{

    protected $api_url;
    protected $api_token;

    public function __construct()
    {
        // Get CodeIgniter instance
        $CI = &get_instance();

        // Load the Vercel KV configuration from the config file
        $CI->config->load('vercel_kv');
        $this->api_url = $CI->config->item('kv_api_url');
        $this->api_token = $CI->config->item('kv_api_token');

        // Validate if the Vercel KV API URL and Token are present
        if (empty($this->api_url) || empty($this->api_token)) {
            log_message('error', 'Vercel KV configuration is missing or incomplete.');
            throw new Exception('Vercel KV configuration is missing or incomplete.');
        }
    }

    /**
     * Get an item from Vercel KV by key
     * @param string $key
     * @return mixed
     */
    public function get($key)
    {
        try {
            $response = $this->_make_request('GET', "get/{$key}");
            if ($response && isset($response->result)) {
                $cacheResult = json_decode($response->result, true);
                return json_decode($cacheResult['value'], true);
            } else {
                log_message('error', "Failed to get data for key '{$key}' from Vercel KV.");
            }
        } catch (Exception $e) {
            log_message('error', 'Error in get(): ' . $e->getMessage());
        }
        return FALSE;
    }

    /**
     * Save an item to Vercel KV
     * @param string $key
     * @param mixed $data
     * @param int $ttl Time to live in seconds
     * @return bool
     */
    public function save($key, $data, $ttl = 3600)
    {
        try {
            $payload = json_encode(['value' => json_encode($data), 'ex' => $ttl]);
            $response = $this->_make_request('POST', "set/{$key}", $payload);

            if (isset($response->result) && $response->result === true) {
                return TRUE;
            } else {
                log_message('error', "Failed to save data for key '{$key}' to Vercel KV.");
            }
        } catch (Exception $e) {
            log_message('error', 'Error in save(): ' . $e->getMessage());
        }
        return FALSE;
    }

    /**
     * Delete an item from Vercel KV
     * @param string $key
     * @return bool
     */
    public function delete($key)
    {
        try {
            $response = $this->_make_request('POST', "del/{$key}");
            if (isset($response->result) && $response->result === true) {
                return TRUE;
            } else {
                log_message('error', "Failed to delete key '{$key}' from Vercel KV.");
            }
        } catch (Exception $e) {
            log_message('error', 'Error in delete(): ' . $e->getMessage());
        }
        return FALSE;
    }

    /**
     * Get all keys from KV
     * @return mixed
     */
    public function get_all_cache()
    {
        $all_cache = [];

        // First, get all the keys using the keys/* endpoint
        try {
            $response = $this->_make_request('GET', 'keys/*');
            if (isset($response->result) && is_array($response->result)) {
                $keys = $response->result;

                // Prepare the pipeline request with multiple GET commands for each key
                $pipeline_commands = array_map(function ($key) {
                    return ['GET', $key];
                }, $keys);

                // Send the pipeline request
                $pipeline_response = $this->_make_request('POST', 'pipeline', json_encode($pipeline_commands));

                // Check the response and gather the results
                if (is_array($pipeline_response)) {
                    foreach ($pipeline_response as $index => $item) {
                        if (isset($item->result)) {
                            // Decode the value for each key and store it in the cache
                            $data = json_decode($item->result, true);
                            if (isset($data['value'])) {
                                $all_cache[$keys[$index]] = json_decode($data['value'], true);
                            }
                        }
                    }
                } else {
                    log_message('error', 'Failed to execute pipeline request.');
                }
            } else {
                log_message('error', 'Failed to fetch keys from Vercel KV.');
            }
        } catch (Exception $e) {
            log_message('error', 'Error in get_all_cache(): ' . $e->getMessage());
        }

        return $all_cache;
    }

    /**
     * Delete all cache from Vercel KV
     * @return bool
     */
    public function clean()
    {
        try {
            $response = $this->_make_request('POST', "flushall");
            if (isset($response->result) && $response->result === true) {
                return TRUE;
            } else {
                log_message('error', "Failed to clean cache from Vercel KV.");
            }
        } catch (Exception $e) {
            log_message('error', 'Error in delete(): ' . $e->getMessage());
        }
        return FALSE;
    }

    /**
     * Make an HTTP request to the Vercel KV API
     * @param string $method HTTP method (GET, POST, DELETE)
     * @param string $endpoint API endpoint (e.g., 'get/key', 'set/key')
     * @param string|null $payload JSON payload for POST requests
     * @return object|null API response as an object, or NULL on failure
     */
    protected function _make_request($method, $endpoint, $payload = null)
    {
        $url = rtrim($this->api_url, '/') . '/' . ltrim($endpoint, '/');
        $headers = [
            'Authorization: Bearer ' . $this->api_token,
            'Content-Type: application/json',
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

        if ($method === 'POST' && $payload) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        }

        $result = curl_exec($ch);

        if (curl_errno($ch)) {
            $error_msg = 'Vercel KV API request error: ' . curl_error($ch);
            log_message('error', $error_msg);
            curl_close($ch);
            throw new Exception($error_msg);
        }

        curl_close($ch);
        return json_decode($result);
    }
}
