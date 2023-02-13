// 12)​ Faça um algoritmo que calcule o fatorial de um número. 

const fatorial = function(n) {
    let fatorial = 1
    for (let i = 1; i <= n; i++) {
        fatorial *= i
    }
    return fatorial
}

console.log(fatorial(5))