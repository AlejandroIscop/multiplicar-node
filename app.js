
const argv = require('yargs')
        .command('listar', 'Imprime en consola la tabla de multiplicar', {
                base: {
                        demand: true,
                        alias : 'b'
                },
                limite: {
                        alias : 'l',
                        default:10
                }
        })
        .help()
        .argv;


//console.log( process )
//console.log(process.argv)

let argv2 = process.argv;
console.log(argv.base)
console.log('Limite', argv.base) 
//console.log(argv2)
//**** CLG

/*

let parametro = argv[2];
let base  = parametro.split('=')[1]
//console.log(base);

crearArchivo(base)
.then ( archivo => console.log(`Archivo Creado ${archivo }`))
.catch(e => console.log(e));
*/

