'use client';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
        <h1>Product Showcase</h1>
        <div className="grid">
        {products.map(product => (
            <ProductCard key={product.id} product={product} />
        ))}
        </div>
    </div>
  );
}
