# Nikoloz Khutsishvili — Portfolio

> Personal portfolio of a Junior DevOps Engineer & Front-End Developer based in Tbilisi, Georgia.

Live site: *coming soon* · [GitHub](https://github.com/NikaXucishvili) · [LinkedIn](https://linkedin.com/in/nika-khutsishvili-a5a4a3235)

---

## What's Inside

A fully responsive, single-page portfolio built to showcase DevOps projects, frontend skills, and professional background. Designed with a dark theme, smooth scroll animations, and a clean component architecture.

**Sections:** Hero · About · Skills · Projects · Experience · Contact

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Routing | Wouter |
| Server | Express (Node.js) |

---

## Getting Started

**Requirements:** Node.js 18+, npm or pnpm

```bash
# Clone and install
git clone https://github.com/NikaXucishvili/nikoloz-portfolio.git
cd nikoloz-portfolio
pnpm install

# Start dev server
pnpm dev
# → http://localhost:3000
```

```bash
# Production build
pnpm build

# Preview production build locally
pnpm preview
```

---

## Project Structure

```
nikoloz-portfolio/
├── client/
│   └── src/
│       ├── components/       # Hero, About, Skills, Projects, Experience, Contact
│       ├── pages/            # Home, NotFound
│       ├── contexts/         # ThemeContext
│       └── lib/              # Utility functions
├── server/
│   └── index.ts              # Express server
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Customization

All content lives in the individual section components under `client/src/components/`. To update your info:

- **Personal details** → `Hero.tsx`, `Contact.tsx`, `Footer.tsx`
- **Skills list** → `Skills.tsx` — edit the `skillsData` array
- **Projects** → `Projects.tsx` — edit the `projectsData` array (title, description, tags, GitHub URL, live demo)
- **Color scheme** → `client/src/index.css` CSS variables

```css
:root {
  --primary: #A78BFA;     /* Purple accent */
  --secondary: #06B6D4;   /* Cyan accent */
  --background: #0F172A;  /* Dark slate */
  --foreground: #E0E7FF;  /* Light text */
}
```

---

## Deployment

### Vercel (recommended)
Connect your GitHub repo to [Vercel](https://vercel.com). It auto-detects Vite and deploys on every push to `main`. Zero config needed.

### Netlify
- Build command: `pnpm build`
- Publish directory: `dist/public`

### GitHub Pages
```bash
# vite.config.ts — set base path first
base: '/nikoloz-portfolio/'

# Then build and push
pnpm build
git add dist -f && git commit -m "deploy" && git push
```
Enable Pages in repo Settings → Pages → deploy from `gh-pages` branch.

### GitHub Actions (auto-deploy)
```yaml
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '18' }
      - run: pnpm install && pnpm build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Dev server won't start | `rm -rf node_modules && pnpm install` |
| Build errors | Run `pnpm check` for TypeScript issues |
| Animations broken | Verify `viewport={{ once: true }}` on `whileInView` props |
| Styles not applying | Confirm `index.css` is imported in `main.tsx` |

---

## License

MIT — free to use as a template for your own portfolio.

---

*Built by Nikoloz Khutsishvili*
