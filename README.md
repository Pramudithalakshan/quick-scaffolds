# quick-scaffolds-cli

A lightweight, interactive CLI tool for rapidly scaffolding new web projects with pre-configured starter templates.

## Overview

**quick-scaffolds-cli** is an npm package that provides an interactive command-line interface to generate new projects from customizable templates. Get started with a fully structured project in seconds with an intuitive selection menu.

**v1.1.0** - Now with improved interactive selection and project type options!

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
? What do you want to build? (Use arrow keys)
❯ Static HTML/CSS/JS
```

You'll be guided through:

1. **Project Name**: Enter your desired project name (default: `my-new-project`)
2. **Project Type**: Use arrow keys to select a template type:
   - **Static HTML/CSS/JS** - A simple, lightweight static site starter with HTML, CSS, and JavaScript

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

- 🚀 **Interactive CLI** - Modern, intuitive prompts powered by [@inquirer/prompts](https://github.com/SBoudrias/Inquirer.js)
- ⬆️⬇️ **Arrow Key Navigation** - Easy project type selection with arrow keys
- 📁 **Template-Based** - Pre-built, production-ready project templates
- ⚡ **Instant Setup** - Scaffold complete projects in seconds
- 📦 **Lightweight** - Minimal dependencies and fast installation
- 🧩 **Extensible** - Easy to add custom project templates

## Available Templates

- **Static HTML/CSS/JS** - Simple static website starter with basic HTML, CSS, and JavaScript boilerplate

## Project Structure

```
quick-scaffolds-cli/
├── bin/
│   └── cli.js              # CLI entry point
├── templates/              # Starter templates
│   └── html-template/      # Static HTML/CSS/JS template
│       ├── index.html
│       ├── css/
│       │   └── style.css
│       └── js/
│           └── app.js
├── package.json
└── README.md
```

## Dependencies

- **@inquirer/prompts** (^8.3.2) - Modern, interactive prompt library
- **inquirer** (^13.3.2) - Command-line interface utilities

## Version History

- **v1.1.0** - Improved interactive selection with arrow key navigation, organized template structure
- **v1.0.0** - Initial release with basic scaffolding functionality

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues to suggest improvements.
