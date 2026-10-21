'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { lastAddedName } = useCart();

  if (!lastAddedName) return null;

  return (
    <div className="cart-toast" role="status" aria-live="polite">
      <span>
        ✓ Додано: <strong>{lastAddedName}</strong>
      </span>
      <Link href="/cart" className="toast-link">
        До кошика →
      </Link>
    </div>
  );
};
