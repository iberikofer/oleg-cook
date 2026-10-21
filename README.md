# 🍹 Oleg Cook — Фруктові концентрати та мікси для лимонадів

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com/)

> [!NOTE]
> Сучасний e-commerce веб-додаток на базі **Next.js (App Router)** для крафтового виробництва фруктових концентратів для гарячого чаю та холодних міксів для лимонадів і коктейлів бренду **Oleg Cook** (м. Вінниця).
>
> Modern e-commerce web application built with **Next.js (App Router)** for craft fruit tea concentrates and cocktail/lemonade bases by **Oleg Cook** (Vinnytsia, Ukraine).

---

## 🇺🇦 Українська версія

### 📌 Про проєкт

**Oleg Cook** — це інтернет-магазин натуральних фруктово-ягідних концентратів власного виробництва у Вінниці:

- **Oleg Cook tea (гаряча лінійка)**: 7 смаків концентратів для чаю у пляшках 0,5 л та 1 л (Журавлина-апельсин, Обліпиха-мандарин, Імбир-цитрус, Малина-грейпфрут тощо). Чай готується за 10 секунд простим додаванням окропу.
- **Oleg Cook mixes (холодна лінійка)**: 7 смаків міксів для лимонадів і коктейлів (Манго-маракуя, Полуниця, Персик, Груша-бузина тощо). 1 літр дає до 33 порцій лимонаду.
- **Доставка**: Вінниця — швидка кур'єрська доставка по місту або Нова пошта по всій Україні.

### 🚀 Ключові можливості

1. **Інтерактивний каталог продукції**:
   - Миттєве перемикання між лінійками чаю та холодних міксів.
   - Вибір об'єму пляшки (0,5 л / 1 л) із динамічним перерахунком цін.
   - Анімований фідбек при додаванні у кошик та спливаючий Toast.
2. **Калькулятор собівартості порції лимонаду** (`/miksy`):
   - Інтерактивний вибір дозування (30, 40, 50, 60 мл) та вартості пляшки.
   - Миттєвий прорахунок виходу порцій, собівартості однієї склянки (від 9,2 грн) та об'єму готового напою.
3. **Коктейльна карта (5 авторських рецептур)**:
   - Детальні рецепти з точним дозуванням для барів та домашніх вечірок (_Mango Passion Spritz, Strawberry Mojito, Elderflower Pear Fizz, Peach Bellini, Cherry Bourbon Smash_).
4. **B2B розділ для HoReCa** (`/dlya-zakladiv`):
   - Спеціальні формати співпраці для кав'ярень, барів, ресторанів і кейтерингу.
   - Форма замовлення гуртового прайсу та дегустаційних зразків.
5. **Повноцінний кошик і оформлення замовлення** (`/koshyk`):
   - Збереження стану кошика в `localStorage`.
   - Зміна кількості та видалення позицій.
   - Вибір доставки: кур'єром по Вінниці або відділення Нової пошти.
   - Вибір оплати (за реквізитами або при отриманні).
   - Екран підтвердження замовлення.

### 🛠 Стек технологій

- **Framework**: Next.js 16 (App Router, SSG / Static Site Generation)
- **UI / Core**: React 19, TypeScript
- **Стилі**: Vanilla CSS (Custom Design System, CSS Variables, Responsive Design)
- **Шрифти**: `next/font/google` (`Manrope` для тексту, `Unbounded` для заголовків)
- **Лінтери та форматування**: ESLint 9 (Flat Config), Prettier (CRLF)
- **Хостинг / Деплой**: Vercel

### 💻 Локальний запуск

```bash
# Встановлення залежностей
npm install

# Запуск локального dev-сервера
npm run dev

# Продакшн-збірка
npm run build

# Перевірка форматування та лінтерів
npm run lint
npm run format:check
```

---

## 🇬🇧 English Version

### 📌 About The Project

**Oleg Cook** is a modern e-commerce platform offering craft fruit concentrates manufactured in Vinnytsia, Ukraine:

- **Oleg Cook tea (Hot Line)**: 7 fruit & herbal tea concentrate flavors available in 0.5L and 1L bottles. Prepares in 10 seconds simply by adding boiling water.
- **Oleg Cook mixes (Cold Line)**: 7 fruit mixes for lemonades and craft cocktails. One 1-liter bottle yields up to 33 servings.
- **Delivery**: Vinnytsia — same-day local courier delivery or nationwide Nova Poshta shipping across Ukraine.

### 🚀 Key Features

1. **Interactive Product Catalog**:
   - Instant switching between hot teas and cold lemonade mixes.
   - Reactive volume selection (0.5L vs 1.0L) with live pricing updates.
   - Micro-animated cart feedback with bottom toast notifications.
2. **Lemonade Serving Cost Calculator** (`/miksy`):
   - Interactive selection of dosage (30, 40, 50, 60 ml) and bottle prices.
   - Real-time computation of servings count, portion cost (from 9.2 UAH), and drink volume.
3. **Cocktail Mixology Card (5 Signature Recipes)**:
   - Professional cocktail specs with exact measurements (_Mango Passion Spritz, Strawberry Mojito, Elderflower Pear Fizz, Peach Bellini, Cherry Bourbon Smash_).
4. **B2B HoReCa Portal** (`/dlya-zakladiv`):
   - Wholesale partnership options for coffee shops, bars, restaurants, and catering.
   - Lead generation form for wholesale price lists and free tasting samples.
5. **Full Shopping Cart & Checkout** (`/koshyk`):
   - Cart persistence via `localStorage`.
   - Quantity controls and item removal.
   - Delivery selector: local delivery across Vinnytsia or Nova Poshta parcel lockers/branches.
   - Order confirmation summary.

### 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router, SSG)
- **Core**: React 19, TypeScript
- **Styling**: Vanilla CSS with comprehensive CSS custom properties & media queries
- **Typography**: `next/font/google` (`Manrope` and `Unbounded`)
- **Code Quality**: ESLint 9 Flat Config & Prettier with CRLF line endings
- **Deployment**: Vercel ready

### 💻 Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Check linting and formatting
npm run lint
npm run format:check
```
