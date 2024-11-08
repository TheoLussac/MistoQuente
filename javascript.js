let calorias = 20;
let tempo;
function aumentarCalorias() {
    calorias += 5;
    atualizarCalorias();  
    document.getElementById("calorias").textContent = calorias;
    
    
    const botao = document.getElementById("botaoCalorias");
    const container = document.querySelector(".container");
    
    const maxX = window.innerWidth - botao.offsetWidth;
    const maxY = window.innerHeight - botao.offsetHeight;

 
    const posX = Math.floor(Math.random() * maxX);
    const posY = Math.floor(Math.random() * maxY);
    
    botao.style.position = "absolute";
    botao.style.left = `${posX}px`;
    botao.style.top = `${posY}px`;
}
function atualizarCalorias(){
    document.getElementById("calorias").textContent = calorias;
    if (calorias <= 0) {
        clearInterval(tempo);
    calorias = 0;
    alert("Você perdeu");
    }
}
function diminuirCalorias(){
    calorias -= 1;
    atualizarCalorias();
}
window.onload = function(){
    tempo = setInterval(diminuirCalorias, 400);
    }
