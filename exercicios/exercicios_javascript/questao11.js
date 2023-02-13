/* 11) ​As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false. */

//const isBissexto = number => number % 4 == 0 // calculando da forma correta

const isBissexto = function (number) {
    //number % 400 == 0 ? return (`O número ${number} é bissexto!`) : number = number % 400
    resto = (number % 400)

    if (resto) {
        resto %= 100
        if (resto) {
            resto %= 4
            if (resto) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    } else {
        return true
    }

}



console.log(isBissexto(4))
console.log(isBissexto(100))
console.log(isBissexto(104))
console.log(isBissexto(200))
console.log(isBissexto(600))
console.log(isBissexto(400))