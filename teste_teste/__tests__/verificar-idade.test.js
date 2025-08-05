import { verificarIdade } from "../src/verificar-idade";

describe('Teste de Verificação de Idade', () => {
    test('Verificar uma idade acima', () => {
        expect(verificarIdade("19")).toBe("Idade OK");
    });

    test('Verificar uma idade abaixo', () => {
        expect(verificarIdade("17")).toBe("Menor de idade");
    });

    test('Vericar um objeto deve gerar um erro', () => {
        expect(verificarIdade("Banana")).toBe("Erro: O valor recebido não é um número.")
    });

    test('Verificar um array qualquer deve gerar um erro', () => {
        expect(verificarIdade([])).toBe("Erro: O valor recebido não é um número.")
    });

    test('Verificar um valor nulo deve gerar um erro', () => {
        expect(verificarIdade(null)).toBe("Erro: O valor recebido não é um número.")
    });

    test('Verificar um valor indefinido deve gerar um erro', () => {
        expect(verificarIdade(undefined)).toBe("Erro: O valor recebido não é um número.")
    });
})