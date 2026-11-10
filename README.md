# Portfolio

My personal website: who I am, the projects I've built and how to reach me.

**Live:** [portfolio.josevillar.workers.dev](https://portfolio.josevillar.workers.dev/)

## Stack

- React 19 and Vite
- Plain CSS, with all colors defined as variables in `src/index.css`
- Spanish and English, with the texts in `src/i18n/`
- Hosted on Cloudflare Workers, deployed on every push to `main`

## Run it locally

```bash
npm install
npm run dev
```

To open it from a phone on the same network, use `npm run dev -- --host`.

## Structure

```
src/
  sections/    Hero, About, Projects and Contact
  components/  Navbar, language switch and the code background
  i18n/        texts in Spanish (es.js) and English (en.js)
  data/        links, CV files and project links
public/        favicon and CV files
```

To add a project, add its texts to `projects.items` in both `es.js` and `en.js`, and its links to `PROJECT_LINKS` in `src/data/links.js`, in the same order.

## Contact

- [LinkedIn](https://www.linkedin.com/in/jose-villar-57293a1ab/)
- [GitHub](https://github.com/josevillar99)
