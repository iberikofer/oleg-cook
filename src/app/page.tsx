'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductLine } from '../types/product';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<ProductLine>('tea');

  const filteredProducts = PRODUCTS.filter((p) => p.line === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="container stack hero">
        <div className="stack hero-head">
          <div className="eyebrow">Фруктові концентрати · виробництво Вінниця</div>
          <h1 className="h-display">Фруктовий чай і лимонад — за хвилину</h1>
          <p className="hero-sub">
            Концентрати для гарячого чаю та мікси для лимонадів і коктейлів від Oleg Cook.
            Без заготовок, сиропів і зайвого клопоту.
          </p>
        </div>

        <div className="hero-cards">
          {/* Tea Line Card */}
          <div className="line-card tea">
            <div className="text">
              <span className="tag">ГАРЯЧЕ · Oleg Cook tea</span>
              <h2>Фруктовий чай</h2>
              <p>
                Трохи концентрату на дно чашки й окріп — чай готовий за 10 секунд. Смакує
                й холодним.
              </p>
              <div className="price-block">
                <strong>від 250 грн</strong>
                <span className="meta">0,5 л — 250 грн · 1 л — 450 грн · 7 смаків</span>
                <span className="hl">≈17–19 грн за чашку — у кав’ярні 80 грн</span>
              </div>
              <Link className="btn btn-accent btn-lg self-start" href="/chai">
                Обрати чай
              </Link>
            </div>
            <div className="pics">
              <Image
                className="tea"
                src="/assets/tea-cranberry-orange.webp"
                alt="Фруктовий чай-концентрат Журавлина-апельсин з пряностями"
                width={800}
                height={1421}
                priority
                style={{ objectPosition: '50% 95%' }}
              />
              <Image
                className="tea"
                src="/assets/tea-sea-buckthorn.webp"
                alt="Фруктовий чай-концентрат Обліпиха-мандарин"
                width={800}
                height={1421}
                style={{ objectPosition: '50% 95%' }}
              />
            </div>
          </div>

          {/* Mix Line Card */}
          <div className="line-card mix">
            <div className="text">
              <span className="tag">ХОЛОДНЕ · Oleg Cook</span>
              <h2>Лимонади й коктейлі</h2>
              <p>
                30–60 мл міксу, лід і вода — лимонад готовий. Солодкість і кислинка вже
                збалансовані.
              </p>
              <div className="price-block">
                <strong>від 305 грн</strong>
                <span className="meta">1 л · до 33 порцій · 7 смаків</span>
              </div>
              <Link className="self-start" href="/miksy#kokteili">
                <strong>Коктейльна карта: 5 рецептів →</strong>
              </Link>
              <Link className="btn btn-green btn-lg self-start" href="/miksy">
                Обрати мікс
              </Link>
            </div>
            <div className="pics">
              <Image
                src="/assets/mango-passion-standalone.webp"
                alt="Мікс для лимонадів Манго-маракуя, 1 л"
                width={800}
                height={800}
              />
              <Image
                src="/assets/strawberry-standalone.webp"
                alt="Мікс для лимонадів Полуниця, 1 л"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Directions / Fork */}
      <section className="container fork" aria-label="Два напрямки">
        <Link href="/chai">
          <span className="eyebrow">Додому</span>
          <strong>Замовити на сайті</strong>
          <span>
            Роздрібні ціни. Доставка по Вінниці та Новою поштою по всій Україні.
          </span>
        </Link>
        <Link href="/dlya-zakladiv">
          <span className="eyebrow">Для закладів і опту</span>
          <strong>Індивідуальна пропозиція</strong>
          <span>
            Кафе, бари, ресторани, кейтеринг, дистриб’ютори. Ціни нижчі за роздрібні.
          </span>
        </Link>
      </section>

      {/* How to prepare */}
      <section className="section-white">
        <div className="container section stack" style={{ gap: '28px' }}>
          <h2 className="h-display" style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
            Як приготувати
          </h2>
          <div className="howto">
            <div className="howto-col tea">
              <strong>Чай</strong>
              <div className="step">
                <b>1</b>
                <span>
                  Налийте 15 мл концентрату на кожні 100 мл води (≈40 мл на чашку)
                </span>
              </div>
              <div className="step">
                <b>2</b>
                <span>Долийте окріп</span>
              </div>
              <div className="step">
                <b>3</b>
                <span>Перемішайте — готово</span>
              </div>
            </div>
            <div className="howto-col mix">
              <strong>Лимонад</strong>
              <div className="step">
                <b>1</b>
                <span>Налийте 30–60 мл міксу в склянку</span>
              </div>
              <div className="step">
                <b>2</b>
                <span>Додайте лід і воду або іншу основу напою</span>
              </div>
              <div className="step">
                <b>3</b>
                <span>Перемішайте — готово</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flavors Section with interactive tabs */}
      <section
        className="container section stack"
        style={{ gap: '24px' }}
        aria-labelledby="flavors-title"
      >
        <div className="sec-head" style={{ alignItems: 'center' }}>
          <h2 id="flavors-title" style={{ fontSize: 'clamp(26px,4vw,36px)' }}>
            Смаки
          </h2>
          <div className="tabs" role="tablist" aria-label="Лінійка">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'tea'}
              className={activeTab === 'tea' ? 'active' : ''}
              onClick={() => setActiveTab('tea')}
            >
              Чаї · 7
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'mix'}
              className={activeTab === 'mix' ? 'active' : ''}
              onClick={() => setActiveTab('mix')}
            >
              Мікси для лимонадів · 7
            </button>
          </div>
        </div>

        <div className="grid-products compact" role="tabpanel" aria-live="polite">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </section>

      {/* For Business Banner */}
      <section className="section-green biz-band">
        <div className="container section">
          <div className="stack" style={{ flex: '1 1 520px', minWidth: 0, gap: '12px' }}>
            <div className="eyebrow">Для бізнесу</div>
            <h2>Лимонади влітку, чай узимку — один постачальник на весь рік</h2>
            <p>
              Кафе, бари, готелі, кейтеринг і дистриб’ютори. Гуртові ціни нижчі за
              роздрібні — залиште контакти, менеджер Oleg Cook зателефонує.
            </p>
          </div>
          <Link className="btn btn-accent btn-lg" href="/dlya-zakladiv">
            Отримати пропозицію
          </Link>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq" className="container section" style={{ scrollMarginTop: '80px' }}>
        <div className="stack faq">
          <h2
            className="h-display"
            style={{ fontSize: 'clamp(26px,4vw,34px)', marginBottom: '8px' }}
          >
            Поширені запитання
          </h2>
          <details>
            <summary>Чим чай відрізняється від міксу?</summary>
            <p>
              Чай-концентрат Oleg Cook створений для гарячих напоїв — заливається окропом.
              Мікси — основа для холодних лимонадів і коктейлів.
            </p>
          </details>
          <details>
            <summary>Як приготувати чай?</summary>
            <p>
              Базова пропорція — 15 мл концентрату на 100 мл окропу, тобто ≈40 мл на чашку
              250 мл. Далі — під свій смак: хочете насиченіше, додайте більше. Можна
              розводити й холодною водою.
            </p>
          </details>
          <details>
            <summary>Як зберігати концентрати Oleg Cook?</summary>
            <p>
              Чай — закрита пляшка зберігається 3 місяці без холодильника, після відкриття
              — 1 місяць у холодильнику при +2…+6 °C. Мікси — при +5…+20 °C, 2,5 місяці в
              закритій пляшці й 1 місяць після відкриття.
            </p>
          </details>
          <details>
            <summary>Як оплатити й отримати замовлення?</summary>
            <p>
              Після оформлення менеджер зателефонує, підтвердить замовлення й надішле
              реквізити для оплати. Можна також оплатити накладеним платежем або при
              отриманні. Доставка: Вінниця — швидка кур’єрська доставка по місту, або Нова
              пошта по всій Україні.
            </p>
          </details>
          <details>
            <summary>Чи є гуртові ціни?</summary>
            <p>
              Так, для закладів і дистриб’юторів діє спеціальна гуртова пропозиція.
              Залиште заявку на сторінці <Link href="/dlya-zakladiv">«Для закладів»</Link>
              .
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
