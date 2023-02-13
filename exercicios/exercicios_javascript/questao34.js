/* 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso 
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

const isIn = function (string1, string2) {
    for (let i of string1.toLowerCase()) {
        if (!string2.toLowerCase().includes(i)) {
            return false
        }
    }
    return true
}

const isInBoth = function (string1, string2) {
    if (isIn(string1, string2) && isIn(string2, string1)) return true
    return false
}
console.log(isInBoth('aBc', 'cba'))
console.log(isInBoth('abcd', 'cba'))