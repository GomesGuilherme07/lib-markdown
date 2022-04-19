import fetch from 'node-fetch';

function handlerErrors(error){
    throw new Error(error.message);
}

async function checkStatus(arrayURLs){
    try{

        const arrayStatus = await Promise.all(arrayURLs
            .map(async url => {
                const res = await fetch(url)
                return res.status;
        }))

        return arrayStatus;

    } catch(error){
        handlerErrors(error);
    }
    
}

function generateLinks(arrayLinks){
   return arrayLinks
    .map(links => Object
        .values(links).join())  
}

export default async function validateURLs(arrayLinks){    
    const links = generateLinks(arrayLinks);
    const statusLinks = await checkStatus(links);

    const result = arrayLinks.map((objeto, indice) => ({
        ...objeto, 
        status: statusLinks[indice]
    }))

    return result;
}

