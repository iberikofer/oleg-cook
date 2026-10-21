'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PRODUCTS, COCKTAILS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function MiksyPage() {
  const mixes = PRODUCTS.filter((p) => p.line === 'mix');

  // Interactive portion cost calculator
  const [dosage, setDosage] = useState<number>(40);
  const [bottlePrice, setBottlePrice] = useState<number>(305);

  const portionsCount = Math.floor(1000 / dosage);
  const costPerPortion = (bottlePrice / portionsCount).toFixed(1);

  return (
    <>
      <section className="container mix-hero">
        <div className="stack" style={{ flex: '1 1 600px', minWidth: 0, gap: '16px' }}>
          <div className="eyebrow" style={{ color: 'var(--accent)' }}>
            Холодна лінійка · Oleg Cook
          </div>
          <h1 className="h-display">Мікси для лимонадів і коктейлів</h1>
          <p>
            Готова фруктова база з уже збалансованими солодкістю та кислотністю. 30–60 мл
            на напій — додайте лід і воду або основу коктейлю.
          </p>
        </div>

        <div className="mix-figs">
          <div className="fig-box">
            <strong>до 33</strong>
            <span>порцій з 1 літра</span>
          </div>
          <div className="fig-box">
            <strong>від 9,2 грн</strong>
            <span>собівартість порції</span>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="container" style={{ paddingTop: '8px', paddingBottom: '56px' }}>
        <h2 className="sr-only">7 смаків міксів</h2>
        <div className="grid-products">
          {mixes.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Portion Cost Calculator */}
      <section className="section-white">
        <div className="container section calc">
          <div className="calc-controls stack" style={{ gap: '20px' }}>
            <h2>Скільки коштує порція</h2>
            <p>
              Оберіть дозування та вартість пляшки для точного розрахунку собівартості
              напою:
            </p>

            <div className="stack" style={{ gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700 }}>
                Дозування на порцію:
              </span>
              <div className="chips">
                {[30, 40, 50, 60].map((d) => (
                  <button
                    key={d}
                    type="button"
                    className="chip dose"
                    aria-pressed={dosage === d}
                    onClick={() => setDosage(d)}
                  >
                    {d} мл
                  </button>
                ))}
              </div>
            </div>

            <div className="stack" style={{ gap: '8px' }}>
              <span style={{ fontSize: '14px', fontWeight: 700 }}>
                Ціна пляшки (1 л):
              </span>
              <div className="chips">
                {[305, 355, 395].map((price) => (
                  <button
                    key={price}
                    type="button"
                    className="chip"
                    aria-pressed={bottlePrice === price}
                    onClick={() => setBottlePrice(price)}
                  >
                    {price} грн
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="calc-out">
            <div>
              <strong>{portionsCount}</strong>
              <span>порцій у пляшці</span>
            </div>
            <div>
              <strong>{costPerPortion} грн</strong>
              <span>собівартість порції</span>
            </div>
            <div>
              <strong>
                {dosage * 6}–{dosage * 8} мл
              </strong>
              <span>готовий лимонад</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Cocktail Recipes */}
      <section
        id="kokteili"
        className="container stack"
        style={{
          gap: '24px',
          paddingTop: '64px',
          paddingBottom: '32px',
          scrollMarginTop: '90px',
        }}
      >
        <div className="sec-head" style={{ gap: '16px' }}>
          <div>
            <h2>5 коктейлів з міксами Oleg Cook</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.55', marginTop: '6px' }}>
              Готові рецептури з точним дозуванням — для барної карти або вечірки вдома.
            </p>
          </div>
        </div>

        <div className="grid-cocktails">
          {COCKTAILS.map((c) => (
            <article key={c.id} className="cocktail">
              <div className="cocktail-head">
                <h3>{c.name}</h3>
                <span className="en">
                  {c.mixName} · {c.glass}
                </span>
              </div>

              <div className="pills">
                <span>{c.glass}</span>
                <span>База: {c.mixName}</span>
              </div>

              <ul className="ing">
                {c.ingredients.map((ing, i) => (
                  <li key={i}>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>

              <div className="instruction">
                <strong>Приготування:</strong>
                <p>{c.instruction}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Info Cards */}
      <section className="container section cols3 cards">
        <div className="info-card">
          <h2>Зберігання</h2>
          <div className="kv">
            <div>
              <strong>+5…+20 °C</strong>
              <span>2,5 міс. у закритій пляшці</span>
            </div>
            <div>
              <strong>1 міс.</strong>
              <span>після відкриття пляшки</span>
            </div>
          </div>
        </div>

        <div className="info-card">
          <h2>Для гарячого — Oleg Cook tea</h2>
          <p style={{ fontSize: '15px' }}>
            Мікси створені для холодних напоїв. Для гарячого фруктового чаю — концентрати
            Oleg Cook tea, 7 смаків.
          </p>
          <Link
            href="/tea"
            className="btn btn-green self-start"
            style={{ marginTop: '8px' }}
          >
            До чаїв →
          </Link>
        </div>

        <div className="info-card dark">
          <h2>Для бару чи кафе?</h2>
          <span style={{ fontSize: '15px' }}>
            Гуртові ціни нижчі за роздрібні, допомога з підбором смаків і дозуванням для
            меню.
          </span>
          <Link
            href="/for-business"
            className="btn btn-accent self-start"
            style={{ marginTop: '8px' }}
          >
            Отримати прайс →
          </Link>
        </div>
      </section>
    </>
  );
}
