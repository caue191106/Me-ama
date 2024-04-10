let moveButton = document.getElementById('sim');
let correctButton = document.getElementById('nao');
let main = document.getElementById('main');
let resposta = document.getElementById('resposta');

moveButton.addEventListener("mouseover", () => {
    let vertical = Math.floor(Math.random() * 400);
    let horizontal = Math.floor(Math.random() * 300);

    moveButton.style.position = "absolute";
    moveButton.style.left = vertical + "px";
    moveButton.style.top = horizontal + "px";
})

correctButton.addEventListener("click", () => {
    resposta.style.display = "block"
    main.style.display = "none";
})