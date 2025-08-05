import { executarOperacao } from "../src/operacoes";

describe('Operação - Somar', () => {
    test('espero que a soma de dois numeros esteja correta', () => {
        expect(executarOperacao(1, 2, "soma")).toBe(3);
    });

    test('espero que a soma de dois numeros inteiros esteja correta', () => {
        expect(executarOperacao(1.5, 2.5, "soma")).toBe(4);
    });

    test('espero que a soma de dois numeros negativos esteja correta', () => {
        expect(executarOperacao(-2, -3, "soma")).toBe(-5);
    });

    test('espero que ao tentar somar letras retorne uma mensagem de erro', () => {
        expect(executarOperacao("a", "b", "soma")).toBe("Erro");
    });

    test('espero que ao tentar somar dois objetos retorne uma mensagem de erro', () => {
        expect(executarOperacao({}, {}, "soma")).toBe("Erro");
    });
});

describe('Operação - Multiplicação', () => {
    test('espero que a multiplicação de dois numeros esteja correta', () => {
        expect(executarOperacao(2, 2, "multiplicacao")).toBe(4);
    });

    test('espero que a multiplicação de dois numeros inteiros esteja correta', () => {
        expect(executarOperacao(1.5, 2.5, "multiplicacao")).toBe(3.75);
    });

    test('espero que a multiplicação de dois numeros negativos esteja correta', () => {
        expect(executarOperacao(-2, -3, "multiplicacao")).toBe(6);
    });

    test('espero que ao tentar multiplicar letras retorne uma mensagem de erro', () => {
        expect(executarOperacao("a", "b", "multiplicacao")).toBe("Erro");
    });

    test('espero que ao tentar multiplicar dois objetos retorne uma mensagem de erro', () => {
        expect(executarOperacao({}, {}, "multiplicacao")).toBe("Erro");
    });
});

describe('Operação - Divisão', () => {
    test('espero que a divisão de dois numeros esteja correta', () => {
        expect(executarOperacao(2, 2, "divisao")).toBe(1);
    });

    test('espero que a divisão de dois numeros inteiros esteja correta', () => {
        expect(executarOperacao(1.5, 2.5, "divisao")).toBe(0.6);
    });

    test('espero que a divisão de dois numeros negativos esteja correta', () => {
        expect(executarOperacao(-2, -3, "divisao")).toBe(0.6666666666666666);
    });

    test('espero que a divisão de um numero por zero esteja correta', () => {
        expect(executarOperacao(2, [], "divisao")).toBe("Erro");
    });

    test('espero que ao tentar dividir letras retorne uma mensagem de erro', () => {
        expect(executarOperacao("a", "b", "divisao")).toBe("Erro");
    });

    test('espero que ao tentar dividir dois objetos retorne uma mensagem de erro', () => {
        expect(executarOperacao({}, {}, "divisao")).toBe("Erro");
    });
});

describe('Operação - Subtração', () => {
    test('espero que a subtração de dois numeros esteja correta', () => {
        expect(executarOperacao(2, 2, "subtracao")).toBe(0);
    });

    test('espero que a subtração de dois numeros inteiros esteja correta', () => {
        expect(executarOperacao(1.5, 2.5, "subtracao")).toBe(-1);
    });

    test('espero que a subtração de dois numeros negativos esteja correta', () => {
        expect(executarOperacao(-2, -3, "subtracao")).toBe(1);
    });

    test('espero que ao tentar subtrair letras retorne uma mensagem de erro', () => {
        expect(executarOperacao("a", "b", "subtracao")).toBe("Erro");
    });

    test('espero que ao tentar subtrair dois objetos retorne uma mensagem de erro', () => {
        expect(executarOperacao({}, {}, "subtracao")).toBe("Erro");
    });
});