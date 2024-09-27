<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Product extends MY_Controller
{
	function __construct()
	{
		parent::__construct();
		date_default_timezone_set('Asia/Jakarta');
		// $this->load->library('session');
		$this->load->model('product_model');
	}

	public function index()
	{
		$this->load->view('product/product/main');
	}

	public function get($id)
	{
		$product = $this->product_model->get($id);

		// Set the content type to application/json and output the data
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode($product));
	}

	public function get_list()
	{
		$this->product_model->set_select('item_id');
		$this->product_model->set_select('sku');
		$this->product_model->set_select('slug');
		$this->product_model->set_select('name');
		$this->product_model->set_select('price');
		$this->product_model->set_select('stock');
		$this->product_model->set_join('categories cat', 'tbl.f_category_code = cat.category_code', 'left');
		$products = $this->product_model->get_list();

		// Set the content type to application/json and output the data
		$this->output
			->set_content_type('application/json')
			->set_output(json_encode($products));
	}

	public function save()
	{
		// Get JSON input data
		$input_data = json_decode($this->input->raw_input_stream, true);

		if (empty($input_data)) {
			error('No data provided');
		}

		// Validate the input
		if (!$input_data['sku']) error('sku is empty');
		if (!$input_data['slug']) error('slug is empty');
		if (!$input_data['name']) error('name is empty');
		if (!$input_data['price']) error('price is empty');
		if (!$input_data['stock']) error('stock is empty');

		// Prepare product data
		$product_data = array(
			'item_id'  => $input_data['item_id'] ?: 0,
			'sku'      => $input_data['sku'],
			'slug'     => $input_data['slug'],
			'name'     => $input_data['name'],
			'price'    => $input_data['price'],
			'stock'    => $input_data['stock'],
			'description'    => $input_data['description'],
		);

		// Save the product
		$save = $this->product_model->save($product_data);
		if ($this->db->trans_status() === FALSE) {
			$this->db->trans_rollback();
			error('Save failed');
		} else {
			$this->db->trans_commit();

			success('Save success');
		}
	}

	public function delete($id)
	{
		// Validate if ID is provided
		if (empty($id)) {
			error('Product ID is required');
		}

		// Delete the product by ID using the model
		$delete = $this->product_model->delete($id);

		if ($delete) {
			// If the deletion is successful, commit the transaction
			$this->db->trans_commit();

			// Return success response
			success('Product deleted successfully');
		} else {
			// If the deletion fails, rollback the transaction
			$this->db->trans_rollback();

			// Return error response
			error('Failed to delete product');
		}
	}
}
