[README.md](https://github.com/user-attachments/files/33550603/README.md)
# Muhammad Parvez Ahmed — Cyber Security Portfolio

A clean, fast, professional cybersecurity portfolio website.
**No framework. No build step. Open index.html and it works.**

---

## 📁 Project Structure

```
parvez-portfolio/
│
├── index.html                  ← Main HTML (all sections)
│
└── assets/
    ├── css/
    │   ├── reset.css           ← CSS reset / normalizer
    │   ├── variables.css       ← Design tokens (colors, fonts, spacing)
    │   ├── base.css            ← Global styles, buttons, utilities
    │   ├── nav.css             ← Navigation bar
    │   ├── hero.css            ← Hero section + terminal
    │   ├── sections.css        ← Shared section title styles
    │   ├── about.css           ← About + experience card
    │   ├── skills.css          ← Arsenal / skills grid
    │   ├── projects.css        ← Project cards
    │   ├── certifications.css  ← Certification cards
    │   ├── achievements.css    ← Achievement cards
    │   ├── services.css        ← Services cards
    │   ├── contact.css         ← Contact links card
    │   ├── footer.css          ← Footer
    │   ├── animations.css      ← All @keyframes
    │   └── responsive.css      ← All media queries
    │
    └── js/
        ├── data.js             ← All site content (edit this to update)
        └── main.js             ← All interactivity (nav, typewriter, scroll)
```

---

## 🚀 How to Run

### Option 1 — Open directly (simplest)
Just double-click `index.html` in your file manager.

### Option 2 — Local server (recommended for best performance)
If you have Python installed:
```bash
cd parvez-portfolio
python -m http.server 8000
```
Then open: **http://localhost:8000**

Or with Node.js:
```bash
npx serve .
```

---

## ✏️ How to Update Content

All content is in **`assets/js/data.js`**.

| What to change         | Where in data.js        |
|------------------------|-------------------------|
| Name, title, tagline   | `meta` + `hero`         |
| Stats (years, projects)| `stats`                 |
| Bio, location          | `about`                 |
| Experience             | `experience` array      |
| Skills                 | `skills` object         |
| Projects               | `projects` array        |
| Certifications         | `certifications` array  |
| Achievements           | `achievements` array    |
| Services               | `services` array        |
| Contact links          | `contact` object        |

> **Note:** `data.js` currently serves as a reference — the HTML content
> is written directly in `index.html` for maximum performance and SEO.
> To add a new project or certification, add a new card block in the
> corresponding section of `index.html`.

---

## 🎨 How to Customize Design

All colors, fonts, and spacing are in **`assets/css/variables.css`**:

```css
--green:  #00ff88;   /* Primary accent — change to your preferred color */
--blue:   #00c8ff;   /* Secondary accent */
--bg:     #050a0e;   /* Page background */
--white:  #e8f0f7;   /* Body text */
```

---

## 🌐 How to Deploy (Free Options)

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to Settings → Pages → Source: main branch / root
3. Your site is live at `https://yourusername.github.io/repo-name`

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag the entire `parvez-portfolio` folder onto the deploy area
3. Done — live in seconds with a free URL

### Vercel
```bash
npm i -g vercel
cd parvez-portfolio
vercel
```

---

## 📱 Browser Support
Works in all modern browsers: Chrome, Firefox, Safari, Edge.

---

© 2025 Muhammad Parvez Ahmed
