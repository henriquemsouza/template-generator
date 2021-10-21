#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import * as shell from 'shelljs';
import * as inquirer from 'inquirer';
import chalk from 'chalk';

import * as template from './utils/template';

import { Questions } from './interfaces/questions-interfaces';
import { CliOptions } from './interfaces/options-interfaces';

const CHOICES = fs.readdirSync(path.join(__dirname, 'templates'));
const QUESTIONS: Questions[] = [
{
    name: 'template',
    type: 'list',
    message: 'What template would you like to use?',
    choices: CHOICES
},
{
    name: 'name',
    type: 'input',
    message: 'Please input a new project name:'
}];


const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then(answers => {
    const projectChoice = answers['template'];
    const projectName = answers['name'];
    
    const templatePath = path.join(__dirname, 'templates', projectChoice);
   
    const targetPath = path.join(CURR_DIR, projectName);
    
    const options: CliOptions = {
        projectName,
        templateName: projectChoice,
        templatePath,
        targetPath
    }

    if (!createProject(targetPath)) {
        return;
    }

    createDirectoryContents(templatePath, projectName);

    postProcess(options);
});

function createProject(projectPath: string) {
    if (fs.existsSync(projectPath)) {
        console.log(chalk.red(`❌ Folder ${projectPath} exists. Delete or use another name ❌`));
        return false;
    }
    fs.mkdirSync(projectPath);
    
    return true;
}

const SKIP_FILES = ['node_modules', '.template.json'];

function createDirectoryContents(templatePath: string, projectName: string) {
   
    const filesToCreate = fs.readdirSync(templatePath);
   
    filesToCreate.forEach(file => {
        const origFilePath = path.join(templatePath, file);
        
        
        const stats = fs.statSync(origFilePath);
    
     
        if (SKIP_FILES.indexOf(file) > -1) return;
        
        if (stats.isFile()) {
            let contents = fs.readFileSync(origFilePath, 'utf8');
            contents = template.render(contents, { projectName });
         
            const writePath = path.join(CURR_DIR, projectName, file);
            fs.writeFileSync(writePath, contents, 'utf8');
        } else if (stats.isDirectory()) {
          
            fs.mkdirSync(path.join(CURR_DIR, projectName, file));
           
            createDirectoryContents(path.join(templatePath, file), path.join(projectName, file));
        }
    });
}

function postProcess(options: CliOptions) {
    const isNode = fs.existsSync(path.join(options.templatePath, 'package.json'));
    if (isNode) {
        shell.cd(options.targetPath);
        const result = shell.exec('npm install');
        if (result.code !== 0) {
            return false;
        }
    }
    console.log("🎉 🚀 Successfully created 🚀 🎉")
    return true;
}