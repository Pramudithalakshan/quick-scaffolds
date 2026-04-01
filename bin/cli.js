#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { input, select } from '@inquirer/prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    try {
        const name = await input(
            {
                name: 'projectName',
                message: 'What is your project name?',
                type: 'input',
                default: 'my-new-project'
            }
        );
        const projectType = await select({
            message: 'What do you want to build?',
            type: "list",
            choices: [
                { name: 'Static HTML/CSS/JS', value: 'static' },

            ],
        });
        let templateFolder = '';
        if (projectType === 'static') {
            templateFolder = 'html-template';
        }

        const projectName = name;
        const targetPath = path.join(process.cwd(), projectName);

        const templatePath = path.join(__dirname, '../templates', templateFolder);
        await fs.mkdir(targetPath, { recursive: true });
        await fs.cp(templatePath, targetPath, { recursive: true });
        console.log(`Successfully scaffolded the project ${projectName}`)

    } catch (err) {
        console.error(`Error - ${err.message}`)
    }
}

main();