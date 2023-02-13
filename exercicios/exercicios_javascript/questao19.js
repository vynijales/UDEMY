/*  ​19) ​O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto  Preço 
100  Cachorro Quente  R$ 3,00 
200  Hambúrguer Simples  R$ 4,00 
300  Cheeseburguer  R$ 5,50 
400  Bauru  R$ 7,50 
500  Refrigerante  R$ 3,50 
600  Suco  R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente. */

const imprimindoValor = function (n) {
    console.log(`O valor total é: ${n}.`)
}

const comprandoLanche = function(id, quantidade) {
    switch (id) {
        case "100":
            imprimindoValor(3.0 * quantidade)
            break;
        case "200":
            imprimindoValor(4.0 * quantidade)
            break;
        case "300":
            imprimindoValor(5.5 * quantidade)
            break;
        case "400":
            imprimindoValor(7.5 * quantidade)
            break;
        case "500":
            imprimindoValor(3.5 * quantidade)
            break;
        case "600":
            imprimindoValor(4.0 * quantidade)
            break;
        default:
            console.log('Produto inexistente!')
    }
}

comprandoLanche("100", 5)
comprandoLanche("200", 5)
comprandoLanche("300", 5)
comprandoLanche("400", 5)
comprandoLanche("500", 5)
comprandoLanche("600", 5)
comprandoLanche("700", 5)