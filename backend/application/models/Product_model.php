<?php defined('BASEPATH') or exit('No direct script access allowed');

class Product_model extends MY_Model
{
	// Set the table and primary key for the Product model
	protected string $table = 'products';     // Table name
	protected $primaryKey = 'item_id';      // Primary key

	public function __construct()
	{
		parent::__construct();
		$this->use_cache();
	}

	/**
	 * Get product by ID.
	 * @param int $id Product ID.
	 * @return array|null Product data or null if not found.
	 */
	public function get_product_by_id(int $id): ?array
	{
		// Set the select fields (optional, you can customize which fields to return)
		$this->set_select(['id', 'name', 'price', 'description', 'category_id']);

		// Set the where condition
		$this->set_where(['id' => $id]);

		// Retrieve the product
		return $this->get();
	}

	/**
	 * Get a list of all products with optional filters.
	 * @param array $filters Optional filters for products (e.g., category, price range).
	 * @return array List of products.
	 */
	public function get_all_products(array $filters = []): array
	{
		// Set optional filters
		if (!empty($filters)) {
			$this->set_where($filters);
		}

		// Set select fields (optional)
		$this->set_select(['id', 'name', 'price', 'category_id']);

		// Set ordering (optional)
		$this->set_order(['created_at' => 'DESC']);

		// Retrieve all products
		return $this->get_list();
	}

	/**
	 * Insert a new product.
	 * @param array $data Product data.
	 * @return bool True if insert was successful, false otherwise.
	 */
	public function insert_product(array $data): bool
	{
		// Insert the product into the products table
		return $this->insert($data);
	}

	/**
	 * Update an existing product.
	 * @param int $id Product ID.
	 * @param array $data Product data to update.
	 * @return bool True if update was successful, false otherwise.
	 */
	public function update_product(int $id, array $data): bool
	{
		// Set the where condition for the product ID
		$this->set_where(['id' => $id]);

		// Update the product
		return $this->update($data);
	}

	/**
	 * Delete a product by ID.
	 * @param int $id Product ID.
	 * @return bool True if delete was successful, false otherwise.
	 */
	public function delete_product(int $id): bool
	{
		// Set the where condition for the product ID
		$this->set_where(['id' => $id]);

		// Delete the product
		return $this->delete();
	}
}
