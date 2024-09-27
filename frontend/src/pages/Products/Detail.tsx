import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { getApiUrl } from '../../helpers/url';
import Alert from '../../components/Alert';
import { useAppContext } from '../../contexts/AppContext';

interface Product {
  item_id: number;
  sku: string;
  slug: string;
  name: string;
  price: string;
  stock: number;
  description: string;
}


const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get product ID fro
  const { setLoading } = useAppContext();
  const formTitle = id ? 'Edit Product' : 'Add Product';
  const [product, setProduct] = useState<Product | null>({
    item_id: 0,
    sku: '',
    slug: '',
    name: '',
    price: '',
    stock: 0,
    description: '',
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // const kvUrl = import.meta.env.VITE_KV_REST_API_URL;
  // const kvToken = import.meta.env.VITE_KV_REST_API_TOKEN;

  // Fetch the product data for editing
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null); // Clear previous errors
        const response = await fetch(`${getApiUrl()}product/get/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const productData: Product = await response.json();
        setProduct(productData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // const deleteProductsInKV = async () => {
  //   const kvDeleteResponse = await fetch(`${kvUrl}/del/products`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${kvToken}`,
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (!kvDeleteResponse.ok) {
  //     throw new Error('Failed to delete products cache in KV store');
  //   }
  // };

  // Handle form submission for updating the product
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!product) return;
    setLoading(true);
    try {
      const response: Response = await fetch(`${getApiUrl()}product/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok || response.status !== 200) {
        // Try to parse the response body as JSON
        const errorResponse = await response.json();
        if (errorResponse && errorResponse.message) {
          throw new Error(errorResponse.message); // If a message exists, use it
        } else {
          throw new Error(JSON.stringify(errorResponse)); // Otherwise, use the full JSON response
        }
      }

      // deleteProductsInKV();
      // Navigate back to the product list or details page after updating
      navigate('/products');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  // Handle changes in form inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setProduct((prevProduct) =>
      prevProduct ? { ...prevProduct, [name]: value } : null,
    );
  };

  // if (loading)
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <div className="relative inline-flex">
  //         <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
  //         <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
  //         <div className="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
  //       </div>
  //     </div>
  //   );
  // if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Breadcrumb pageName={formTitle} />

      <div className="flex flex-col gap-9">
        {/* Edit Product Form */}
        {error && <Alert type="error" title="Save Failed" message={error} />}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              {formTitle}
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              {/* Product SKU */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  SKU
                </label>
                <input
                  type="text"
                  name="sku"
                  value={product?.sku || ''}
                  onChange={handleInputChange}
                  placeholder="Enter product SKU"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              {/* Product Slug */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={product?.slug || ''}
                  onChange={handleInputChange}
                  placeholder="Enter product Slug"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              {/* Product Name */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={product?.name || ''}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              {/* Product Price */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Product Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={product?.price || ''}
                  onChange={handleInputChange}
                  placeholder="Enter product price"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              {/* Product Stock */}
              <div className="mb-4.5">
                <label className="mb-2.5 block text-black dark:text-white">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stock"
                  value={product?.stock || ''}
                  onChange={handleInputChange}
                  placeholder="Enter stock quantity"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-black dark:text-white">
                  Description
                </label>
                <textarea
                  rows={6}
                  name="description"
                  placeholder="Description"
                  onChange={handleInputChange}
                  defaultValue={product?.description || ''}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
