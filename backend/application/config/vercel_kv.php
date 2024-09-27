<?php

defined('BASEPATH') or exit('No direct script access allowed');

$config = array();

$config['kv_api_url'] = getenv('KV_REST_API_URL');
$config['kv_api_token'] = getenv('KV_REST_API_TOKEN');
