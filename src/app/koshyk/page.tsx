'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';

export default function KoshykPage() {
  const { items, updateQuantity, removeFromCart, clearCart, totalCount, totalPrice } =
    useCart();

  const [deliveryType, setDeliveryType] = useState<'vinnytsia' | 'nova-poshta'>(
    'vinnytsia',
  );
  const [paymentType, setPaymentType] = useState<'requisites' | 'cash-on-delivery'>(
    'requisites',
  );
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    comment: '',
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setIsOrderPlaced(true);
    clearCart();
  };

  if (isOrderPlaced) {
    return (
      <div className="container order-done">
        <h1 className="h-display" style={{ color: 'var(--green)' }}>
          ✓ Замовлення прийнято!
        </h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          Дякуємо за замовлення у <strong>Oleg Cook</strong>! Менеджер зателефонує вам
          протягом 15 хвилин (працюємо щодня з 9:00 до 19:00), підтвердить склад
          замовлення та узгодить доставку.
        </p>
        <p className="small" style={{ color: 'var(--muted-2)' }}>
          Доставка:{' '}
          {deliveryType === 'vinnytsia'
            ? 'Вінниця · доставка кур’єром по місту'
            : 'Нова пошта по Україні'}
          .
        </p>
        <Link href="/" className="btn btn-accent btn-lg" style={{ marginTop: '16px' }}>
          Повернутися на головну
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container empty-cart">
        <h1 className="h-display">Кошик порожній</h1>
        <p style={{ fontSize: '16px' }}>
          Оберіть натуральні чаї-концентрати або фруктові мікси для лимонадів від Oleg
          Cook:
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
          <Link href="/chai" className="btn btn-accent btn-lg">
            До чаїв
          </Link>
          <Link href="/miksy" className="btn btn-green btn-lg">
            До міксів для лимонадів
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '32px', paddingBottom: '72px' }}>
      <form onSubmit={handleSubmit} className="checkout">
        <div className="checkout-main stack" style={{ gap: '24px' }}>
          <div className="stack" style={{ gap: '8px' }}>
            <h1 className="h-display">Оформлення замовлення</h1>
            <p>
              Онлайн-оплата не потрібна. Після замовлення менеджер Oleg Cook зателефонує,
              усе підтвердить і підкаже зручний спосіб оплати.
            </p>
          </div>

          {/* Cart Lines */}
          <div className="panel">
            <h2>Товари в кошику ({totalCount})</h2>
            <div className="cart-lines-list">
              {items.map((item) => (
                <div key={`${item.id}|${item.sizeKey}`} className="cart-line">
                  <Image
                    src={item.product.img}
                    alt={item.product.name}
                    width={64}
                    height={88}
                    style={{ objectFit: 'cover', borderRadius: '10px' }}
                  />
                  <div className="info">
                    <strong>{item.product.name}</strong>
                    <span>
                      {item.size.volume} · {item.size.price} грн
                    </span>
                  </div>

                  <div className="qty" role="group" aria-label="Зміна кількості">
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.sizeKey, item.quantity - 1)
                      }
                      aria-label="Зменшити"
                    >
                      −
                    </button>
                    <output>{item.quantity}</output>
                    <button
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.sizeKey, item.quantity + 1)
                      }
                      aria-label="Збільшити"
                    >
                      +
                    </button>
                  </div>

                  <div style={{ fontWeight: 700, minWidth: '80px', textAlign: 'right' }}>
                    {item.size.price * item.quantity} грн
                  </div>

                  <button
                    type="button"
                    className="remove"
                    onClick={() => removeFromCart(item.id, item.sizeKey)}
                    aria-label={`Видалити ${item.product.name}`}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery & Address */}
          <div className="panel">
            <h2>Спосіб доставки</h2>
            <div className="stack" style={{ gap: '10px' }}>
              <label className="pay-opt">
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryType === 'vinnytsia'}
                  onChange={() => setDeliveryType('vinnytsia')}
                />
                <span>Вінниця · доставка по місту (кур’єром до дверей)</span>
              </label>

              <label className="pay-opt">
                <input
                  type="radio"
                  name="delivery"
                  checked={deliveryType === 'nova-poshta'}
                  onChange={() => setDeliveryType('nova-poshta')}
                />
                <span>Нова пошта (по всій Україні за тарифами перевізника)</span>
              </label>
            </div>

            <h2 style={{ marginTop: '16px' }}>Дані одержувача</h2>
            <div className="stack" style={{ gap: '14px' }}>
              <label className="field">
                Ім’я та прізвище *
                <input
                  type="text"
                  required
                  placeholder="Олег Шевченко"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </label>

              <label className="field">
                Номер телефону *
                <input
                  type="tel"
                  required
                  placeholder="068 000 00 00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </label>

              <label className="field">
                {deliveryType === 'vinnytsia'
                  ? 'Адреса у Вінниці (вулиця, будинок, під’їзд) *'
                  : 'Місто та номер відділення Нової пошти *'}
                <input
                  type="text"
                  required
                  placeholder={
                    deliveryType === 'vinnytsia'
                      ? 'м. Вінниця, вул. Соборна, 24'
                      : 'м. Київ, Нова пошта №15'
                  }
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </label>

              <label className="field">
                Коментар до замовлення
                <textarea
                  rows={2}
                  placeholder="Побажання щодо часу доставки або смаків..."
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                />
              </label>
            </div>
          </div>

          {/* Payment Method */}
          <div className="panel">
            <h2>Оплата</h2>
            <div className="stack" style={{ gap: '10px' }}>
              <label className="pay-opt">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentType === 'requisites'}
                  onChange={() => setPaymentType('requisites')}
                />
                <span>
                  За реквізитами (IBAN / картка — менеджер надішле після дзвінка)
                </span>
              </label>
              <label className="pay-opt">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentType === 'cash-on-delivery'}
                  onChange={() => setPaymentType('cash-on-delivery')}
                />
                <span>Оплата при отриманні (кур’єру або накладений платіж)</span>
              </label>
            </div>
          </div>
        </div>

        {/* Sticky Summary */}
        <aside className="summary">
          <h2>Разом</h2>
          <div className="row">
            <span>Товари ({totalCount})</span>
            <span>{totalPrice} грн</span>
          </div>
          <div className="row">
            <span>Доставка</span>
            <span>
              {deliveryType === 'vinnytsia' ? 'Вінниця (по місту)' : 'Нова пошта'}
            </span>
          </div>
          <hr
            style={{ border: '0', borderTop: '1px solid var(--on-green)', opacity: 0.3 }}
          />
          <div className="total row">
            <span>Сума замовлення</span>
            <strong>{totalPrice} грн</strong>
          </div>

          <button
            type="submit"
            className="btn btn-accent btn-lg"
            style={{
              minHeight: '52px',
              fontSize: '17px',
              width: '100%',
              marginTop: '8px',
            }}
          >
            Підтвердити замовлення
          </button>

          <ol>
            <li>Менеджер зателефонує протягом 15 хв</li>
            <li>Узгодить деталі та час доставки</li>
            <li>Надішле реквізити для оплати</li>
          </ol>
        </aside>
      </form>
    </div>
  );
}
