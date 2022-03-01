/*function funcionPrincipal(callback){

    setTimeout(function(){
    console.log("Soy la función principal con gatitos")
        callback()

    },3000)
}

funcionPrincipal(function(){
    console.log("soy la segunda funcion sin gatitos :c")
})
*/

function sumar(numero1,numero2,callback){

    setTimeout(function(){
        let suma = numero1 + numero2
        // Llamar al callback
        callback(numero1, numero2, suma)

    },5000)

}

// Llamado de la funcion princiap
sumar(5,5,function(numero1,numero2,suma){ // Cuerpo del callback

    //1. muestro la suma
    console.log(`La suma es: ${suma}`)

    //2. Calcula la resta
    let resta= numero1-numero2

    //3. muestro la resta
    console.log(`La resta es: ${resta}`)

})

