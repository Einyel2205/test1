const modulo = require('./module');

test ('adds 10 % 2 to equal 0', () =>{
    expect(modulo (10,2)).toBe(0);
});
