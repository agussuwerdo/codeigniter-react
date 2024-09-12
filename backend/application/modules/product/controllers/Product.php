<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Product extends MY_Controller
{
	function __construct()
	{
		parent::__construct();
		date_default_timezone_set('Asia/Jakarta');
		// $this->load->library('session');
	}

	public function index()
	{
		$this->load->view('product/product/main');
	}
}
