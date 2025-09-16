
function push(pilha, n) {
    return pilha.push(n)
}

function pop(pilha) {
    return pilha.pop(n)
}

function peek(pilha) {
    for (let i = 0; i <= pilha.length; i++)
        if (pilha.length == i){
            return pilha.slice (i - 1)
        }
    }
    
function puxavida() {
    let pilha = []
    pilha.push(10)
    pilha.push(20)
    console.log(pop(pilha))
    console.log(peek(pilha))
}
console.log(puxavida)