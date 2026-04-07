# quick-scaffolds-cli

A lightweight, interactive CLI for scaffolding starter web projects in seconds.

## Overview

quick-scaffolds-cli is a command-line tool that generates ready-to-use web project starters with zero configuration. Answer a few simple prompts and get a fully structured project—choose between static HTML/CSS/JS or a modern React + Vite setup.

**Current release:** v1.3.0 | **License:** MIT

## Quick Start

### Global install

Install once and use the command anywhere:

```bash
npm install -g quick-scaffolds-cli
ct-pro
```

### Use with npx

Run without installing globally:

```bash
npx quick-scaffolds-cli
```

## Usage

Run the CLI and answer the prompts:

```bash
ct-pro
? What is your project name will be ? (Type "." to use the current directory) my-awesome-app
? What do you want to build?
  ❯ Static HTML/CSS/JS
    React starter
```

### Prompt Details

**1. Project Name**
- Enter a new folder name to create a new directory (default: `my-new-project`)
- Enter `.` to scaffold directly in the current directory

**2. Project Type**
- **Static HTML/CSS/JS:** A simple, lightweight static site starter—perfect for learning or quick prototypes
- **React starter:** A modern React app with Vite, ESM modules, and optional React Router setup for navigation

## Templates

### 1. Static HTML/CSS/JS
A simple, minimal starter template for static web projects.

**Generated structure:**

```text
my-awesome-app/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

**Next steps:**
```bash
cd my-awesome-app
# Open index.html in your browser
```

---

### 2. React Starter (Vite + Modern ESM)

A modern React starter with Vite, automatic dependency installation, and optional React Router setup.

**Generated structure:**

```text
my-awesome-app/
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── index.css
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

**Interactive setup:**
- 📦 Automatically installs npm dependencies after scaffolding
- 🛣️ Prompts to install **React Router** for navigation (optional)
✨ **Interactive CLI** — User-friendly prompts powered by [@inquirer/prompts](https://www.npmjs.com/package/@inquirer/prompts)

⚡ **Zero Configuration** — Choose a template and get a working project instantly

🎨 **Two Templates:**
- Static HTML/CSS/JS for simple projects
- React + Vite with modern ESM module support

🛣️ **React Router Setup** — Optional routing configuration for multi-page React apps

📦 **Automatic Dependencies** — npm install runs automatically for React projects

🎯 **Current Directory Support** — Use `.` to scaffold in your existing folder

🚀 **Simple Command Interface** — Just run `ct-pro` from anywhere
```

The generated app includes a counter button in `App.jsx` so you can immediately see React state updates in action
The generated app includes a counter button and last-click timestamp in `App.jsx` so you can quickly confirm rendering and state updates.

## Features

### React Project is Blank

Ensure you're running the development server:

```bash
cd my-awesome-app
npm run dev
```

Then open http://localhost:5173 in your browser.

### React Entry Point

The React app boots in this order:
1. `index.html` loads your app into the root div
2. `src/main.jsx` renders the React app
3. `App.jsx` is the root React component

### Dependencies Installation Failed
The quick-scaffolds-cli repository is organized as follows:

```text
quick-scaffolds-cli/
├── LICENSE
├── README.md
├── package.json
├── bin/
│   └── cli.js                    # Main CLI entry point
├── templates/
│   ├── html-template/            # Static web starter
│   │   ├── index.html
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── app.js
│   └── react-template/           # React + Vite starter
│       ├── .gitignore
│       ├── index.html
│       ├── package.json
│       ├── vite.config.js
│       ├── public/
│       │   └── index.css
│       └── src/
│           ├── App.css
│           ├── App.jsx
│           ├── index.css
│           ├── main.jsx
│           └── pages/            # (created if React Router is selected)
│               └── Home.jsx

```text
quick-scaffolds-cli/
├── .gitignore
├── .npmignore
├── bin/
│   └── cli.js
├── package-lock.json
├── package.json
├── README.md
├── templates/
│   ├── html-template/
│   │   ├── index.html
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── app.js
│   └── react-template/
│       ├── .gitignore
│       ├── index.html
│       ├── package.json
│       ├── public/
│       │   └── index.css
│       └── src/
│           ├── App.css
│           ├── App.jsx
│           ├── index.css
│           └── main.jsx
└── LICENSE
```

## Dependencies

- @inquirer/prompts ^8.3.2

## License

MIT

## Contributing

Issues and pull requests are welcome on GitHub.
