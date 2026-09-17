const elementos = document.querySelectorAll(".texto");

// percorrendo a lista e imprimindo cada um dos elementos
elementos.forEach(elemento => console.log(elemento));

// percorrendo a lista e pegando o texto do elemento (innerText)
elementos.forEach(elemento => console.log(elemento.innerText));

// alterando texto
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";
 // elemento.textContent = "Alterado"; //vem com formatação
})

// trocando as tags - innerHTML
elementos.forEach(elemento => {
    elemento.innerHTML = "<h2>item</h2>"
})

// trocar a cor do elementos
elementos.forEach(elemento => {
    elemento.style.color = "#0000FF"
})

// EVENTOS COM JS
// o qu são eventos? São ações do usuario

// evento click
// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//     alert("Você clicou");
// })

// // evento de digitação (input / keyup)
// const campo = document.getElementById("campo");
// const resultado = document.getElementById("resultado");

// INPUT
// evento input -> dispara sempre que digita, em tempo real
// campo.addEventListener("input", () =>{
//     // value -> o que está sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })

// KEYUP 
// só dispara quando solta a tecla
// campo.addEventListener("keyup", () =>{
//     // value -> o que está sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })

// // EVENTO DE MOUSE
// const elemento = document.getElementById("troca-cor");

// // mousover -> quando passar o mouse pelo elemento
// elemento.addEventListener("mouseover", () => {
//     elemento.style.backgroundColor = "#ffd8ebff";
// })

// // mouseout -> quando o mouse sai do elemento
// elemento.addEventListener("mouseout", () => {
//     // elemento.style.backgroundColor = "#b3e9ffff";
//     elemento.style.backgroundColor = "";
// })


// mousemove - pega a posição do mouse
// document.addEventListener("mousemove", (evento) => {
//     console.log(`Posição X: ${evento.clientX}, Posição Y: ${evento.clientY}`);
// })

//EVENTO DE FORMULÁRIO (submit)
const form = document.querySelector("form"); //pegando direto pela tag form

//o corpotamento padrão da página é recarregar a página ao enviar o submit
form.addEventListener("submit", (e) =>{

    // impede o comportamento padrão do formulário
    e.preventDefault();

    const nome = document.getElementById("nome").value;

    console.log(`Nome: ${nome}`);
})