## ✨ Features

- **3D Hero Scene** — Interactive rotating geometric mesh with orbiting rings and floating particles (Three.js + React Three Fiber)
- **3D Skills Sphere** — Skill nodes orbiting in 3D space
- **3D Project Cards** — Real-time tilt effect on hover using mouse tracking
- **Cursor Glow** — Custom interactive cursor with a following glow
- **Framer Motion** — Scroll reveal, stagger animations, spring physics throughout
- **Glassmorphism UI** — Frosted glass cards, soft shadows, vibrant gradients
- **Contact Form** — EmailJS-powered with loading/success/error states
- **Fully Responsive** — Mobile-first, works on all screen sizes

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | TailwindCSS 3 |
| Animation | Framer Motion 11 |
| 3D | Three.js + React Three Fiber + Drei |
| Icons | React Icons |
| Email | EmailJS |
| Language | TypeScript |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page orchestrating all sections
│   └── globals.css         # Global styles, animations, utilities
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── three/
│   │   ├── HeroScene.tsx   # 3D hero animation
│   │   └── SkillsScene.tsx # 3D skills sphere
│   └── ui/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── CursorGlow.tsx
│       ├── ProjectCard.tsx  # 3D tilt card
│       └── SectionLabel.tsx
├── animations/
│   └── variants.ts         # Framer Motion variants
├── data/
│   └── portfolio.ts        # All portfolio content
├── hooks/
│   ├── useMousePosition.ts
│   └── useScrollReveal.ts
└── utils/
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Clone & Install

```bash
git clone <your-repo-url>
cd shivang-portfolio
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Customize Your Content

Edit `src/data/portfolio.ts` to update:
- Personal info (name, email, LinkedIn, GitHub)
- Skills and proficiency levels
- Projects (title, stack, features, links)
- Experience entries

### 4. Add Resume

Place your resume PDF at `public/resume.pdf` for the download button to work.

### 5. Configure EmailJS (Contact Form)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Create a service and email template
3. In `ContactSection.tsx`, replace the comment with:

```typescript
import emailjs from "@emailjs/browser";

await emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  {
    from_name: form.name,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
  },
  "YOUR_PUBLIC_KEY"
);
```

---

## 🌐 Deploy to Vercel

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Next.js.

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-configures everything
5. Click Deploy

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## ⚙️ Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Customization Guide

### Color Scheme
Edit `src/app/globals.css` CSS variables:
```css
:root {
  --primary: #6366F1;    /* Indigo */
  --secondary: #06B6D4;  /* Cyan */
  --accent: #F59E0B;     /* Amber */
  --highlight: #F472B6;  /* Pink */
}
```

### Fonts
Change fonts in `src/app/layout.tsx`. Uses Google Fonts:
- **Headings**: Space Grotesk
- **Body**: Inter  
- **Mono**: JetBrains Mono

### 3D Scenes
- `HeroScene.tsx` — Modify geometry, colors, particle count
- `SkillsScene.tsx` — Modify skill labels and sphere radius

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|---|---|
| Mobile | < 768px |
| Tablet | 768px – 1024px |
| Desktop | > 1024px |

---

## 🔧 Performance Tips

- Three.js scenes are lazy-loaded with `next/dynamic` (ssr: false)
- Images use Next.js `<Image>` optimization
- Fonts loaded via Next.js font optimization
- Framer Motion animations use hardware-accelerated CSS properties

---

## 📄 License

MIT — Free to use and modify for personal portfolios.
