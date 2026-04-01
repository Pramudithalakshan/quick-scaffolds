#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import inquirer from 'inquirer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name?',
            default: 'my-new-project'
        },
        {
            type: 'list',
            name: 'projectType',
            message: 'What do you want to build?',
            default: 'Static HTML/CSS/JS Page',
            choices: ['Static HTML/CSS/JS'
            ],
        },
    ]);

    const projectName = answers.projectName;
    const targetPath = path.join(process.cwd(), projectName);
    const templatePath = path.join(__dirname, '../templates');

    try {
        await fs.mkdir(targetPath, { recursive: true });
        await fs.cp(templatePath, targetPath, { recursive: true });
        console.log('Successfully scaffolded the project')
    } catch (err) {
        console.error('Error - ${err.message}')
    }
}

main();