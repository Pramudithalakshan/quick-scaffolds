# quick-scaffolds-cli

A lightweight interactive CLI for scaffolding starter web projects quickly.

## Overview

quick-scaffolds-cli generates a ready-to-use project from templates with a simple prompt flow.

Current release: v1.2.2

## Quick Start

### Global install

Install once and use the command anywhere:

```bash
npm install -g quick-scaffolds-cli
ct-pro my-awesome-app
```

### Use with npx

Run without installing globally:

```bash
npx quick-scaffolds-cli my-awesome-app
```

## Usage

Run the CLI with an initial project name, then choose whether to keep it or change it:

```bash
ct-pro my-awesome-app
? Your project name will be named "my-awesome-app". Do you want to keep it? (Y/n)
? What do you want to build?
  Static HTML/CSS/JS
  React starter
```

Prompt details:

1. Confirm project name:
  - Keep the provided name
  - Change it by entering a new project name (default: `my-new-project`)
2. Project type:
   - Static HTML/CSS/JS
   - React starter

If you choose not to keep the provided name, the CLI asks:

```bash
? What is your project name? my-updated-app
```

## Templates

### 1. Static HTML/CSS/JS

Creates a simple static site starter.

Generated structure:

```text
my-awesome-app/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

### 2. React starter (Vite)

Creates a React starter app with Vite and automatically runs npm install.

Generated structure:

```text
my-awesome-app/
├── .gitignore
├── index.css
├── index.html
├── package.json
└── src/
    ├── App.css
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

After scaffolding a React project:

```bash
cd my-awesome-app
npm run dev
```

## Features

- Interactive CLI powered by @inquirer/prompts
- Fast project scaffolding from local templates
- Two starter options: static web or React + Vite
- Automatic dependency installation for React template
- Simple command interface via ct-pro

## Project Structure

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
│       ├── index.css
│       ├── index.html
│       ├── package.json
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
