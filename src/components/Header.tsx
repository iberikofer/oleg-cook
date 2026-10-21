'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '../context/CartContext';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalCount } = useCart();
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="logo"
          href="/"
          onClick={closeMenu}
          aria-label="Oleg Cook — на головну"
        >
          Oleg&nbsp;<span>Cook</span>
        </Link>

        <nav
          className={`main-nav ${isMenuOpen ? 'open' : ''}`}
          id="main-nav"
          aria-label="Головне меню"
        >
          <Link
            href="/chai"
            onClick={closeMenu}
            className={pathname === '/chai' ? 'active' : ''}
          >
            Чаї
          </Link>
          <Link
            href="/miksy"
            onClick={closeMenu}
            className={pathname === '/miksy' ? 'active' : ''}
          >
            Мікси для лимонадів
          </Link>
          <Link
            href="/dlya-zakladiv"
            onClick={closeMenu}
            className={pathname === '/dlya-zakladiv' ? 'active' : ''}
          >
            Для закладів
          </Link>
          <Link href="/#faq" onClick={closeMenu}>
            Доставка й оплата
          </Link>
          <a className="nav-phone" href="tel:+380683056257">
            068 305 62 57 · щодня 9:00–19:00
          </a>
        </nav>

        <a
          className="header-phone"
          href="tel:+380683056257"
          aria-label="Подзвонити 068 305 62 57"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
          </svg>
          <span className="phone-text">068 305 62 57</span>
        </a>

        <Link
          className="btn btn-green cart-btn"
          href="/koshyk"
          onClick={closeMenu}
          aria-label="Кошик"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="9" cy="20" r="1.5" />
            <circle cx="18" cy="20" r="1.5" />
            <path d="M2 3h3l2.6 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.5L22 7H6" />
          </svg>
          <span className="cart-label">Кошик ·</span>
          <span className="cart-count">{totalCount}</span>
        </Link>

        <button
          type="button"
          className="burger"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-controls="main-nav"
          aria-expanded={isMenuOpen}
          aria-label="Меню"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
};
