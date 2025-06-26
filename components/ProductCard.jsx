'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function ProductCard({ product }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favs.includes(product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favs.includes(product.id)) {
      favs = favs.filter(id => id !== product.id);
    } else {
      favs.push(product.id);
    }
    localStorage.setItem('favorites', JSON.stringify(favs));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='card'>
      <img src={product.image} alt={product.title} width="100" />
      <h2>{product.title}</h2>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorite'}
      </button>
      <br />
      <Link href={`/products/${product.id}`}>View Details</Link>
    </div>
  );
}