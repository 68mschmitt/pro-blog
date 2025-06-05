# Deep Dives Blog – Vite + React Starter

A modern, visually distinct, and scalable personal blogging web application.  
Designed for clarity, advanced UI features, and easy extension.

## Features

- **Card-based, responsive layout** for blog articles.
- **Animated modal** to display article content.
- **Theme chooser** with multiple unique themes (light, dark, high contrast), using advanced React Context and custom hooks.
- **Accessibility**: Semantic HTML, keyboard navigation, focus management.
- **Easy code structure**: Add articles in `/src/data/articles.js`, themes via CSS variables.
- **No backend/database**—all content is static and easily editable.
- **Built with**: [Vite](https://vitejs.dev/), vanilla React (no TypeScript or big CSS frameworks).

---

## Getting Started

1. **Clone the repository:**
    ```sh
    git clone <your-repo-url> deep-dives-blog
    cd deep-dives-blog
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the development server:**
    ```sh
    npm run dev
    ```

4. **View your blog:**  
    Open [http://localhost:5173](http://localhost:5173)

---

## Customizing Articles

- Edit `/src/data/articles.js`
- Each article is an object:
    ```js
    {
      id: 3,
      title: "My New Article",
      date: "2025-06-10",
      summary: "A short summary here.",
      content: (
        <>
          <p>My article content goes here...</p>
        </>
      ),
    }
    ```

## Adding/Editing Themes

- Theme variables are defined in `/src/styles/variables.css`.
- To add a new theme, add a `[data-theme="yourtheme"]` selector with color variables.

## Accessibility

- All interactive controls are keyboard and screen reader friendly.
- Color contrast tested in all themes.

## License

MIT – yours to hack, remix, and extend!
