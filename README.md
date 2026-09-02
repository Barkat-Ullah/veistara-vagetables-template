<div align="center">

# 🌿 Vesteira - Organic Farm & Vegetables Web Template

[![Live Demo](https://img.shields.io/badge/Live_Demo-veistera--template.vercel.app-2ea44f?style=for-the-badge&logo=vercel)](https://veistera-template.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  A premium, ultra-fast, and responsive modern website template designed for <b>Organic Farms</b>, <b>Agriculture Businesses</b>, <b>Fresh Produce Markets</b>, and <b>Eco-friendly Brands</b>.
</p>

[**Explore Live Demo 🚀**](https://veistera-template.vercel.app) · [**Report Bug**](https://github.com/Barkat-Ullah/veistara-vagetables-template/issues) · [**Request Feature**](https://github.com/Barkat-Ullah/veistara-vagetables-template/issues)

</div>

---

## 📖 Overview

**Vesteira** is a state-of-the-art web application and landing page template crafted specifically for organic farms, sustainable agriculture, and fresh vegetable delivery services. Built on **Next.js 16**, **React 19**, and **TypeScript**, Vesteira combines rich aesthetics—such as deep forest greens (`#0A412F`), golden harvest tones (`#EFCC6C`), and clean herbal backgrounds (`#F3F6E9`)—with blazing-fast static pre-rendering and silky-smooth interactions.

---

## 🌟 Key Features

- 🌱 **Modern Organic Aesthetic**: Elegant nature-inspired typography, curated color palettes, and micro-interactions.
- ⚡ **Blazing Fast Performance**: Static site pre-rendering (`.rendered/`) with Next.js App Router for instant load times and perfect SEO scores.
- 📱 **100% Fully Responsive**: Pixel-perfect layouts adapted seamlessly for Mobile, Tablet, Desktop, and Ultra-wide screens.
- 🥬 **11+ Dedicated Product Pages**: Complete product catalog showcase with individual product detail pages and interactive cart/order UI.
- 🚜 **Farm & Sustainability Storytelling**: Interactive sections highlighting organic farming practices, soil enrichment, and eco-friendly harvests.
- 💬 **Interactive Contact System**: Pre-built inquiry form, support details, and responsive business information cards.
- 📜 **Legal & Compliance Pages**: Pre-structured Privacy Policy, Terms & Conditions, and Refund Policy pages.
- 🌿 **Custom 404 Not Found Page**: Catch-all 404 page with quick navigation shortcuts and home redirects.
- 🚀 **SEO & Social Sharing Ready**: Includes dynamic OpenGraph metadata, canonical URL resolution, and semantic HTML5 hierarchy.

---

## 🌐 Live Preview

You can test and view the deployed production website here:

🔗 **[https://veistera-template.vercel.app](https://veistera-template.vercel.app)**

---

## 📂 Pages & Routes Breakdown

| Route | Page | Description |
|---|---|---|
| `/` | **Home Page** | Hero section, features, featured produce, testimonials, and story |
| `/about` | **About Us** | Farm origin, organic certifications, mission, and vision |
| `/farms` | **Our Farms** | Sustainable farming practices, soil care, and farm workshops |
| `/product` | **Products Catalog** | Grid showcase of all organic fruits, vegetables, and dairy items |
| `/product/*` | **Product Details** | 11 Individual produce pages (Spinach, Carrots, Apples, Tomatoes, etc.) |
| `/blog` | **Blog & Articles** | Organic farming insights, healthy recipes, and seasonal updates |
| `/contact` | **Contact Us** | Inquiry form, customer support channels, working hours, and address |
| `/privacy-policy` | **Privacy Policy** | Data protection, rights, and privacy practices |
| `/terms-and-condition` | **Terms & Conditions** | Terms of service, licensing, and usage policies |
| `/refund-policy` | **Refund Policy** | Clear terms for order returns and refund processing |
| `/404` | **404 Error Page** | Custom page not found with quick destination suggestions |

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (Webpack)](https://nextjs.org/)
- **UI Library**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS, Modern Design Tokens & Responsive Media Queries
- **Animations & Motion**: Custom Motion & Snappy Smooth Scroll Engine
- **Pre-rendering**: Node.js / `tsx` script generating static HTML snapshots
- **Hosting & Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### 1. Prerequisites

Make sure you have **Node.js 18+** (or Node 20 / 22 / 24) installed:

```bash
node -v
npm -v
```

### 2. Clone the Repository

```bash
git clone https://github.com/Barkat-Ullah/veistara-vagetables-template.git
cd veistara-vagetables-template
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website. The server automatically reloads when you make changes.

---

## 🏗️ Build & Production

### Pre-render Static Pages

To regenerate all static HTML files into `.rendered/`:

```bash
npm run prerender
```

### Create Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## 📁 Project Structure

```text
vegitables-template/
├── .rendered/               # Pre-rendered production static HTML pages
├── public/                  # Public static assets
│   └── assets/              # WebP images, vector icons, and script bundles
│       └── framer/          # Runtime manifests and content files
├── scripts/
│   └── prerender.mts        # Static HTML builder script
├── src/
│   ├── app/                 # Next.js App Router route handlers
│   │   ├── [...not_found]/  # Catch-all 404 handler
│   │   ├── about/           # About route
│   │   ├── blog/            # Blog route
│   │   ├── contact/         # Contact route
│   │   ├── farms/           # Farms route
│   │   ├── product/         # Product catalog & subpages
│   │   └── route.ts         # Homepage route
│   ├── sections/            # Reusable page sections (Hero, Header, Footer, etc.)
│   ├── views/               # Complete page compositions
│   ├── manifest.json        # Page metadata, headers, and assets mapping
│   └── render.ts            # Server-side HTML render engine
├── package.json             # Project dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 🎨 Customization Guide

### Updating Contact & Business Information

1. **Footer & Contact Details**:
   - Edit [src/sections/contact/Contact.tsx](src/sections/contact/Contact.tsx) and [src/sections/*/Footer.tsx](src/sections/) to update your phone number, email address, physical location, and social links.
2. **Text & Copy Overrides**:
   - Text strings can be customized in [public/assets/framer/fnj-content.mjs](public/assets/framer/fnj-content.mjs) or directly inside the corresponding component in `src/sections/`.
3. **Re-run Pre-render**:
   - After updating copy, run `npm run prerender` to keep static HTML and client runtime in sync.

---

## 🚢 Deployment to Vercel

The template is configured for deployment with Vercel:

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the repository in your [Vercel Dashboard](https://vercel.com/new).
3. The build settings are auto-detected (`npm run build` with `npm run prerender`).
4. Click **Deploy**.

Alternatively, deploy directly via the Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

Developed with ❤️ by **[Barkat Ullah](https://github.com/Barkat-Ullah)**

⭐ If you found this template helpful, please give it a star on GitHub!

</div>
