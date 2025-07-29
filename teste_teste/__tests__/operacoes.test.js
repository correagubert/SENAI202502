import { executarOperacao } from "../src/operacoes";

describe('executar operacao', () => {
    test('espero que a soma de dois numeros esteja correta', () => {
        expect(soma(1, 2)).toBe(3);
    });
})