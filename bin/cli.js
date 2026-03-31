#!/usr/bin/env node

const fs = requires('fs').promises;

async function makeFolder(){
    const folderName = process.argv[2];

    if(!folderName){
        console.error("Please provide a folder name!");
        process.exit(1);
    }

    try{
        await fs.mkdir(folderName);
        console.log('Created folder - ${folderName}')
    }catch (err){
        console.error('Error - ${err.message}')
    }
}

makeFolder();