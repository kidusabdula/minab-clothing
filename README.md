# Minab Clothing — Storefront Demo

[![License](https://img.shields.io/badge/License-Proprietary-lightgrey.svg)](#-license)
[![Node.js Version](https://img.shields.io/badge/Node.js-18.18+-green.svg)](https://nodejs.org/)
[![Next.js Version](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4.svg)](https://tailwindcss.com/)

> A storefront demo built around **Minab**, a clothing label from Addis Ababa. It walks through a complete shopping flow — from product discovery through checkout — on mock data. It isn't the label's official shop: products, prices, orders and policies are sample data, and no payment is taken.

## 🌟 Key Features

### Core Shopping Flow
- **Product Catalog**: Filterable shop by category, collection, price range, new arrivals and sale items; the new and sale filter lives in the URL (`/shop?filter=new`, `/shop?filter=sale`), so links, a reload and Back to such a link set it; picking a filter updates the URL without adding a history entry
- **Product Detail Pages**: Full specifications, color/size selection, an image gallery
- **Shopping Cart**: Starts from a sample cart, with quantity controls, a demo promo code and live totals; edits aren't saved
- **3-Step Checkout**: Shipping (a saved or new address) → Payment → Review, ending on a "Demo Checkout Complete" page
- **Mock E-Commerce Flow**: A UI demo from browsing through a demo checkout; the checkout takes no payment and asks for no card details
- **Demo Labelling**: Every page carries a visible "Demo storefront" label

### User Account Features (Sample Data)
- **Dashboard**: A demo customer with counts and recent orders
- **Order History**: Sample orders in processing, shipped and delivered states
- **Wishlist**: Sample saved products; the heart buttons say nothing is saved
- **Saved Addresses**: Sample shipping profiles; add, edit and remove say nothing changes

### Premium UI System
- **Dual Theme**: Light/dark mode with OKLCH perceptually uniform color space, applied before first paint (no flash)
- **Glassmorphism**: Frosted glass panels for cards, navbars, and overlays
- **CSS Motion**: Entrance animations and a scroll reveal in plain CSS; all motion stops when the visitor prefers reduced motion
- **Responsive Design**: Mobile-first from 320px, with a slide-out menu and touch targets of at least 24px
- **Accessible Controls**: Native `<dialog>` menu and search, labelled controls, a visible keyboard focus ring, a skip link
- **Sonner Toasts**: Notifications for cart, checkout, and form actions, each saying what the demo did not do

### Brand Content
- **Home Page**: Hero section, featured products, collection showcases, newsletter CTA
- **Collections**: Curated seasonal collections with dedicated landing pages
- **About Page**: Sample brand story and values, labelled as demo copy
- **FAQ**: Interactive accordion with sample shipping, returns, sizing, and care copy, labelled as demo copy
- **Contact**: Demo form with placeholder contact details

## 🎨 Design System

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| **Primary** | Warm Terracotta | Light Terracotta | CTAs, links, badges, the focus ring |
| **Secondary** | Deep Coffee Brown | Warm Taupe | The "shipped" order badge |
| **Accent** | Pale Sage | Deep Sage | Hover surfaces behind foreground text |
| **Success** | Forest Green | Bright Green | Free-shipping and discount notes, delivered badge |
| **Sage** | Sage | Deep Sage | Decorative glows in the hero and call to action, never behind text |
| **Background** | Warm Cream | Deep Espresso | Page background |
| **Card** | Pure White | Dark Espresso | Cards, panels, elevated surfaces |
| **Muted** | Warm Sand | Dark Coffee | Subtle backgrounds, inactive states |

### Typography
- **Font**: Poppins (400/500/600/700 weights)
- **Loading**: `next/font/google` with variable CSS and `display: swap`
- **Scale**: System-based with responsive headings (5xl–8xl on hero)

### Components
- **Button**: 3 variants (default, outline, ghost), 3 sizes; `buttonClasses()` styles links as buttons without nesting a button inside a link
- **Card**: 3 variants (default, glass, glass-strong) with a content slot
- **Input**: Labelled form fields (the label is required)
- **Badge**: 4 variants (default, secondary, success, destructive) for status indicators
- **Theme**: An inline `<head>` script sets the theme class before paint; `ThemeToggle` flips it and stores the choice

## 🏗️ Architecture Overview

Minab keeps components in small folders with clear boundaries. Every page is a server component; client
components are small islands for the parts that hold state.

```
app/
├── components/
│   ├── ui/               # Primitives (Button, Card, Input, Badge)
│   ├── shared/           # Site header and its islands (search, menu, theme toggle), footer, DemoAction
│   ├── product/          # ProductCard, its action buttons, Rating, the demo notices
│   └── home/             # Home page sections (Hero, Collections, CTA, newsletter form)
├── account/              # Customer account area
│   ├── orders/           # Order history
│   ├── wishlist/         # Saved items
│   └── addresses/        # Shipping profiles
├── shop/                 # Product discovery (the filters are a client island)
│   └── [id]/             # Product detail, statically generated; gallery and options are islands
├── collections/          # Collection pages
│   └── [slug]/           # Collection detail, statically generated
├── cart/                 # Shopping cart (client island)
├── checkout/             # Multi-step checkout flow (client island)
│   └── success/          # Demo Checkout Complete (no order is placed)
├── about/                # Sample brand story
├── contact/              # Demo contact form
├── faq/                  # Help center
├── login/                # Sign-in mock
├── signup/               # Registration mock
├── search/               # Search results, rendered on the server per query
├── not-found.tsx         # 404 page
└── layout.tsx            # Root layout: theme script, skip link, header, footer, toaster
```

### Key Architectural Decisions

- **Server Components First**: Pages and static sections render on the server; `"use client"` is limited to islands that hold state (header menus, shop filters, product options, cart, checkout, forms)
- **Schema-First**: TypeScript interfaces (`typefile.d.ts`) define all data shapes before any component is built
- **Mock Data Layer**: `dummyData.ts` is the single data source; category and collection counts are derived from the products, the cart and checkout share one sample cart, and the account pages read the same sample orders
- **One Pricing Rule**: `lib/cart.ts` holds the free-shipping threshold, the shipping fee and the demo promo code, and computes the totals for the cart, the checkout and the sample orders
- **Static Generation**: Product and collection pages use `generateStaticParams` with `dynamicParams = false`, so unknown slugs return a 404
- **No Animation Library**: Motion is CSS only (`app/globals.css`), transform and opacity based, and switched off by `prefers-reduced-motion`
- **Import Direction Rule**: `ui/` → `shared/` and `product/` → `home/` and pages; dependencies flow downward only

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | Next.js | 15.5 | App Router, server components, statically generated product and collection pages (no API routes) |
| **UI Library** | React | 18.3 | Listed in `package.json`; the App Router runs on the React build bundled with Next.js |
| **Language** | TypeScript | 5.9 | Strict mode, full type safety |
| **Styling** | Tailwind CSS | 3.4 | Utility-first, OKLCH tokens |
| **UI Primitives** | Custom | — | Small, accessible components in `app/components/ui` |
| **Animations** | CSS | — | Keyframes and a scroll-driven reveal in `app/globals.css` |
| **Images** | `next/image` | — | WebP sources in `public/`, served as AVIF or WebP at responsive sizes |
| **Icons** | Lucide React | 1.14 | Consistent stroke, tree-shakeable |
| **Forms** | React state | — | Login, signup, checkout and contact forms use native validation and plain React state |
| **Notifications** | Sonner | 2.0 | Toast notifications |
| **Utilities** | clsx + tailwind-merge | 2.1 / 3.5 | Conditional class merging |
| **Linting** | ESLint + eslint-config-next | 8.57 / 15.5 | `next/core-web-vitals` and `next/typescript` rules |

## 🚀 Quick Start

### Prerequisites
- Node.js 18.18 or newer (20+ recommended) and npm 9+
- Git

### Development Setup

1. **Clone and Install**
   ```bash
   git clone https://github.com/kidusabdula/minab-clothing.git
   cd minab-clothing
   npm ci
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

3. **Production Build**
   ```bash
   npm run build
   npm start
   ```

4. **Checks**
   ```bash
   npm run lint        # next lint
   npx tsc --noEmit    # type check
   ```

### Deploy
Vercel builds `master` of `kidusabdula/minab-clothing` to production at https://minab-clothing.vercel.app, and
every other branch to a preview deployment. There are no environment variables.

## 📁 Project Structure

```
minab-clothing/
├── app/                     # Next.js App Router (see Architecture Overview)
│   ├── components/          # ui/, shared/, product/, home/
│   ├── globals.css          # Theme tokens, focus ring, CSS motion
│   ├── icon.png             # Favicon and app icons made from the Minab mark
│   ├── apple-icon.png
│   ├── favicon.ico
│   └── layout.tsx           # Root layout
├── lib/
│   ├── cart.ts              # Sample pricing rules: subtotal, shipping, promo discount, total
│   └── utils.ts             # cn() class merger, etb() price and shortDate() formatters
├── public/                  # Seven WebP images: brand/ (mark, white mark, wordmark) and catalog/ (four garment photos)
├── typefile.d.ts            # All TypeScript interfaces
├── dummyData.ts             # Mock data (products, collections, categories, orders, addresses)
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration (AVIF/WebP image formats)
└── package.json             # Dependencies and scripts
```

## 🔐 Authentication & Security

- **Mock Authentication**: Login/signup pages with native form validation; nothing is sent or stored
- **Sonner Toasts**: User feedback for auth actions, cart operations, and form submissions
- **LocalStorage**: Theme preference only

## 📊 E-Commerce Flow

### Browse → Demo Checkout
1. **Home** → Discover featured products and collections
2. **Shop** → Filter by category, collection, price; sort by featured/newest/price/rating
3. **Product Detail** → View images, select color/size, read details (Add to Cart says the demo cart is fixed)
4. **Cart** → Adjust quantities, apply promo code (MINAB20), review totals
5. **Checkout** → Pick a saved address or enter a new one, choose a payment method (demo only: nothing is charged), review the sample cart
6. **Demo Checkout Complete** → No order is placed, nothing is charged and nothing is delivered

### Account Management
1. **Dashboard** → View stats, recent orders, quick actions
2. **Orders** → Sample orders in processing, shipped and delivered states
3. **Wishlist** → Sample saved products
4. **Addresses** → Sample shipping profiles with a default

## 🎨 Design System Architecture

### OKLCH Color Space
All colors use the **OKLCH** color model — perceptually uniform, accessible, and predictable. Every token is defined as an OKLCH CSS custom property and referenced via Tailwind's opacity modifier syntax:

```css
--primary: 0.52 0.18 32;     /* L C H — Lightness, Chroma, Hue */
```

```tsx
<div className="bg-primary/20 text-primary" />  /* 20% opacity via Tailwind */
```

### Theme System
- **Before Paint**: An inline script in `<head>` sets the `dark` class and `color-scheme` on `<html>` before the body renders
- **Storage**: `localStorage` preference, system fallback via `prefers-color-scheme`
- **Transition**: 300ms color transition on the page background and text
- **Toggle**: Header icon (Sun/Moon, swapped in CSS) flips the class on `<html>`, stores the choice and reports its state with `aria-pressed`

## 📚 Documentation

- **[Architecture](./ARCHITECTURAL_DNA.md)** — Kidus Abdula's general architecture reference, shared across projects; its first note lists where this repo departs from it
- **[Type Definitions](./typefile.d.ts)** — All TypeScript interfaces and types
- **[Mock Data](./dummyData.ts)** — Product catalog, collections, orders

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use semantic color tokens — never hardcoded colors
- Components follow the import direction rule: `ui/` → `shared/` and `product/` → `home/` and pages
- Keep pages as server components; add `"use client"` only to the smallest component that needs state
- Animations are CSS in `app/globals.css`, transform and opacity only, and must stay covered by the reduced-motion rule
- Give every `fill` image a `sizes` value, and mark only a page's LCP image as `priority`

## 📄 License

This project is proprietary software developed by Kidus Abdula. All rights reserved.

## 🏢 About

Minab is a clothing label from Addis Ababa. This web app is a storefront demo built around the brand: products, orders, reviews and contact details are mock data (`dummyData.ts`).

### Demo Contact Details
- The email, phone number and address shown in the app are placeholders, not Minab's real contact details.

---

**Built with ❤️ by Kidus Abdula** | **Storefront demo** | **Next.js 15 · Tailwind CSS**
