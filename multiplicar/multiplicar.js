//requiereds 3 TIPOS
//Otro Express Se debe instlar no NATIVOS DE NODE
//Los que nosostros generamos inician ('./fs')

//Propios de node
const fs = require('fs');

let crearArchivo = ( base ) => {
    
    return new Promise((resolve, reject) => {
      
        if (!Number(base)) {
            reject (`El valor introducido ${ base }`)
            return
        }
        let data = '';
        for (let i = 1; i<= 10; i++) {
            data += ` ${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) 
                reject(err)
            else
                resolve(`tabla-${ base }.txt`);
        });
    }
}
