#!/usr/bin/env node
import { execSync } from 'node:child_process';
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

        const projectName = name;
        const targetPath = path.join(process.cwd(), projectName);

        const templatePath = path.join(__dirname, '../templates', templateFolder);
        await fs.mkdir(targetPath, { recursive: true });
        await fs.cp(templatePath, targetPath, { recursive: true });
        console.log(`Successfully scaffolded the HTMl project - ${projectName}`)

    } catch (err) {
        console.error(`Error - ${err.message}`)
    }
}

async function reactApp(projectName, templateFolder) {
    try {
        const targetPath = path.join(process.cwd(), projectName);
        const templatePath = path.join(__dirname, '../templates', templateFolder);
        await fs.mkdir(targetPath, { recursive: true });
        await fs.cp(templatePath, targetPath, { recursive: true })

        const filesToUpdate = [
            path.join(targetPath, 'package.json'),
            path.join(targetPath, '/public/index.html')
        ];
        for (const filePath of filesToUpdate) {
            try {
                const content = await fs.readFile(filePath, 'utf-8');
                const updateContent = content.replaceAll('{{PROJECT_NAME}}', projectName);
                await fs.writeFile(filePath, updateContent);
            } catch (err) {
                console.error(err);
                console.error(`File path ${path.basename(filePath)} not found`);
            }
        }

        console.log(`Successfully scaffolded the React starter project - ${projectName}`)
        console.log('📦 Installing dependencies... This may take a minute.');
        try {
            execSync('npm install', {
                cwd: targetPath,
                stdio: 'inherit'
            });
            console.log('✅ Dependencies installed successfully!');
        } catch (err){
            console.error(err);
            console.log('⚠️ Could not install dependencies automatically.');
            console.log('Please run "npm install" manually inside your project folder.');
        }

    } catch (err) {
        console.error(`Error - ${err.message}`);
    }
}

main();