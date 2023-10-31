const sumaNumerosPares = require('./sumaPares');

test ('adds 1,2,3,4,5,6 to equal 12', ()=>{
    expect(sumaNumerosPares([1,2,3,4,5,6])).toBe (12);
});
