<?php

/**
 * Custom ORM model.
 * author github.com/agussuwerdo
 * Designed for : mySQL & postgreSQL
 */
defined('BASEPATH') or exit('No direct script access allowed');

class MY_Model extends CI_Model
{
	protected string $table = '';
	protected string $schema = '';
	protected $primaryKey = '';
	protected int $limit = 0;
	protected int $offset = 0;
	protected $where = null;
	protected $orderBy = null;
	protected $groupBy = null;
	protected $selectFields = '';
	protected bool $autoQuotes = true;
	protected bool $useCache = false; // Enable query caching
	protected string $cacheMethod = 'apc'; // 'file', 'kv', or 'apc'
	protected $joins = null;
	protected $cacheTime = 86400; // 600 = 10 mins, 3600 = 1 hour, 86400 = 1 day

	public function __construct()
	{
		parent::__construct();
	}

	/**
	 * Set whether to cache query results and which caching method to use.
	 * @param bool $cache Enable/disable caching
	 * @param string $method Cache method ('file', 'kv', or 'apc')
	 * @return $this
	 */
	public function use_cache(bool $cache = true, string $method = ''): MY_Model
	{
		$this->useCache = $cache;
		if ($method) {
			$this->cacheMethod = $method;
		}
		// Load appropriate caching mechanism
		if ($cache) {
			// Optionally, you can validate the input if necessary
			$validMethods = ['file', 'kv', 'apc'];
			if (!in_array($this->cacheMethod, $validMethods)) {
				error('Invalid cache method: ' . $this->cacheMethod);
			}
			if ($this->cacheMethod == 'file') {
				$this->load->driver('cache', array('adapter' => 'file'));
			} else if ($this->cacheMethod == 'kv') {
				$this->load->library('cache_kv'); // Load the Vercel KV library
			} else if ($this->cacheMethod == 'apc') {
				$this->load->driver('cache', array('adapter' => 'apc', 'backup' => 'file'));
			}
		}

		return $this;
	}

	/**
	 * Get data from cache (either file or kv).
	 * @param string $cacheKey The cache key.
	 * @return mixed The cached data, or FALSE if not found.
	 */
	public function get_cache($cacheKey)
	{
		if (!$this->useCache)
			error('Cache engine is not loaded.! ');
		if ($this->cacheMethod === 'file') {
			return $this->cache->file->get($cacheKey);
		} else if ($this->cacheMethod === 'kv') {
			return $this->cache_kv->get($cacheKey);
		} else if ($this->cacheMethod === 'apc') {
			return $this->cache->apc->get($cacheKey);
		}
		return false;
	}

	/**
	 * Save data to cache (either file or kv).
	 * @param string $cacheKey The cache key.
	 * @param mixed $data The data to cache.
	 * @return void
	 */
	public function save_cache($cacheKey, $data)
	{
		if (!$this->useCache)
			error('Cache engine is not loaded.! ');
		if ($this->cacheMethod === 'file') {
			$this->cache->file->save($cacheKey, $data, $this->cacheTime);
		} else if ($this->cacheMethod === 'kv') {
			$this->cache_kv->save($cacheKey, $data, $this->cacheTime);
		} else if ($this->cacheMethod === 'apc') {
			$this->cache->apc->save($cacheKey, $data, $this->cacheTime);
		}
	}

	/**
	 * Delete a cache entry by its cache key.
	 * @param string $cacheKey The cache key to delete.
	 * @return void
	 */
	public function delete_cache($cacheKey)
	{
		if (!$this->useCache)
			error('Cache engine is not loaded.! ');
		if ($this->cacheMethod === 'file') {
			$this->cache->file->delete($cacheKey);
		} else if ($this->cacheMethod === 'kv') {
			$this->cache_kv->delete($cacheKey);
		} else if ($this->cacheMethod === 'apc') {
			$this->cache->apc->delete($cacheKey);
		}
	}

	/**
	 * Delete all cache.
	 * @return void
	 */
	public function clean_cache()
	{
		if (!$this->useCache)
			error('Cache engine is not loaded.! ');
		if ($this->cacheMethod === 'file') {
			return $this->cache->file->clean();
		} else if ($this->cacheMethod === 'kv') {
			return $this->cache_kv->clean();
		} else if ($this->cacheMethod === 'apc') {
			return $this->cache->apc->clean();
		}
	}

	/**
	 * Get all cache.
	 * @return mixed
	 */
	public function all_cache()
	{
		if (!$this->useCache)
			error('Cache engine is not loaded.! ');
		if ($this->cacheMethod === 'file') {
			return $this->cache->file->get_all_cache();
		} else if ($this->cacheMethod === 'kv') {
			return $this->cache_kv->get_all_cache();
		} else if ($this->cacheMethod === 'apc') {
			return $this->cache->apc->get_all_cache();
		}
	}

	/**
	 * Generate a unique cache key based on the method and parameters.
	 * @param string $method The method name (e.g., 'get', 'get_list').
	 * @param array|string|null $params Optional parameters used in the query.
	 * @return string The generated cache key.
	 */
	protected function generate_cache_key(string $method, $params = null): string
	{
		$key = $this->table_name() . '_' . $method;

		// If there are query parameters, append them to the key
		if ($params) {
			if (is_array($params)) {
				$key .= '_' . md5(json_encode($params)); // Use a hash of the parameters
			} else {
				$key .= '_' . $params;
			}
		}

		return $key;
	}

	/**
	 * Delete cache by prefix.
	 * @param string $prefix The prefix to match cache keys.
	 * @return bool
	 */
	public function delete_cache_by_prefix(string $prefix): bool
	{
		if (!$this->useCache)
			error('Cache engine is not loaded.! ');
		if ($this->cacheMethod === 'file') {

			// Define the path to your cache folder (based on your cache configuration)
			$cache_path = $this->config->item('cache_path') ?: APPPATH . 'cache/';

			// Ensure the cache directory exists
			if (!is_dir($cache_path)) {
				return false;
			}

			// Get all cache files
			$files = glob($cache_path . $prefix . '*'); // Match files starting with the prefix

			// Iterate over matched files and delete them
			foreach ($files as $file) {
				// Skip index.html or any other file you don't want to delete
				if (is_file($file) && basename($file) !== 'index.html') {
					unlink($file); // Delete the file
				}
			}
		} else if ($this->cacheMethod === 'kv') {
			// TODO implement delete by prefix, this is clear all cache instead of prefix
			$this->cache_kv->clean();
		} else if ($this->cacheMethod === 'apc') {
			// TODO implement delete by prefix, this is clear all cache instead of prefix
			$this->cache->apc->clean();
		}

		return true;
	}

	/**
	 * Set join for the query.
	 * @param string $table The table to join.
	 * @param string $condition The condition for the join.
	 * @param string $type The type of join (left, right, inner). Defaults to 'inner'.
	 * @return $this
	 */
	public function set_join(string $table, string $condition, string $type = 'inner'): MY_Model
	{
		// Store the join information
		$this->joins[] = [
			'table' => $table,
			'condition' => $condition,
			'type' => $type
		];

		return $this;
	}

	/**
	 * Apply join conditions to the query.
	 * This method is called in the main query builder (like get() or get_list()).
	 * @return void
	 */
	protected function _join(): void
	{
		// Apply each join stored in the joins array
		if (!empty($this->joins)) {
			foreach ($this->joins as $join) {
				$this->db->join($join['table'], $join['condition'], $join['type']);
			}
		}
	}

	/**
	 * Get the table name with schema if available.
	 * @return string
	 */
	public function table_name(): string
	{
		return ($this->schema != '') ? "{$this->schema}.{$this->table}" : $this->table;
	}

	/**
	 * Get the primary key (single key if array).
	 * @return string
	 */
	public function single_primary(): string
	{
		return is_array($this->primaryKey) ? $this->primaryKey[0] : $this->primaryKey;
	}

	/**
	 * Set select fields for the query. Allows multiple calls to append fields.
	 * Supports both comma-separated strings and arrays.
	 * @param string|array $select
	 * @return $this
	 */
	public function set_select($select): MY_Model
	{
		// If it's a string, convert it to an array (handling comma-separated string)
		if (is_string($select)) {
			$select = array_map('trim', explode(',', $select)); // Trim and split by comma
		}

		// If selectFields is already set, merge the new fields to avoid duplication
		if ($select) {
			$this->selectFields = array_unique(array_merge((array) $this->selectFields, $select));
		} else {
			// Otherwise, set the new select fields
			$this->selectFields = $select;
		}

		return $this;
	}

	/**
	 * Set the limit for the query.
	 * @param int $limit
	 * @return $this
	 */
	public function set_limit(int $limit): MY_Model
	{
		$this->limit = $limit;
		return $this;
	}

	/**
	 * Set offset for the query.
	 * @param int $offset
	 * @return $this
	 */
	public function set_offset(int $offset): MY_Model
	{
		$this->offset = $offset;
		return $this;
	}

	/**
	 * Set where conditions.
	 * @param array|string $where
	 * @return $this
	 */
	public function set_where($where): MY_Model
	{
		$this->where = $where;
		if (is_array($where)) {
			foreach ($where as $key => $value) {
				$this->db->where($key, $value);
			}
		} else {
			$this->db->where($this->single_primary(), $where ?: '0');
		}
		return $this;
	}

	/**
	 * Set order by conditions.
	 * @param array|string $order
	 * @return $this
	 */
	public function set_order($order): MY_Model
	{
		$this->orderBy = $order;
		return $this;
	}

	/**
	 * Set group by conditions.
	 * @param array|string $group
	 * @return $this
	 */
	public function set_group($group): MY_Model
	{
		$this->groupBy = $group;
		return $this;
	}

	/**
	 * Count records matching the query.
	 * @param array|string|null $where
	 * @return int
	 */
	public function count($where = null): int
	{
		$this->apply_conditions($where);
		$this->_join();
		$query = $this->db->get($this->table_name());
		return $query->num_rows();
	}

	/**
	 * Find one record.
	 * @param array|string|null $where
	 * @return array|null
	 */
	public function get($where = null): ?array
	{
		// Create a unique cache key based on query conditions
		$cacheKey = $this->generate_cache_key('get', $where);

		if ($this->useCache) {
			// Try to get the result from the cache
			$cachedData = $this->get_cache($cacheKey);
			if ($cachedData !== false) {
				return $cachedData;
			}
		}

		$this->load->database();

		// Apply conditions (where, limit, offset, etc.)
		$this->apply_conditions($where);
		$this->_join();

		// Run the query
		$query = $this->db->get($this->table_name(), 1, 0);

		// Check if a row exists
		if ($query->num_rows() == 1) {
			$data = $query->row_array();
			$query->free_result();
		} else {
			// If no row is found, return column names with empty values
			$data = $this->get_fields();
		}

		// Cache the result if caching is enabled
		if ($this->useCache) {
			$this->save_cache($cacheKey, $data, $this->cacheTime); // Cache for 10 minutes
		}

		return $data;
	}

	/**
	 * Retrieve a list of records using the pre-configured selectFields, where conditions,
	 * limit, offset, orderBy, and groupBy properties.
	 * @return array List of records as an array.
	 */
	public function get_list(): array
	{
		// Create a unique cache key based on query conditions
		$cacheKey = $this->generate_cache_key('get_list', $this->where);

		if ($this->useCache) {
			// Try to get the result from the cache
			$cachedData = $this->get_cache($cacheKey);
			if ($cachedData !== false) {
				return $cachedData;
			}
		}

		$this->load->database();

		$this->apply_conditions();
		$this->_join();

		// Execute the query and retrieve results
		$query = $this->db->get("{$this->table_name()} as tbl");

		$data = $query->result_array();

		// Cache the result if caching is enabled
		if ($this->useCache) {
			$this->save_cache($cacheKey, $data, $this->cacheTime);
		}

		return $data;
	}

	/**
	 * This function retrieves the columns from the table without directly querying information_schema
	 * @return array
	 */
	public function get_fields(): array
	{
		$template = [];

		// Use CodeIgniter's list_fields method to get the column names for the table
		$fields = $this->db->list_fields($this->table_name());

		// Loop through each field and assign an empty value
		foreach ($fields as $field) {
			$template[$field] = ''; // Initialize each column with an empty string
		}

		return $template;
	}

	/**
	 * Save the data to the database.
	 * If a record with the primary key exists, update it.
	 * If it does not exist, create a new record.
	 *
	 * @param array $data The data to save.
	 * @param mixed $id (optional) The ID to check for existence (typically the primary key).
	 * @return bool True if successful, false otherwise.
	 */
	public function save(array $data): bool
	{
		$this->load->database();
		// Determine the primary key(s)
		$primaryKeys = (array) $this->primaryKey; // Ensure it is an array

		$data = $this->clean_data($data);
		// Build the where condition based on primary key(s)
		$where = [];
		foreach ($primaryKeys as $key) {
			$pkValue = isset($data[$key]) ? $data[$key] : 0;
			$where[$key] = $pkValue;
		}
		// Check if the record exists
		$this->set_where($where ?: null);
		$existingRecord = $this->db->get($this->table_name());

		$numRows = $existingRecord->num_rows();

		// Invalidate related cache
		if ($this->useCache) {
			$this->delete_cache($this->generate_cache_key('get', $data[$this->primaryKey]));
			$this->delete_cache($this->generate_cache_key('get_list'));
		}

		if ($numRows > 0) {
			// If it exists, update the record
			$qry = $this->update($data, $where);
			return $qry;
		} else {
			// If it does not exist, insert a new record
			return $this->insert($data);
		}
	}

	/**
	 * Insert data into the table.
	 * @param array $data
	 * @return bool
	 */
	public function insert(array $data): bool
	{
		// Invalidate related cache
		if ($this->useCache) {
			$this->delete_cache_by_prefix($this->table_name());
		}
		return $this->db->insert($this->table_name(), $data);
	}

	/**
	 * Insert multiple records into the table.
	 * @param array $data
	 * @return bool
	 */
	public function insert_batch(array $data): bool
	{
		$this->load->database();
		// Invalidate related cache
		if ($this->useCache) {
			$this->delete_cache_by_prefix($this->table_name());
		}
		return $this->db->insert_batch($this->table_name(), $data);
	}

	/**
	 * Update records in the table.
	 * @param array $data
	 * @param array|string|null $where
	 * @return bool
	 */
	public function update(array $data, $where = null): bool
	{
		if ($where) {
			$this->set_where($where);
		}

		return $this->db->update($this->table_name(), $data);
	}

	/**
	 * Update multiple records in the table.
	 * @param array $data
	 * @param array|string $where
	 * @return bool
	 */
	public function update_batch(array $data, $where): bool
	{
		$this->load->database();
		return $this->db->update_batch($this->table_name(), $data, $where);
	}

	/**
	 * Delete records from the table.
	 * @param array|string|null $where
	 * @return bool
	 */
	public function delete($where = null): bool
	{
		$this->load->database();
		$this->set_where($where);

		// Invalidate related cache
		if ($this->useCache) {
			if (is_array($where)) {
				$primaryKeys = (array) $this->primaryKey; // Ensure it is an array
				// Build the where condition based on primary key(s)
				$key = [];
				foreach ($primaryKeys as $key) {
					$pkValue = isset($where[$key]) ? $where[$key] : 0;
					$key[$key] = $pkValue;
				}
			} else {
				$key = $where;
			}
			$this->delete_cache($this->generate_cache_key('get', $key ?: $where));
			$this->delete_cache($this->generate_cache_key('get_list'));
		}
		return $this->db->delete($this->table_name());
	}

	/**
	 * Apply where, limit, offset, orderBy, groupBy.
	 * @param array|string|null $where
	 * @return void
	 */
	protected function apply_conditions($where = null): void
	{
		if ($this->selectFields) {
			// Apply selectFields like $this->db->select does
			$this->db->select($this->selectFields);
		} else {
			$this->db->select('*');
		}

		if ($where) {
			$this->set_where($where);
		}

		if ($this->orderBy) {
			$this->db->order_by($this->orderBy);
		}

		if ($this->groupBy) {
			$this->db->group_by($this->groupBy);
		}

		if ($this->limit > 0) {
			$this->db->limit($this->limit, $this->offset);
		}
	}

	/**
	 * Manage transactions.
	 */
	public function begin_transaction()
	{
		$this->db->trans_start();
	}

	public function commit_transaction()
	{
		$this->db->trans_complete();
	}

	public function rollback_transaction()
	{
		$this->db->trans_rollback();
	}

	/**
	 * Helper function for returning all records.
	 * @return array
	 */
	public function all(): array
	{
		return $this->get_list();
	}

	/**
	 * Helper function for returning the first record.
	 * @return array|null
	 */
	public function first(): ?array
	{
		return $this->get();
	}

	/**
	 * Log message and stop execution.
	 * @param string $msg
	 * @param string $level
	 * @return void
	 */
	public function log_message(string $msg, string $level = 'error'): void
	{
		log_message($level, $msg);
		exit($msg);
	}

	/**
	 * Utility function to fetch default field values.
	 * @return array
	 */
	public function default_fields(): array
	{
		return array_fill_keys($this->db->list_fields($this->table), null);
	}

	/**
	 * Utility function to get last query.
	 * @return array
	 */
	public function last_query(): string
	{
		return $this->db->last_query();
	}

	/**
	 * Clean and sanitize data before saving to the database.
	 * Ensures emojis and other 4-byte Unicode characters are handled correctly.
	 *
	 * @param array $value The input data to be cleaned.
	 * @param string|bool $table Optional: The table name to filter valid columns.
	 * @return array The cleaned and filtered data.
	 */
	function clean_data($value, $table = FALSE)
	{
		$data = array();

		foreach ($value as $key => $val) {
			// Only clean if it's not an array
			if (!is_array($val)) {
				$data[$key] = trim($val); // Trim whitespace

				// Safely clean the data while preserving Unicode characters
				$data[$key] = strip_image_tags($data[$key]);    // Removes <img> tags but keeps text
				$data[$key] = quotes_to_entities($data[$key]);  // Converts quotes to HTML entities
				$data[$key] = encode_php_tags($data[$key]);     // Encode PHP tags

				// Ensure the string is UTF-8 encoded
				if (!mb_check_encoding($data[$key], 'UTF-8')) {
					$data[$key] = mb_convert_encoding($data[$key], 'UTF-8', 'auto');
				}
			}
		}

		// Filter data by table fields
		$cleaned_data = array();

		if (!empty($data)) {
			// Use the provided table name or default to the current model's table
			$table = ($table !== FALSE) ? $table : $this->table;

			// Get valid fields for the table
			$fields = $this->db->list_fields($table);

			// Filter only valid table fields from the data
			$fields = array_fill_keys($fields, '');

			// Intersect the cleaned data with the valid fields
			$cleaned_data = array_intersect_key($data, $fields);
		}

		return $cleaned_data;
	}
}
