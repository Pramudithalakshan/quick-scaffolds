# quick-scaffolds-cli

A lightweight, interactive CLI tool for rapidly scaffolding new web projects with pre-configured starter templates.

## Overview

**quick-scaffolds-cli** is an npm package that provides an interactive command-line interface to generate new projects from customizable templates. Get started with a fully structured project in seconds without manually creating directories or boilerplate files.

## Quick Start

### Global Installation

Install globally to use the `ct-pro` command anywhere:

```bash
npm install -g quick-scaffolds-cli
```

Then create a new project:

```bash
ct-pro
```

### Using npx (No Installation Required)

```bash
npx quick-scaffolds-cli
```

## Usage

### Creating a New Project

Run the command and follow the interactive prompts:

```bash
ct-pro
? What is your project name? my-awesome-app
? What do you want to build? Static HTML/CSS/JS
Successfully scaffolded the project
```

You'll be guided through:

1. **Project Name**: Enter your desired project name (default: `my-new-project`)
2. **Project Type**: Choose a template type (`Static HTML/CSS/JS`)

### Generated Project Structure

The scaffolded project will include:

```
my-awesome-app/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

## Features

- 🚀 **Interactive CLI** - User-friendly prompts powered by [inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- 📁 **Template-Based** - Pre-built, production-ready project templates
- ⚡ **Instant Setup** - Scaffold complete projects in seconds
- 📦 **Lightweight** - Minimal dependencies and fast installation
- 🧩 **Extensible** - Easy to add custom project templates

## Project Structure

```
quick-scaffolds/
├── bin/
│   └── cli.js              # CLI entry point
├── templates/              # Starter templates
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── package.json
└── README.md
```

## Dependencies

- **inquirer** (^13.3.2) - Interactive command-line prompt library

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements.
