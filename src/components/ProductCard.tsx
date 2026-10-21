'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, compact }) => {
  const [selectedSizeKey, setSelectedSizeKey] = useState<string>(product.sizes[0].key);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const currentSize =
    product.sizes.find((s) => s.key === selectedSizeKey) || product.sizes[0];

  const handleAdd = () => {
    addToCart(product, currentSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  const isTea = product.line === 'tea';
  const tagLabel = isTea ? 'ГАРЯЧЕ · Oleg Cook tea' : 'ХОЛОДНЕ · Oleg Cook';

  return (
    <article className={`product ${compact ? 'compact' : ''}`}>
      <div className="media">
        <Image
          src={product.img}
          alt={`${product.name}, ${currentSize.volume}`}
          width={800}
          height={isTea ? 1421 : 800}
          style={{ objectPosition: product.pos || 'center' }}
          loading="lazy"
        />
      </div>

      <span className="kind">{tagLabel}</span>
      <h3>{product.name}</h3>
      <p className="note">{product.note}</p>

      {product.sizes.length > 1 && (
        <div className="sizes" role="radiogroup" aria-label="Вибір об'єму">
          {product.sizes.map((s) => (
            <button
              key={s.key}
              type="button"
              className="size"
              aria-pressed={selectedSizeKey === s.key}
              onClick={() => setSelectedSizeKey(s.key)}
            >
              {s.volume}
            </button>
          ))}
        </div>
      )}

      <div className="buy">
        <div className="price">{currentSize.price} грн</div>
        <button
          type="button"
          className={`btn btn-green btn-add ${isAdded ? 'added' : ''}`}
          onClick={handleAdd}
        >
          {isAdded ? '✓ Додано' : 'У кошик'}
        </button>
      </div>
    </article>
  );
};
