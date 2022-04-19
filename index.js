//import chalk from 'chalk';
import * as fs from 'fs';

function extractLinks(text){
    const regex = /\[([^\]]*)\]\((http?s:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResults = [];
    let temp;

    while((temp = regex.exec(text)) !== null){
        arrayResults.push({ [temp[1]]: temp[2] })
    }

    return arrayResults.length === 0 ? 'No have links in file' : arrayResults;
}

function processError(error) {
    throw new Error(error.code, 'No have file in path');
}

export default async function getfile(filePath) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath, encoding);
        return extractLinks(text);
    } catch (error) {
        processError(error);
    } 
}



