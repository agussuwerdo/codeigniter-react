<?php defined('BASEPATH') or exit('No direct script access allowed');

class Migration_create_categories extends CI_Migration
{
	public function up()
	{
		// Determine if the database is MySQL or PostgreSQL
		$isMysql = $this->db->platform() === 'mysql' || $this->db->platform() === 'mysqli';

		// Define fields
		$fields = array(
			'category_code' => array('type' => 'varchar', 'constraint' => '30', 'key' => TRUE),
			'category_name' => array('type' => 'varchar', 'constraint' => '100', 'null' => TRUE),
			'created_at' => array('type' => !$isMysql ? 'timestamp' : 'datetime', 'null' => TRUE),
			'updated_at' => array('type' => !$isMysql ? 'timestamp' : 'datetime', 'null' => TRUE),
		);

		// Create table
		$this->dbforge->add_field($fields);
		$this->dbforge->add_key("category_code", true);
		$this->dbforge->create_table("categories", TRUE);

		// Generate Table Data
		$this->db->query("INSERT INTO categories (category_code, category_name, created_at, updated_at) VALUES 
            ('aksesoris', 'Aksesoris', NULL, NULL),
            ('celana', 'Celana', NULL, NULL),
            ('pakaian', 'Pakaian', NULL, NULL);
        ");
	}

	public function down()
	{
		// Drop table categories
		$this->dbforge->drop_table("categories", TRUE);
	}
}
