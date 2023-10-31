function contarElementos(elemento) {
    let contador = 0;
  
    for (let i = 0; i < elemento.length; i++) {
      contador++;
    }
  
    return contador;
} 
module.exports = contarElementos;