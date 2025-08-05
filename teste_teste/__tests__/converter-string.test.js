import { converterString } from "../src/converter-string";

describe('Teste de Conversão de String para Número', () => {
    test('Converter um número entre aspas', () => {
        expect(converterString("67")).toBe(67);
    });

    test('Converter um objeto qualquer deve gerar um erro', () => {
        expect(converterString("Banana")).toBe("Erro: O valor recebido não é um número.")
    });

    test('Converter um array qualquer deve gerar um erro', () => {
        expect(converterString([])).toBe("Erro: O valor recebido não é um número.")
    });

    test('Conveter um valor nulo deve gerar um erro', () => {
        expect(converterString(null)).toBe("Erro: O valor recebido não é um número.")
    });

    test('Conveter um valor indefinido deve gerar um erro', () => {
        expect(converterString(undefined)).toBe("Erro: O valor recebido não é um número.")
    });
})