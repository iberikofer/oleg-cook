import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="stack footer-brand">
          <Link href="/" className="logo" aria-label="Oleg Cook — на головну">
            Oleg&nbsp;<span>Cook</span>
          </Link>
          <span>Фруктові мікси та чаї-концентрати. Виробництво — Вінниця.</span>
        </div>

        <nav className="stack" aria-label="Нижнє меню">
          <Link href="/chai">Чаї</Link>
          <Link href="/miksy">Мікси для лимонадів</Link>
          <Link href="/dlya-zakladiv">Для закладів</Link>
          <Link href="/#faq">Доставка й оплата</Link>
        </nav>

        <div className="stack">
          <a href="tel:+380683056257">
            <strong>068 305 62 57</strong>
          </a>
          <a
            href="https://www.instagram.com/oleg_cook/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram @oleg_cook
          </a>
          <span>Вінниця · доставка по місту</span>
        </div>
      </div>
    </footer>
  );
};
