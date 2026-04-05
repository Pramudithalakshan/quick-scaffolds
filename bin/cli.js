#!/usr/bin/env node
import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { input, select } from '@inquirer/prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    const name = await input(
        {
            name: 'projectName',
            message: 'What is your project name will be ? (Type "." to use the current directory)',
            type: 'input',
            default: 'my-new-project'
        }
    );
    const projectType = await select({
        message: 'What do you want to build?',
        type: "list",
        choices: [
            { name: 'Static HTML/CSS/JS', value: 'static' },
            { name: 'React starter', value: 'react' }
        ],
    });
    let templateFolder = '';
    if (projectType === 'static') {
        templateFolder = 'html-template';
    }

    if (projectType === 'react') {
        templateFolder = 'react-template';
        await reactApp(name, templateFolder);
        return;
    }
    try {
        const projectName = name;
        const targetPath = projectName === '.' ? process.cwd() : path.join(process.cwd(), projectName);

        const templatePath = path.join(__dirname, '../templates', templateFolder);
        if (projectName !== '.') {
            await fs.mkdir(targetPath, { recursive: true });
        }
        await fs.cp(templatePath, targetPath, { recursive: true });
        const displayName = projectName === '.' ? path.basename(process.cwd()) : projectName;
        console.log(`\nSuccessfully scaffolded the HTMl project - ${displayName}\n`)

    } catch (err) {
        console.error(`Error - ${err.message}`)
    }
}

async function reactApp(projectName, templateFolder) {
    try {
        const isCurrentDirectory = projectName === '.';
        const targetPath = isCurrentDirectory ? process.cwd() : path.join(process.cwd(), projectName);
        const displayName = isCurrentDirectory ? path.basename(process.cwd()) : projectName;

        const templatePath = path.join(__dirname, '../templates', templateFolder);
        if (!isCurrentDirectory) {
            await fs.mkdir(targetPath, { recursive: true });
        }
        await fs.cp(templatePath, targetPath, { recursive: true })

        const filesToUpdate = [
            path.join(targetPath, 'package.json'),
            path.join(targetPath, 'index.html')
        ];
        for (const filePath of filesToUpdate) {
            try {
                const content = await fs.readFile(filePath, 'utf-8');
                const updateContent = content.replaceAll('{{PROJECT_NAME}}', displayName);
                await fs.writeFile(filePath, updateContent);
            } catch (err) {await fs.mkdir(targetPath, { recursive: true });
                console.error(err);
                console.error(`File path ${path.basename(filePath)} not found`);
            }
        }

        console.log(`Successfully scaffolded the React starter project - ${displayName}\n`)
        console.log('📦 Installing dependencies... This may take a minute.\n');
        try {
            execSync('npm install', {
                cwd: targetPath,
                stdio: 'inherit'
            });
            console.log('✅ Dependencies installed successfully!\n');
        } catch (err) {
            console.error(err);
            console.log('⚠️ Could not install dependencies automatically.\n');
            console.log('Please run "npm install" manually inside your project folder.');
        }

    } catch (err) {
        console.error(`Error - ${err.message}`);
    }
}

main();