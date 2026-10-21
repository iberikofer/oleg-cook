import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export const metadata: Metadata = {
  title: 'Фруктовий чай-концентрат — Oleg Cook tea, Вінниця',
  description:
    'Концентрати фруктового чаю від Oleg Cook. 7 натуральних смаків, 0,5 л та 1 л. Швидка доставка по Вінниці та Україні.',
};

export default function ChaiPage() {
  const teas = PRODUCTS.filter((p) => p.line === 'tea');

  return (
    <>
      <section className="page-hero-green">
        <div className="container">
          <div className="stack" style={{ maxWidth: '640px', gap: '16px' }}>
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>
              Гаряча лінійка · Oleg Cook tea
            </div>
            <h1>Oleg Cook tea — фруктовий чай-концентрат</h1>
            <p>
              Ягоди, фрукти й трави в одній пляшці. Трохи концентрату на дно чашки,
              долийте окріп — чай готовий за 10 секунд.
            </p>
          </div>
        </div>
      </section>

      {/* How to prepare */}
      <section className="container" style={{ paddingTop: '40px' }}>
        <h2 className="sr-only">Як приготувати чай</h2>
        <div className="steps-row">
          <div className="step-card">
            <span className="step-num">1</span>
            <strong>15 мл на 100 мл</strong>
            <span>≈40 мл концентрату на чашку 250 мл</span>
          </div>
          <div className="step-card">
            <span className="step-num">2</span>
            <strong>Долийте окріп</strong>
            <span>Або холодну воду з льодом для айс-ті</span>
          </div>
          <div className="step-card">
            <span className="step-num">3</span>
            <strong>Перемішайте</strong>
            <span>Напій готовий без заварювання й очікування</span>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section
        className="container stack"
        style={{ gap: '24px', paddingTop: '48px', paddingBottom: '64px' }}
      >
        <div className="sec-head">
          <h2>7 смаків</h2>
          <span>0,5 л — 250 грн · 1 л — 450 грн</span>
        </div>

        <div className="grid-products">
          {teas.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 3 info columns */}
      <section className="section-white">
        <div className="container section cols3">
          <div className="info-card">
            <h2 className="h-display" style={{ fontSize: '24px' }}>
              Зберігання
            </h2>
            <div className="kv">
              <div>
                <strong>3 міс.</strong>
                <span>у закритій пляшці без холодильника</span>
              </div>
              <div>
                <strong>1 міс.</strong>
                <span>у холодильнику (+2…+6 °C) після відкриття</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="h-display" style={{ fontSize: '24px' }}>
              Склад
            </h2>
            <p style={{ fontSize: '15px', lineHeight: '1.6' }}>
              Пюре ягід і фруктів, цукор, декстроза, фруктоза, натуральний ароматизатор,
              яблучний пектин, регулятори кислотності, модифікований крохмаль, сорбат
              калію.
            </p>
          </div>

          <div className="info-card">
            <h2 className="h-display" style={{ fontSize: '24px' }}>
              Шукаєте основу для лимонаду?
            </h2>
            <p style={{ fontSize: '15px' }}>
              Мікси Oleg Cook — створені спеціально для холодних лимонадів і авторських
              коктейлів, від 305 грн за 1 л.
            </p>
            <Link
              className="btn btn-green self-start"
              href="/mixes"
              style={{ marginTop: '10px' }}
            >
              До міксів →
            </Link>
          </div>
        </div>
      </section>

      {/* B2B callout */}
      <section
        className="container"
        style={{ paddingTop: '40px', paddingBottom: '56px' }}
      >
        <Link className="band-link" href="/for-business">
          <span>
            Потрібні чаї та мікси для кав’ярні, бару чи ресторану? Гуртові ціни для
            партнерів.
          </span>
          <strong>Дізнатися більше →</strong>
        </Link>
      </section>
    </>
  );
}
