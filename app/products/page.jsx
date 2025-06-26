import React from 'react';

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) throw new Error('Product not found');
  return res.json();
}

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.slug);

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