<?php
defined('BASEPATH') or exit('No direct script access allowed');

class MY_Controller extends CI_Controller
{
  public function __construct()
  {
    parent::__construct();
    date_default_timezone_set('Asia/Jakarta');
    Header('Access-Control-Allow-Origin: *'); //for allow any domain, insecure
    Header('Access-Control-Allow-Headers: *'); //for allow any headers, insecure
    Header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE'); //method allowed
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Access-Control-Allow-Credentials: true");

		// Handle preflight OPTIONS request with a success code to satisfy CORS
		if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
			header("HTTP/1.1 200 OK");
			exit();
		}
  }
}
