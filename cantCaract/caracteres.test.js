const contarElementos = require('./caracteres');

test ('adds elemento=hola mi papacho to equal 14', ()=>{
    expect(contarElementos('hola mi papacho')).toBe (15);
});