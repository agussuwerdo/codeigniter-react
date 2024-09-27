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
	function error($err, $error_code = '400', $error_header = 'error')
	{

		// For actual requests, proceed with error handling
		if (!headers_sent()) {
			header('Content-Type: application/json');
			header("HTTP/1.1 " . $error_code . " " . $error_header);
		}

		if (is_array($err)) {
			// Directly encode and output the array
			echo json_encode($err, JSON_PRETTY_PRINT);
		} else {
			$_this = &get_instance();
			$_this->result['status_code'] = 0;
			$_this->result['message'] = $err;
			// Output the wrapped message as JSON
			echo json_encode($_this->result, JSON_PRETTY_PRINT);
		}

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
		if (!headers_sent()) {
			header('Content-Type: application/json');
			header("HTTP/1.1 " . $success_code . " " . $success_header);
		}

		if (is_array($msg)) {
			// Directly encode and output the array
			echo json_encode($msg, JSON_PRETTY_PRINT);
		} else {
			$_this = &get_instance();
			$_this->result['status_code'] = 1;
			$_this->result['message'] = $msg;
			// Output the wrapped message as JSON
			echo json_encode($_this->result, JSON_PRETTY_PRINT);
		}
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