<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Phpinfo extends CI_Controller
{
	public function index()
	{
		echo phpinfo();
	}
}
