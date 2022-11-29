let multiplicaPorSiMismo= new Promise(
    (resolve, reject) => {
    resolve(`Inicia ejecución: el Valor es = ${valor}`)
    setTimeout(
    function() { ejecuta(valor, valor * valor); 
    ejecuta(2,2*2)
    }, 1000)
});
multiplicaPorSiMismo.then(
    (resultado)=>{ console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)}, 
);
   
  
        





    //     2, function(valor, resultado) 
    // {console.log(`Finaliza con el valor = ${valor} y el resultado = ${resultado}`)
    // })
    // console.log('Procesando')