'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import { Product, ProductSize, CartItem } from '../types/product';
import { PRODUCTS } from '../data/products';

const CART_STORAGE_KEY = 'oleg_cook_cart';

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product, size: ProductSize, quantity?: number) => void;
  removeFromCart: (productId: string, sizeKey: string) => void;
  updateQuantity: (productId: string, sizeKey: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  lastAddedName: string | null;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [lastAddedName, setLastAddedName] = useState<string | null>(null);

  // Initialize from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const raw = JSON.parse(stored) as Record<string, number>;
        const loaded: CartItem[] = [];

        Object.entries(raw).forEach(([compoundKey, qty]) => {
          const [id, sizeKey] = compoundKey.split('|');
          const product = PRODUCTS.find((p) => p.id === id);
          if (product && qty > 0) {
            const size = product.sizes.find((s) => s.key === sizeKey) || product.sizes[0];
            loaded.push({
              id,
              sizeKey: size.key,
              quantity: Math.min(qty, 99),
              product,
              size,
            });
          }
        });

        setItems(loaded);
      }
    } catch {
      // Storage unavailable / private mode
    } finally {
      setIsInitialized(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (!isInitialized) return;
    try {
      const record: Record<string, number> = {};
      items.forEach((item) => {
        record[`${item.id}|${item.sizeKey}`] = item.quantity;
      });
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Ignore
    }
  }, [items, isInitialized]);

  const addToCart = useCallback((product: Product, size: ProductSize, quantity = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id && i.sizeKey === size.key);
      if (idx > -1) {
        const next = [...prev];
        next[idx] = {
          ...next[idx],
          quantity: Math.min(next[idx].quantity + quantity, 99),
        };
        return next;
      }
      return [...prev, { id: product.id, sizeKey: size.key, quantity, product, size }];
    });

    setLastAddedName(`${product.name} (${size.volume})`);
    setTimeout(() => {
      setLastAddedName(null);
    }, 2800);
  }, []);

  const removeFromCart = useCallback((productId: string, sizeKey: string) => {
    setItems((prev) =>
      prev.filter((i) => !(i.id === productId && i.sizeKey === sizeKey)),
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, sizeKey: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(productId, sizeKey);
        return;
      }
      setItems((prev) =>
        prev.map((i) =>
          i.id === productId && i.sizeKey === sizeKey
            ? { ...i, quantity: Math.min(quantity, 99) }
            : i,
        ),
      );
    },
    [removeFromCart],
  );

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () => items.reduce((sum, item) => sum + item.size.price * item.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalCount,
      totalPrice,
      lastAddedName,
    }),
    [
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalCount,
      totalPrice,
      lastAddedName,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = (): CartContextValue => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
