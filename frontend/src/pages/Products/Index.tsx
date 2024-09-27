// src/pages/products/index
import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { getApiUrl } from '../../helpers/url';
import { Link } from 'react-router-dom';
import MyTable from '../../components/Tables/MyTable';

interface Product {
  item_id: number;
  sku: string;
  slug: string;
  name: string;
  price: string;
  stock: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const kvUrl = import.meta.env.VITE_KV_REST_API_URL;
  const kvToken = import.meta.env.VITE_KV_REST_API_TOKEN;

  const fetchProductsFromAPI = async (): Promise<Product[]> => {
    const response = await fetch(getApiUrl() + 'product/get_list');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  };

  const fetchProducts = async () => {
    try {
      // let productList = await fetchProductsFromKV();
      // if (!productList) {
      const productList = await fetchProductsFromAPI();
      // await storeProductsInKV(productList);
      // }

      setProducts(productList);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // const fetchProductsFromKV = async (): Promise<Product[] | null> => {
    //   try {
    //     const kvResponse = await fetch(`${kvUrl}/get/products`, {
    //       headers: {
    //         Authorization: `Bearer ${kvToken}`,
    //       },
    //     });

    //     if (!kvResponse.ok) {
    //       throw new Error('KV fetch failed');
    //     }

    //     const kvData = await kvResponse.json();
    //     if (kvData.result) {
    //       const parsedValue = JSON.parse(kvData.result);
    //       return JSON.parse(parsedValue.value);
    //     } else {
    //       return null;
    //     }
    //   } catch (error) {
    //     console.error('KV fetch error', error);
    //     return null;
    //   }
    // };

    // const storeProductsInKV = async (products: Product[]) => {
    //   try {
    //     await fetch(`${kvUrl}/set/products`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${kvToken}`,
    //       },
    //       body: JSON.stringify({ value: JSON.stringify(products), ex: 3600 }), // Expire in 1 hour
    //     });
    //   } catch (error) {
    //     console.error('KV store error', error);
    //   }
    // };

    fetchProducts();
  }, [kvUrl, kvToken]);

  const deleteProduct = async (itemId: number) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return;
    }

    try {
      const response = await fetch(`${getApiUrl()}product/delete/${itemId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      fetchProducts();

      alert('Product deleted successfully');
    } catch (error) {
      console.error('Delete error', error);
      alert('Error deleting product');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }
  const columns = [
    {
      name: 'Item ID',
      selector: (row: Product) => row.item_id,
      sortable: true,
    },
    {
      name: 'SKU',
      selector: (row: Product) => row.sku,
      sortable: true,
    },
    {
      name: 'Slug',
      selector: (row: Product) => row.slug,
      sortable: true,
    },
    {
      name: 'Name',
      selector: (row: Product) => row.name,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row: Product) => row.price,
      sortable: true,
    },
    {
      name: 'Stock',
      selector: (row: Product) => row.stock,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row: Product) => (
        <div className="flex items-center space-x-3.5">
          <Link
            to={`/products/edit/${row.item_id}`}
            className="hover:text-primary"
          >
            Edit
          </Link>
          <button
            className="hover:text-primary"
            onClick={() => {
              deleteProduct(row.item_id);
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <Breadcrumb pageName="Products" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <MyTable<Product>
            columns={columns}
            data={products}
            loading={loading}
            pagination
            paginationPerPage={10} // Example of passing rows per page
            paginationRowsPerPageOptions={[10, 20, 30]} // Example of pagination options
            headerElement={
              <Link
                to="add"
                className="justify-center rounded bg-primary py-3 px-10 font-medium text-gray hover:bg-opacity-90"
              >
                Add
              </Link>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Products;
