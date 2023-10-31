const cadena = require ('./cadena');

test ('adds hola==Adios to equal false', () =>{
    expect(cadena ('hola == Adios')).toBe(false);
})