import getfile from "../index.js";

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('getFile::', () => {
    it('deve ser uma função', () =>{
        expect(typeof getfile).toBe('function');
    })
    it('deve retornar array com os resultados', async () => {
        const resut = await getfile('./test/files/text1.md');
        expect(resut).toEqual(arrayResult);
    })
    it('deve retornar mensagem "No have links in file"', async () => {
        const resut = await getfile('./test/files/text1_noLink.md');
        expect(resut).toBe('No have links in file');
    })
})

// test('deve ser uma função', () => {
//     expect(typeof getfile).toBe('function');
// });