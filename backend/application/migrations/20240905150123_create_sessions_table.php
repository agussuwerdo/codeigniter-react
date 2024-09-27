<?php defined('BASEPATH') or exit('No direct script access allowed');

class Migration_create_sessions_table extends CI_Migration
{
    public function up()
    {
        // Determine if the database is MySQL or PostgreSQL
        $isMysql = $this->db->platform() === 'mysql' || $this->db->platform() === 'mysqli';

        // Define the ci_sessions table structure
        $this->dbforge->add_field(array(
            'id' => array(
                'type' => 'VARCHAR',
                'constraint' => 128,
                'null' => FALSE
            ),
            'ip_address' => array(
                'type' => 'VARCHAR',
                'constraint' => 45,
                'null' => FALSE
            ),
            'timestamp' => $isMysql ? array(
                'type' => 'INT',
                'constraint' => 10,
                'unsigned' => TRUE,
                'null' => FALSE,
                'default' => 0
            ) : array(
                'type' => 'INTEGER',
                'null' => FALSE,
                'default' => 0
            ),
            'data' => array(
                'type' => $isMysql ? 'BLOB' : 'BYTEA', // Use BYTEA for PostgreSQL
                'null' => FALSE
            )
        ));

        // Add primary key on id
        $this->dbforge->add_key('id', TRUE);

        // Add index on timestamp to improve query performance
        $this->dbforge->add_key('timestamp');

        // Create the ci_sessions table
        $this->dbforge->create_table('ci_sessions', TRUE);

        // If using MySQL, set the storage engine to InnoDB for performance
        if ($isMysql) {
            $this->db->query('ALTER TABLE `ci_sessions` ENGINE = InnoDB');
        }
    }

    public function down()
    {
        // Drop the ci_sessions table if it exists
        $this->dbforge->drop_table('ci_sessions', TRUE);
    }
}
