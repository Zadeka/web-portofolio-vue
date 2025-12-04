# 🌟 Portfolio Website - Oxa Defrizal Khasay

A modern, responsive portfolio website built with Vue 3, TypeScript, and Tailwind CSS. Features a clean design with emerald/green color scheme and smooth animations.

![Vue.js](https://img.shields.io/badge/Vue.js-3.5-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite&logoColor=white)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean and aesthetic design with emerald/green theme
- 🌗 **Dark Mode** - Seamless light/dark theme switching
- 📱 **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎭 **Smooth Animations** - Beautiful transitions using @vueuse/motion
- 🧩 **Component Library** - Powered by Shadcn Vue components
- 🎯 **Type-Safe** - Full TypeScript support for better DX
- ♿ **Accessible** - WCAG compliant with semantic HTML

## 🛠️ Tech Stack

### Core

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Next generation frontend tooling

### Styling

- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Shadcn Vue** - Re-usable components built with Radix Vue
- **Lucide Icons** - Beautiful & consistent icon set

### Animations & Utils

- **@vueuse/motion** - Vue composables for animations
- **@vueuse/core** - Collection of essential Vue composition utilities
- **class-variance-authority** - CSS utility for component variants
- **clsx & tailwind-merge** - Utility for constructing className strings

## 📁 Project Structure

```
web-portofolio-vue/
├── src/
│   ├── assets/          # Static assets (images, SVG patterns)
│   ├── components/
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   ├── sections/    # Page sections (Hero, About, Projects, Experience)
│   │   └── ui/          # Shadcn UI components
│   ├── data/            # Portfolio data (projects, experience, etc.)
│   ├── lib/             # Utility functions
│   ├── App.vue          # Root component
│   ├── main.ts          # Application entry point
│   └── style.css        # Global styles & Tailwind config
├── public/              # Public static files
└── index.html           # HTML entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/yourusername/web-portofolio-vue.git
   cd web-portofolio-vue
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Run development server**

   ```sh
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```sh
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```sh
npm run preview
```

## 🎨 Customization

### Color Scheme

The portfolio uses an emerald/green color scheme defined in `src/style.css`:

```css
:root {
  --primary: 142.1 76.2% 36.3%; /* Emerald */
  --primary-foreground: 355.7 100% 97.3%;
  /* ... other color variables */
}
```

To change the color scheme, modify these HSL values.

### Portfolio Data

Edit your personal information, projects, and experience in:

- `src/data/portofolio.data.ts`

### Components

All UI components are located in:

- `src/components/ui/` - Shadcn Vue components
- `src/components/sections/` - Page sections
- `src/components/layout/` - Layout components

## 📝 Available Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm run preview`    | Preview production build     |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint`       | Lint code with ESLint        |
| `npm run format`     | Format code with Prettier    |

## 🧪 Testing

```sh
npm run test:unit
```

Unit tests are powered by [Vitest](https://vitest.dev/).

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Recommended IDE Setup

- **[VS Code](https://code.visualstudio.com/)**
- **Extensions:**
  - [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
  - [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

### Browser Extensions

**Chromium-based browsers (Chrome, Edge, Brave):**

- [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Turn on Custom Object Formatter](http://bit.ly/object-formatters)

**Firefox:**

- [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
- [Turn on Custom Object Formatter](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Oxa Defrizal Khasay**

- LinkedIn: [oxadefrizalkhasay](https://www.linkedin.com/in/oxadefrizalkhasay/)
- GitHub: [@zadeka](https://github.com/zadeka)

## 🙏 Acknowledgments

- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn Vue](https://www.shadcn-vue.com/)
- [Radix Vue](https://www.radix-vue.com/)
- [Lucide Icons](https://lucide.dev/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

⭐ Don't forget to star this repo if you found it helpful!
