# Copilot Instructions for AI Agents

## Project Overview
- This is a personal portfolio site built with Next.js and TailwindCSS, deployed on Vercel.
- Major sections: Home, Projects, Resume, Contact.
- The codebase is based on Chetan Verma's `react-portfolio-template` but has custom theming, content, and design.

## Key Architecture & Patterns
- **Pages**: All routes are in `pages/`. Dynamic project pages use `[slug].js` under `pages/projects/`.
- **Components**: Modular React components are in `components/`, grouped by feature (e.g., `Button`, `Footer`, `BlogEditor`).
- **Data**: Portfolio/project data is in `data/portfolio.json`. Blog posts are markdown files in `_posts/`.
- **API Routes**: Custom API endpoints are in `pages/api/` (e.g., `portfolio.js`, `projects/edit.js`).
- **Styling**: TailwindCSS is configured in `tailwind.config.js` and used throughout. Global styles in `styles/globals.css`.
- **Markdown**: Blog/project content is rendered from markdown using utilities in `utils/markdownToHtml.js`.

## Developer Workflows
- **Install dependencies**: `yarn`
- **Run locally**: `yarn dev` (Next.js dev server)
- **Build for production**: `yarn build`
- **Preview production build**: `yarn start`
- **Edit/add projects**: Update `data/portfolio.json` and/or add markdown files to `_posts/`.
- **API editing**: Update files in `pages/api/` for backend logic.

## Project-Specific Conventions
- **Component structure**: Each component has its own folder with an `index.js` entry point.
- **Data-driven content**: Projects and blog posts are sourced from JSON and markdown, not hardcoded in components.
- **No TypeScript**: The codebase is JavaScript-only.
- **No explicit test suite**: There are no automated tests or test folders.
- **Deployment**: Vercel is used for production; no custom server code.

## Integration Points
- **Markdown rendering**: See `utils/markdownToHtml.js` for how markdown is parsed and rendered.
- **API endpoints**: Used for editing and fetching portfolio/project data (see `pages/api/portfolio.js`, `pages/api/projects/`).
- **Static assets**: Images and icons are in `public/images/`.

## Examples
- To add a new project: Add a markdown file to `_posts/` and update `data/portfolio.json`.
- To add a new component: Create a folder in `components/` with an `index.js` file.

---

For more details, see `README.md` and the referenced template repo.
