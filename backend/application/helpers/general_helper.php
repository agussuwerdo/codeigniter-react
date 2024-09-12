<?php

/**
 * Global helper function.
 * 
 * @author		agussuwerdo
 */
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * Function to show error message then exit.
 *
 * @param String $msg Result error message
 * @param String $error_code Result Status Code
 * @param String $error_header Result header
 * 
 * @return json error result
 * 
 */
if (!function_exists('error')) {
	function error($err, $error_code = '202', $error_header = 'error')
	{
		$_this = &get_Instance();
		$_this->result['status_code']			= 0;
		$_this->result['message']				= $err;
		if (!headers_sent()) {
			header('Content-Type: application/json');
			header("HTTP/1.1 " . $error_code . " " . $error_header);
		}
		echo json_encode($_this->result);
		exit;
	}
}

/**
 * Function to show success message.
 *
 * @param String $msg Result Success message
 * @param String $success_code Result Status Code
 * @param String $success_header Result header
 * 
 * @return json Success result
 * 
 */
if (!function_exists('success')) {
	function success($msg = '', $success_code = '200', $success_header = 'OK')
	{
		$_this = &get_Instance();
		$_this->result['status_code']			= 1;
		$_this->result['message']				= $msg;
		if (!headers_sent()) {
			header('Content-Type: application/json');
			header("HTTP/1.1 " . $success_code . " " . $success_header);
		}
		echo json_encode($_this->result);
	}
}

/**
 * Base46 encode function
 * 
 * @return String encoded string
 * 
 */
function encode($str)
{
	return base64_encode($str);
}

/**
 * Base46 decode function
 * 
 * @return String decoded string
 * 
 */
function decode($str)
{
	return base64_decode($str);
}