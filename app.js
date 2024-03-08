function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = NumeroAleatorio(de, ate);
        sorteados.push(numero);
    }

    alert(sorteados);
}

function NumeroAleatorio(menor, maior) {
    return Math.floor(Math.random() * (maior - menor + 1)) + menor;
} 