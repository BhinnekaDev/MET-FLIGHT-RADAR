# 🛫 MET-FLIGHT-RADAR

**Aplikasi Web Monitoring Penerbangan & Cuaca Secara Real-time**

> Platform web untuk menampilkan data penerbangan, cuaca, dan radar secara realtime dengan visualisasi interaktif menggunakan **Leaflet**. Data pesawat diambil dari OpenSky, data cuaca dari OpenWeather, dan radar dari CMAX/SSA/TITAN SIDARMA BMKG.

![Platform](https://img.shields.io/badge/platform-Web-blue?style=flat-square)
![Next.js](https://img.shields.io/badge/built%20with-Next.js-000000?logo=nextdotjs&style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss&logoColor=white&style=flat-square)
![Leaflet](https://img.shields.io/badge/Mapping-Leaflet-228B22?style=flat-square)
![Framer Motion](https://img.shields.io/badge/Animation-Framer_Motion-7928CA?style=flat-square)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel&logoColor=white&style=flat-square)

---

## 🌐 Demo

Demo aplikasi: **[https://met-flight-radar.vercel.app/](https://met-flight-radar.vercel.app/)** _(hosted on Vercel)_

---

## ✨ Fitur Utama

| Fitur                          | Deskripsi                                                                                                 |
| ------------------------------ | --------------------------------------------------------------------------------------------------------- |
| **Monitoring Penerbangan**     | Menampilkan data pesawat secara realtime dengan posisi di peta menggunakan OpenSky API.                   |
| **Analisis**                   | Menyediakan visualisasi data historis penerbangan, cuaca, dan radar untuk membantu pengambilan keputusan. |
| **Cuaca & Radar Realtime**     | Integrasi OpenWeather dan SIDARMA BMKG untuk informasi cuaca dan radar secara live.                       |
| **Interaktif Map**             | Visualisasi data penerbangan, cuaca, dan radar di peta interaktif menggunakan Leaflet.                    |
| **Mode Monitoring & Analisis** | Dua mode tampilan: untuk pengamatan real-time dan analisis data historis.                                 |
| **Responsive Design**          | Tampilan optimal di semua ukuran layar (mobile hingga desktop).                                           |
| **Animasi & Transisi Smooth**  | Animasi elegan menggunakan Framer Motion untuk UX lebih menyenangkan.                                     |
| **Theme Detection**            | Otomatis menyesuaikan mode terang/gelap sesuai preferensi sistem (`prefers-color-scheme`).                |

---

## ⚙️ Teknologi

| Layer             | Stack                                           |
| ----------------- | ----------------------------------------------- |
| **Frontend**      | Next.js 16 (App Router), React 19, TypeScript 5 |
| **Styling**       | Tailwind CSS 4, tailwind-merge                  |
| **Animation**     | Framer Motion                                   |
| **Mapping**       | Leaflet, React-Leaflet                          |
| **Icons**         | Lucide React                                    |
| **UI Components** | Shadcn/ui, Radix UI                             |
| **Development**   | ESLint, TypeScript                              |

---

## 🛠️ Instalasi

```bash
$ git clone https://github.com/BhinnekaDev/MET-FLIGHT-RADAR
$ cd MET-FLIGHT-RADAR

$ npm install
```

Setup environment variables:

```bash
$ cp .env.example .env.local
```

Jalankan development server:

```bash
$ npm run dev
```

Akses melalui [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur Project (Singkat)

```
met-flight-radar/
├── app/
│   ├── api/
│   │   └── planes/
│   │       └── route.ts
│   ├── layout.tsx
│   └──  page.tsx
├── components/
│   ├── header/
│   │   ├── Logo.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ModeSwitch.tsx
│   │   └── ThemeToggle.tsx
│   ├── main-panel/
│   │   ├── AnimatedBackground.tsx
│   │   ├── MapContainer.tsx
│   │   ├── MobileInfoBanner.tsx
│   │   ├── ModeBadge.tsx
│   │   ├── StatCard.tsx
│   │   └── StatsGrid.tsx
│   ├── main-panel/
│   │   ├── LoadingIndicator.tsx
│   │   ├── MapTileLayer.tsx
│   │   └── PlanePopup.tsx
│   ├── sidebar/
│   │   ├── AnimatedBackground.tsx
│   │   ├── LegendSection.tsx
│   │   ├── MenuItemsList.tsx
│   │   ├── MobileMenuButton.tsx
│   │   ├── QuickActionsGrid.tsx
│   │   ├── SidebarHeader.tsx
│   │   └── SidebarOverlay.tsx
│   ├── splash-screen/
│   │   ├── BackgroundOrbs.tsx
│   │   ├── FloatingParticles.tsx
│   │   ├── ModeTransition.tsx
│   │   ├── ProgressIndicator.tsx
│   │   └── RadarAnimation.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Header.tsx
│   ├── LoadingScreen.tsx
│   ├── MainPanel.tsx
│   ├── Map.tsx
│   ├── Sidebar.tsx
│   └── SplashScreen.tsx
├── constants/
│   ├── header.constants.ts
│   ├── map.constants.ts
│   ├── sidebar.constants.ts
│   ├── splash.constants.ts
│   └── svg.constants.ts
├── hooks/
│   ├── useApp.ts
│   ├── useAppInitialization.ts
│   ├── useAppMode.ts
│   ├── useHeader.ts
│   ├── useLocalStorage.ts
│   ├── usePlanes.ts
│   ├── useSidebar.ts
│   ├── useSplashScreen.ts
│   └── useTheme.ts
├── interfaces/
│   ├── animated-background-props.interface.ts
│   ├── dimensions.interface.ts
│   ├── floating-particles-props.interface.ts
│   ├── legend-item-props.interface.ts
│   ├── loading-indicator-props.interface.ts
│   ├── loading-screen-props-props.interface.ts
│   ├── logo-props.interface.ts
│   ├── map-props.interface.ts
│   ├── map-tile-layer-props.interface.ts
│   ├── menuItem-props.interface.ts
│   ├── mobile-info-banner-props.interface.ts
│   ├── mobile-menu-button-props.interface.ts
│   ├── mobile-menu-props.ts
│   ├── mode-badge-props.interface.ts
│   ├── mode-switch-props.ts
│   ├── particle.interface.ts
│   ├── plane-popup-props.interface.ts
│   ├── plane-props.interface.ts
│   ├── quick-action-button-props.interface.ts
│   ├── sidebar-overlay-props.interface.ts
│   ├── stat-card-props.interface.ts
│   ├── theme-toggle-props.interface.ts
│   ├── use-app-initialization-return.interface.ts
│   ├── use-app-mode-return-props.interface.ts
│   ├── use-header-props.interface.ts
│   └── use-theme-return-props.interface.ts
├── lib/
│   └── utils.tss
├── types/
│   ├── header.types.ts
│   ├── main-panel.types.ts
│   ├── sidebar.types.ts
│   └── splash.types.ts
├── utils/
│   └── plane-icon.utils.ts
├── package.json
└── README.md
```

---

## 🧰 Script npm

| Perintah        | Fungsi                         |
| --------------- | ------------------------------ |
| `npm run dev`   | Menjalankan development server |
| `npm run build` | Build production               |
| `npm run start` | Menjalankan production build   |
| `npm run lint`  | Menjalankan ESLint             |

---

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/namafitur`)
3. Commit changes (`git commit -m 'feat: tambah fitur x'`)
4. Push ke branch (`git push origin feature/namafitur`)
5. Buat Pull Request

---

## 📜 Lisensi

MIT © 2025 [Bhinneka Dev](https://github.com/BhinnekaDev)

---

<p align="center">
  <img alt="MET Flight Radar Preview" src="https://github.com/user-attachments/assets/flight-radar-preview.png" width="80%" />
</p>

<p align="center"><sub>Visualisasi real-time penerbangan dan cuaca dengan MET-FLIGHT-RADAR</sub></p>
