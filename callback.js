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

/*function sumar(numero1,numero2,callback){

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

})*/

// ___________________________________________________________________
/* 1. Reciba nombre, edad, password
   2. Construir un objeto con dicha información
   3. Función alterna, verifique si el usuario
        -Es mayor o menor de edad
        -Imprima después de 3 segundos
        -Si lo deja acceder o no a la página webcam
*/


function recibirUsuario(nombre,edad,password,callback){

    setTimeout(function(){
    let usuario = {name: nombre, year: edad, pass: password}
        callback(usuario)

    },3000)
}

recibirUsuario("Karen",20,"jhonpapi",function(usuario){

    if (usuario.year>=18){
        console.log(`Bienvenid@ ${usuario.name}, puedes entrar a ver a valentina en bola.`)
    }
    else{
        console.log(`Lo sentimos, no eres bienvenid@ ${usuario.name}, y no puedes acceder a nuestro contenido.`)
    }


})


//_________________________________________________________
/* 1. Quiero recibir 5 números
   2. Almacenar 5 números en un arreglo POO
   3. Llamar 2° función encargada
      -Recorrer arreglo y entregarme la sma de los números del arreglo */
      
function almacenar(n1,n2,n3,n4,n5, callback){
    let numeros=Array(n1,n2,n3,n4,n5)
    callback()
}
   
almacenar(1,1,1,1,1,function(numero){

    let contador=0
    numeros.forEach(function(numero){
        contador=contador+numero
    })
    console.log(`La sumatoria es: ${contador}`)
})
