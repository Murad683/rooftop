# RoofTop Lounge Baku – Rooftop Dining Website

Modern, minimal and fully responsive website for **RoofTop Lounge Baku**, offering rooftop dining with a 360° city view.  
Built as a single-page experience to showcase atmosphere, menu highlights and contact details.

---

## 🌐 Live Demo

👉 **Netlify:** https://rooftop-site.netlify.app/

---

## 🧰 Tech Stack

- ⚛️ **React**
- ⚡ **Vite** – fast dev server & bundler
- 🎨 **Tailwind CSS**
- 🧭 (Optional) **React Router** – if multiple views are used
- 🧩 Reusable UI components

*(Stack adlarını layihənin real vəziyyətinə görə istəsən sonra dəyişə bilərsən.)*

---

## ✨ Features

- **Hero section** with strong headline, short description and main call-to-action  
- **About / Concept** section introducing RoofTop Lounge Baku and its vibe  
- **Menu highlights** to show key drinks / dishes or categories  
- **View & atmosphere focus** – layout tailored to rooftop visuals and premium feel  
- **Contact & location info** with clear ways to reach the venue  
- **Responsive design** – optimized for desktop, tablet and mobile  
- **Clean, modern UI** with generous whitespace and smooth spacing  

---

## 🚀 Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/Murad683/rooftop.git
cd rooftop
2. Install dependencies
bash
Kodu kopyala
npm install
Node.js 18+ və npm tövsiyə olunur.

3. Run development server
bash
Kodu kopyala
npm run dev
Terminalda çıxan linki (adətən http://localhost:5173) brauzerdə aç.

4. Create production build
bash
Kodu kopyala
npm run build
İstəyə görə: production build-i lokalda test etmək üçün:

bash
Kodu kopyala
npm run preview
📁 Project Structure (High-Level)
text
Kodu kopyala
rooftop/
├── public/              # Static assets
├── src/
│   ├── assets/          # Şəkillər, ikonlar və s.
│   ├── components/      # UI komponentləri (Navbar, Hero, Sections, Footer və s.)
│   ├── pages/           # Səhifə / layout komponentləri (əgər istifadə olunursa)
│   ├── App.(jsx|tsx)    # Əsas app layout-u
│   └── main.(jsx|tsx)   # React giriş nöqtəsi
├── index.html           # Root HTML faylı
├── package.json         # Skriptlər və asılılıqlar
├── tailwind.config.*    # Tailwind konfiqurasiyası
├── postcss.config.*     # PostCSS konfiqurasiyası
└── vite.config.*        # Vite konfiqurasiyası
