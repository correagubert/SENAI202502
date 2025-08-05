export function verificarIdade(i) {
    const idade = Number(i)
    if (isNaN(idade) || i == null || Array.isArray(i) || idade < 0) {
        return "Erro: O valor recebido não é um número válido."
    }
    if (idade < 18)  return "Menor"
    if (idade >= 18) return "Maior"
}