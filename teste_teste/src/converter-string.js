export function converterString(str) {
    const numero = Number(str)
    if(isNaN(numero) || Array.isArray(str) || str == null){
        return "Erro: O valor recebido não é um número."
    } return numero
}

console.log(converterString(2))