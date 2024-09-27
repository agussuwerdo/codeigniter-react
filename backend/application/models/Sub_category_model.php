<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Sub_category_model extends MY_Model
{
	protected string $table = 'sub_categories';
	protected $primaryKey = array('f_category_code', 'sub_category_code');
	function __construct()
	{
		parent::__construct();
		$this->set_select('tbl.*,cat.category_name');
	}
}
