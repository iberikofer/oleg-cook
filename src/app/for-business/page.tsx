'use client';

import React, { useState } from 'react';

export default function DlyaZakladivPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    city: 'Вінниця',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <section className="page-hero-green biz-hero">
        <div className="container">
          <div className="stack" style={{ maxWidth: '640px', gap: '16px' }}>
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>
              Для HoReCa · Oleg Cook
            </div>
            <h1>Лимонади влітку, фруктовий чай узимку — від одного постачальника</h1>
            <p>
              Мікси й чаї-концентрати Oleg Cook для кафе, барів, ресторанів, готелів і
              кейтерингу. Гуртові ціни нижчі за роздрібні — точну пропозицію підготує
              менеджер під ваш обсяг.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose Oleg Cook */}
      <section className="container section stack" style={{ gap: '28px' }}>
        <h2 className="h-display" style={{ fontSize: 'clamp(26px,4vw,34px)' }}>
          Чому заклади обирають Oleg Cook
        </h2>
        <div className="why">
          <div>
            <strong>10–20 секунд на напій</strong>
            <span>
              Швидка віддача в години пік без додаткових сиропів, варіння чи заготовок.
            </span>
          </div>
          <div>
            <strong>Стабільний стандарт якості</strong>
            <span>
              Напій завжди однаковий, незалежно від зміни бариста чи бармена на зміні.
            </span>
          </div>
          <div>
            <strong>Висока маржинальність</strong>
            <span>
              Собівартість порції від 9,2 грн за лимонад і від 17 грн за чашку фруктового
              чаю.
            </span>
          </div>
          <div>
            <strong>Цілорічна співпраця</strong>
            <span>
              Один надійний партнер на весь рік — лимонади в спеку та гарячі чаї в
              холодний сезон.
            </span>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="section-white">
        <div className="container section stack" style={{ gap: '28px' }}>
          <h2 className="h-display" style={{ fontSize: 'clamp(26px,4vw,34px)' }}>
            Формати співпраці
          </h2>
          <div className="formats">
            <div>
              <span className="num">01</span>
              <strong>Кав’ярні та кафе</strong>
              <span>
                Введення трендових фруктових чаїв у чашки 250–350 мл та освіжаючих
                лимонадів.
              </span>
            </div>
            <div>
              <span className="num">02</span>
              <strong>Бари та ресторани</strong>
              <span>
                Готова фруктова основа для шприців, сауерів, тікі-коктейлів і
                безалкогольного меню.
              </span>
            </div>
            <div>
              <span className="num">03</span>
              <strong>Кейтеринг та івенти</strong>
              <span>
                Швидке приготування десятків порцій для весіль, корпоративів та
                фестивалів.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section
        id="zayavka"
        className="container lead-wrap"
        style={{ scrollMarginTop: '90px' }}
      >
        <div className="lead-intro stack" style={{ flex: '1 1 360px', gap: '16px' }}>
          <h2>Отримайте індивідуальну пропозицію</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.55' }}>
            Залиште контакти — менеджер Oleg Cook зателефонує, підбере смаки, надішле
            гуртовий прайс і за потреби відправить зразки для дегустації.
          </p>
          <div className="lead-perks stack" style={{ gap: '8px', fontSize: '15px' }}>
            <span>✓ Гуртові ціни від 6 пляшок</span>
            <span>✓ Відправка зразків на дегустацію</span>
            <span>✓ Допомога у формуванні сезонного меню</span>
          </div>
        </div>

        <div className="form-card lead-form" style={{ flex: '1 1 480px' }}>
          {isSubmitted ? (
            <div className="form-status ok">
              <h3>Дякуємо за звернення!</h3>
              <p style={{ marginTop: '8px' }}>
                Менеджер Oleg Cook зателефонує вам найближчим часом та надішле гуртовий
                прайс.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="stack" style={{ gap: '16px' }}>
              <label className="field">
                Ваше ім’я *
                <input
                  type="text"
                  required
                  placeholder="Олександр"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </label>

              <label className="field">
                Номер телефону *
                <input
                  type="tel"
                  required
                  placeholder="067 000 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </label>

              <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}
              >
                <label className="field">
                  Заклад / компанія
                  <input
                    type="text"
                    placeholder="Назва кав’ярні"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </label>
                <label className="field">
                  Місто
                  <input
                    type="text"
                    placeholder="Вінниця"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </label>
              </div>

              <label className="field">
                Коментар чи побажання
                <textarea
                  rows={3}
                  placeholder="Які смаки або обсяги вас цікавлять?"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                />
              </label>

              <button
                type="submit"
                className="btn btn-accent btn-lg"
                style={{ width: '100%' }}
              >
                Отримати гуртовий прайс
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
