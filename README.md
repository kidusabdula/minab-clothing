# Minab Clothing — Premium Ethiopian Fashion E-Commerce

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js Version](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Next.js Version](https://img.shields.io/badge/Next.js-15+-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4.svg)](https://tailwindcss.com/)

> **Minab Clothing** is a premium Ethiopian fashion brand showcasing contemporary designs rooted in heritage craftsmanship. This e-commerce web application delivers a complete shopping experience — from product discovery through checkout — with a polished, gallery-worthy UI designed for product studio demonstrations.

## 🌟 Key Features

### Core Shopping Flow
- **Product Catalog**: Filterable shop by category, collection, and price range
- **Product Detail Pages**: Full specifications, color/size selection, image galleries
- **Shopping Cart**: Quantity controls, promo codes, real-time totals
- **3-Step Checkout**: Shipping → Payment → Review with order confirmation
- **Mock E-Commerce Flow**: Fully functional UI demo flow from browse to purchase

### User Account Features
- **Dashboard**: Order overview, quick stats, recent activity
- **Order History**: Track orders by status (processing, shipped, delivered)
- **Wishlist**: Save and revisit favorite products
- **Saved Addresses**: Multiple shipping profiles with defaults

### Premium UI System
- **Dual Theme**: Light/dark mode with OKLCH perceptually uniform color space
- **Glassmorphism**: Frosted glass panels for cards, navbars, and overlays
- **Framer Motion Animations**: Staggered entrances, spring transitions, page transitions
- **Responsive Design**: Mobile-first with slide-out navigation, touch-friendly targets (44px+)
- **Sonner Toasts**: Elegant notification system for cart, checkout, and form actions

### Brand Content
- **Home Page**: Hero section, featured products, collection showcases, testimonials, newsletter CTA
- **Collections**: Curated seasonal collections with dedicated landing pages
- **About Page**: Brand story, values (sustainability, artisan-first, craftsmanship, community)
- **FAQ**: Interactive accordion with shipping, returns, sizing, and care information
- **Contact**: Form with store location, hours, and contact details

## 🎨 Design System

### Color Palette

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| **Primary** | Warm Terracotta | Bright Amber | CTAs, links, badges, accent surfaces |
| **Secondary** | Deep Coffee Brown | Warm Taupe | Secondary buttons, section labels |
| **Accent** | Sage Green | Bright Sage | Success states, eco/brand highlights |
| **Background** | Warm Cream | Deep Espresso | Page background |
| **Card** | Pure White | Dark Espresso | Cards, panels, elevated surfaces |
| **Muted** | Warm Sand | Dark Coffee | Subtle backgrounds, inactive states |

### Typography
- **Font**: Poppins (300/400/500/600/700 weights)
- **Loading**: `next/font/google` with variable CSS and `display: swap`
- **Scale**: System-based with responsive headings (5xl–8xl on hero)

### Components
- **Button**: 6 variants (default, secondary, outline, ghost, destructive, link), 3 sizes
- **Card**: 3 variants (default, glass, glass-strong) with header/content/footer slots
- **Input**: Labeled form fields with error states and focus rings
- **Badge**: 5 variants for status indicators
- **ThemeProvider**: SSR-safe with localStorage persistence and system preference detection

## 🏗️ Architecture Overview

Minab follows the **Extreme Modularization** pattern with clear component boundaries:

```
app/
├── components/
│   ├── ui/               # Primitives (Button, Card, Input, Badge)
│   ├── shared/           # Shared (NavBar, Footer)
│   └── home/             # Home page sections (Hero, ProductCard, Collections, Testimonials, CTA)
├── account/              # Tier 2: Customer account area
│   ├── orders/           # Order history
│   ├── wishlist/         # Saved items
│   └── addresses/        # Shipping profiles
├── shop/                 # Tier 1: Public product discovery
│   └── [id]/             # Dynamic product detail (SSG with generateStaticParams)
├── collections/          # Tier 1: Curated collection pages
│   └── [slug]/           # Dynamic collection detail (SSG)
├── cart/                 # Shopping cart
├── checkout/             # Multi-step checkout flow
│   └── success/          # Order confirmation
├── about/                # Brand story
├── contact/              # Contact form
├── faq/                  # Help center
├── login/                # Authentication mock
├── signup/               # Registration mock
├── search/               # Search results
└── theme-provider.tsx    # Global theme context
```

### Key Architectural Decisions

- **Three-Tier Architecture**: Public (shop, collections, about), Customer (account, orders, wishlist, cart, checkout), Admin (planned)
- **Schema-First**: TypeScript interfaces (`typefile.d.ts`) define all data shapes before any component is built
- **Mock Data Layer**: `dummyData.ts` serves as a centralized data source with derived views (featured, newArrivals, sale)
- **SSG + Client Hybrid**: Server components for data fetching (`generateStaticParams`), client components for interactivity (animations, forms, toasts)
- **Import Direction Rule**: `ui/` → `shared/` → `home/` — dependencies flow downward only

## 🛠️ Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | Next.js | 15.5 | App Router, SSR/SSG, API routes |
| **Language** | TypeScript | 5.8 | Strict mode, full type safety |
| **Styling** | Tailwind CSS | 3.4 | Utility-first, OKLCH tokens |
| **UI Primitives** | Custom (Radix-inspired) | — | Accessible, unstyled, composable |
| **Animations** | Framer Motion | 12.3 | Spring animations, layout transitions |
| **Icons** | Lucide React | 1.14 | Consistent stroke, tree-shakeable |
| **Forms** | React Hook Form | 7.55 | Performant form management |
| **Validation** | Yup + Zod | — | Schema + runtime validation |
| **Notifications** | Sonner | 2.0 | Toast notifications |
| **Utilities** | clsx + tailwind-merge | — | Conditional class merging |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm 9+
- Git

### Development Setup

1. **Clone and Install**
   ```bash
   git clone https://github.com/VersaLabs/minab-clothing.git
   cd minab-clothing
   npm install
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

### Deploy to Vercel
```bash
vercel
```

## 📁 Project Structure

```
minab-clothing/
├── app/                     # Next.js App Router
│   ├── components/          # Reusable components
│   │   ├── ui/              # Design system primitives
│   │   ├── shared/          # NavBar, Footer
│   │   └── home/            # Home page sections
│   ├── account/             # Customer account pages
│   ├── shop/                # Product catalog + detail
│   ├── collections/         # Collection pages
│   ├── cart/                # Shopping cart
│   ├── checkout/            # Checkout flow
│   ├── globals.css          # Theme tokens + utilities
│   ├── theme-provider.tsx   # Dark/light mode context
│   └── layout.tsx           # Root layout
├── lib/                     # Utilities
│   └── utils.ts             # cn() classname merger
├── public/                  # Static assets
│   ├── IMG_*.PNG|JPG|MP4   # Product images, logos, videos
│   └── favicon.ico
├── typefile.d.ts            # All TypeScript interfaces
├── dummyData.ts             # Mock data (products, collections, orders, etc.)
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.mjs          # Next.js configuration
└── package.json             # Dependencies
```

## 🔐 Authentication & Security

- **Mock Authentication**: Login/signup pages with form validation for demo purposes
- **Sonner Toasts**: User feedback for auth actions, cart operations, and form submissions
- **LocalStorage**: Theme preference persistence

## 📊 E-Commerce Flow

### Browse → Purchase
1. **Home** → Discover featured products, collections, testimonials
2. **Shop** → Filter by category, collection, price; sort by featured/newest/price/rating
3. **Product Detail** → View images, select color/size, read details, add to cart
4. **Cart** → Adjust quantities, apply promo code (MINAB20), review totals
5. **Checkout** → Select address, choose payment method (card/telebirr), review order
6. **Confirmation** → Order number, tracking, estimated delivery

### Account Management
1. **Dashboard** → View stats, recent orders, quick actions
2. **Orders** → Track processing → shipped → delivered lifecycle
3. **Wishlist** → Save products for later
4. **Addresses** → Manage shipping profiles with defaults

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
- **ThemeProvider**: React context + `useEffect` for SSR safety
- **Storage**: `localStorage` preference, system fallback via `prefers-color-scheme`
- **Transition**: 300ms smooth color transitions on all themed elements
- **Toggle**: Navbar icon (Sun/Moon) with immediate class toggle on `<html>`

## 📚 Documentation

- **[Architecture](./ARCHITECTURAL_DNA.md)** — Kidus Abdula's architectural methodology and design philosophy
- **[Type Definitions](./typefile.d.ts)** — All TypeScript interfaces and types
- **[Mock Data](./dummyData.ts)** — Product catalog, collections, orders, testimonials

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Use semantic color tokens — never hardcoded colors
- Components follow the import direction rule: `ui/` → `shared/` → `feature/`
- Animations use defined easing constants from Framer Motion

## 📄 License

This project is proprietary software developed by Kidus Abdula. All rights reserved.

## 🏢 About

Minab Clothing is a premium Ethiopian fashion brand. The name "Minab" means "thread" in Amharic — a reminder that the strongest fabrics are woven from many strands. This web application showcases the brand's digital presence with a focus on craftsmanship, storytelling, and enterprise-grade UI design.

### Contact Information
- **Email**: hello@minab.co
- **Phone**: +251 91 123 4567
- **Location**: Addis Ababa, Ethiopia

---

**Built with ❤️ by Kidus Abdula** | **Premium Ethiopian Fashion** | **Enterprise-Grade UI Architecture**
