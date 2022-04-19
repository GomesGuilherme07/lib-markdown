import chalk from 'chalk';
import getFile from './index.js';
import validateURLs from './http-validation.js';

const path = process.argv;

async function processText(path){
    const result = await getFile(path[2]);

    if(path[3] === "validar")
    {
        console.log(chalk.yellow('Links validados'), await validateURLs(result));
    } else{
        console.log(result);
    }

    
}

processText(path);