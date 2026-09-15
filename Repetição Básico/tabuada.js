let number = document.getElementById("numero");
let conta = document.getElementById("calcular");
let result = document.getElementById("resultado");

conta.addEventListener("click", function() {

    let numero = Number(number.value);

    result.innerHTML = "";

    for (let i = 1; i <= 10; i++) 
    {
       let resultado = numero * i;
       result.innerHTML += numero + " x " + i + " = " + resultado + "<br>";
       console.log(resultado);
    }
});