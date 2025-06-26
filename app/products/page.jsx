import React from 'react';

const getProducts = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products", { cache: "no-store" });
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return [];
  }
};

export default async function ProductDetail({ params }) {
  const product = await getProducts(params.slug);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
}