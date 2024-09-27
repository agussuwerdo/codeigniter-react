<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Debug extends CI_Controller
{

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/userguide3/general/urls.html
	 */
	public function index()
	{
		echo "debug controller called";
	}

	public function env()
	{
		print_r($_ENV);
	}

	public function env_get($envvar)
	{
		echo getenv($envvar);
	}

	public function db()
	{
		$this->load->database();
		echo "connected";
	}

	public function product()
	{
		$this->load->database();
		$query = $this->db->get('products');
		print_r($query->result_array());
		echo "connected";
	}

	public function eloquent()
	{
		$this->load->library('eloquent');

		$this->load->model('Product');

		$product = Product::all(); // Fetch all users from 'users' table
		echo 'Eloquent is loaded and running.';
	}

	public function list()
	{
		echo base_url('product');
	}

	public function base_url()
	{
		echo base_url();
	}

	public function set_cache($cacheKey)
	{
		// Retrieve the raw input stream
		$input = $this->input->raw_input_stream;

		// Attempt to decode the input as JSON
		$data = json_decode($input, true);

		// Check if JSON decoding failed
		if (json_last_error() === JSON_ERROR_NONE) {
			// If it's valid JSON, save the decoded array
			$cacheData = $data;
		} else {
			// If it's not valid JSON, save the raw input string
			$cacheData = $input;
		}

		$this->load->model('product_model');

		try {
			// Code that might throw an exception or error
			$this->product_model->save_cache($cacheKey, $cacheData);
		} catch (ExceptionType $e) {
			// Code to handle the exception
			log_message('error', 'Failed to save cache for key: ' . $cacheKey);
			echo 'Caught exception: ',  $e->getMessage(), "\n";
			error('Failed to save cache', 500); // Show a 500 Internal Server Error
		}
	}

	public function get_cache($cacheKey)
	{
		// $this->load->library('Cache_kv');
		$this->load->model('product_model');
		$cacheValue = $this->product_model->get_cache($cacheKey);

		if (!is_array($cacheValue)) {
			echo ($cacheValue);
		} else {
			// Set the content type to application/json and output the data
			$this->output
				->set_content_type('application/json')
				->set_output(json_encode($cacheValue));
		}
	}

	public function delete_cache($prefix = '')
	{
		$this->load->model('product_model');
		echo $this->product_model->delete_cache_by_prefix($prefix);
	}

	public function clean_cache()
	{
		$this->load->model('product_model');
		echo $this->product_model->clean_cache();
	}

	public function all_cache()
	{
		$this->load->model('product_model');
		$data = $this->product_model->all_cache();
		success($data);
		// echo json_encode($data, JSON_PRETTY_PRINT);
	}
	public function cache_info($key)
	{
		print_r(apcu_key_info($key));
	}
}
