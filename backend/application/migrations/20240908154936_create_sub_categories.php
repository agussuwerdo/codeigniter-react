<?php defined('BASEPATH') or exit('No direct script access allowed');

class Migration_create_sub_categories extends CI_Migration
{
	public function up()
	{
		// Determine if the database is MySQL or PostgreSQL
		$isMysql = $this->db->platform() === 'mysql' || $this->db->platform() === 'mysqli';

		// Define fields
		$fields = array(
			'f_category_code' => array('type' => 'varchar', 'constraint' => '30', 'key' => TRUE),
			'sub_category_code' => array('type' => 'varchar', 'constraint' => '30', 'key' => TRUE),
			'sub_category_name' => array('type' => 'varchar', 'constraint' => '100', 'null' => TRUE),
			'created_at' => array('type' => !$isMysql ? 'timestamp' : 'datetime', 'null' => TRUE),
			'updated_at' => array('type' => !$isMysql ? 'timestamp' : 'datetime', 'null' => TRUE),
		);

		// Create table
		$this->dbforge->add_field($fields);
		$this->dbforge->add_key("f_category_code", true);
		$this->dbforge->add_key("sub_category_code", true);
		$this->dbforge->create_table("sub_categories", TRUE);

		// Generate Table Data
		$this->db->query("INSERT INTO sub_categories (f_category_code, sub_category_code, sub_category_name, created_at, updated_at) VALUES 
            ('aksesoris', 'dasi', 'Dasi', NULL, NULL),
            ('aksesoris', 'kaos-kaki', 'Kaos Kaki', NULL, NULL),
            ('aksesoris', 'masker', 'Masker', NULL, NULL),
            ('celana', 'celana-jeans', 'Celana Jeans', NULL, NULL),
            ('pakaian', 'blazer', 'Blazer', NULL, NULL),
            ('pakaian', 'kaos-pria', 'Kaos Pria', NULL, NULL),
            ('pakaian', 'pakaian-olahraga', 'Pakaian Olahraga', NULL, NULL);
        ");
	}

	public function down()
	{
		// Drop table sub_categories
		$this->dbforge->drop_table("sub_categories", TRUE);
	}
}
