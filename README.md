src/
apps/
CounterApp/
index.tsx
Counter.tsx
Counter.css
...

<div align="center">
  <img src="public/logo.png" alt="Simple App Collection" width="120" />
  <h1>🗂️ Simple App Collection</h1>
  <p><b>One repo, many simple React apps. Modular, scalable, and beautiful.</b></p>
  <p>
    <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
    <img src="https://img.shields.io/badge/Vite-fast-purple?logo=vite" />
    <img src="https://img.shields.io/badge/TailwindCSS-utility--first-38bdf8?logo=tailwindcss" />
    <img src="https://img.shields.io/badge/TypeScript-strong-blue?logo=typescript" />
  </p>
</div>

## ✨ Features

- ⚡ **Vite + React 18 + TypeScript**: Fast, modern, and type-safe.
- 🎨 **Tailwind CSS**: Rapidly build beautiful UIs.
- 🧩 **Component-Driven**: Reusable, shared UI components.
- 🗂️ **Multi-App Ready**: Add as many simple apps as you want.
- 🧠 **Custom Hooks & Utilities**: Share logic and helpers across apps.
- 📝 **Easy to Extend**: Add new apps in seconds.

---

## 📁 Project Structure

```text
src/
  apps/         # Each simple app in its own folder
  components/   # Shared UI components
  hooks/        # Custom React hooks
  utils/        # Utility/helper functions
  types/        # Shared TypeScript types
  shared/       # Barrel file for shared modules
  assets/       # Static assets (images, icons, ...)
  App.tsx       # Main app shell
  main.tsx      # Entry point
```

### Example: Add a New App

1. Create a folder in `src/apps/` (e.g., `CounterApp`).
2. Add your app files: `index.tsx`, components, styles, etc.
3. Export your app in `src/apps/index.ts` for easy import.
4. Import and use your app in `App.tsx`.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build
```

---

## 🛠️ Tech Stack

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 💡 Why This Structure?

- **Scalable**: Add new apps without clutter.
- **Reusable**: Share components, hooks, and utilities.
- **Maintainable**: Clear separation of concerns.
- **Beautiful**: Tailwind for rapid, modern UI.

---

## 🙌 Contributing

1. Fork this repo
2. Create a new branch
3. Add your app or feature
4. Open a pull request

---

<div align="center">
  <b>Made by Andre Pangestu</b>
</div>
