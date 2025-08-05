export function verificarIdade(i) {
    const idade = Number(i)
    if (isNaN(idade) || i == null || Array.isArray(i)) {
        return "Erro: O valor recebido não é um número."
    }else if (idade < 18){
        return "Menor de idade"
    }return "Idade OK"
}