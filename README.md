# 🚀 Aranya Ghosh — Personal Portfolio Website

[![MIT License](https://img.shields.io/badge/License-MIT-7c3aed.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-0d9488.svg)](https://aranya2801.github.io/ARANYA-GHOSH-WEBSITE)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

> A modern, production-grade personal portfolio website — built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies, just clean code.

## ✨ Features

- 🎨 **Dark/Light Mode** — Smooth theme toggle with localStorage persistence
- ⚡ **Animated Loader** — Professional entry experience
- 🖱️ **Custom Cursor** — Magnetic cursor with hover effects
- 🔤 **Typewriter Effect** — Animated role descriptions
- 📊 **Skill Bars** — Scroll-triggered animated proficiency bars
- 🗂️ **Filterable Projects** — Filter by category with smooth transitions
- 📅 **Experience Timeline** — Animated vertical timeline
- 📬 **Contact Form** — Ready to connect with Formspree/EmailJS
- 📱 **Fully Responsive** — Works on all screen sizes
- ♿ **Accessible** — Semantic HTML, ARIA labels, keyboard navigation
- 🚀 **Performance** — Lazy loading, optimized assets, 95+ Lighthouse score

## 📁 File Structure

```
ARANYA-GHOSH-WEBSITE/
├── index.html          # Main HTML (single page)
├── css/
│   └── style.css       # All styles (~700 lines)
├── js/
│   └── main.js         # All logic (~400 lines)
├── assets/
│   └── profile.jpg     # Your profile photo (add this!)
├── LICENSE             # MIT License
└── README.md
```

## 🛠️ Setup & Deployment

### Local Development
```bash
git clone https://github.com/Aranya2801/ARANYA-GHOSH-WEBSITE.git
cd ARANYA-GHOSH-WEBSITE
# Open index.html in your browser — no build step needed!
```

### Deploy to GitHub Pages
1. Go to **Settings → Pages**
2. Set source to **main branch, / (root)**
3. Your site will be live at `https://aranya2801.github.io/ARANYA-GHOSH-WEBSITE`

## ✏️ Customization

Edit `js/main.js` — all content lives in the `DATA` section at the top:

```js
// Update your info here:
const PERSONAL = { name, title, email, github, linkedin, location }
const SKILLS   = [ { name, icon, category, level } ]
const PROJECTS = [ { title, desc, tags, img, live, code } ]
const TIMELINE = [ { year, title, org, desc } ]
```

## 📞 Contact Form Setup

The form is ready — connect it to [Formspree](https://formspree.io):
1. Create a free account at formspree.io
2. Get your form endpoint
3. Replace `YOUR_FORM_ID` in `js/main.js`

## 📄 License

MIT © 2025 [Aranya Ghosh](https://github.com/Aranya2801)
