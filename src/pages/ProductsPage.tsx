import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  searchProducts,
  getCategories,
  getProductsByCategory,
  getProducts,
} from "../services/api";
import { Product } from "../types/product";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<
    {
      name: string;
      slug: string;
      url: string;
    }[]
  >([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [initialLoad, setInitialLoad] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const fetchInitialProducts = async () => {
      const initialProducts = await getProducts(0, 24);
      setProducts(initialProducts);
      setInitialLoad(false);
    };
    if (initialLoad) {
      fetchInitialProducts();
    }
  }, [initialLoad]);

  useEffect(() => {
    if (initialLoad || page === 1) return;
    const fetchMoreProducts = async () => {
      const newProducts = await getProducts((page - 1) * 24, 24);
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    };
    fetchMoreProducts();
  }, [page, initialLoad]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setCategories(categories);
    };
    fetchCategories();
  }, []);

  const handleSearch = async () => {
    const results = await searchProducts(searchTerm);
    setProducts(results);
  };

  const handleCategoryChange = async (category: string) => {
    setSelectedCategory(category);
    const results = await getProductsByCategory(category);
    setProducts(results);
  };

  const lastProductElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Produtos", path: "/products" },
          ]}
        />
        <h1 className="text-3xl font-extrabold mb-6">Produtos</h1>
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="">Todas as Categorias</option>
              {categories.map((category) => (
                <option key={category.slug} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar produtos..."
              className="border p-2 rounded"
            />
            <button
              onClick={handleSearch}
              className="ml-2 p-2 bg-blue-500 text-white rounded"
            >
              Pesquisar
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
