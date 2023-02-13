/* 39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o 
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. 
Faça a troca sem utilizar uma variável auxiliar. */

function swapVectors(vectorA, vectorB) {
    for (let i = 0; i < vectorA.length; i++) {
        [vectorA[i], vectorB[i]] = [vectorB[i], vectorA[i]]
    }
    return [vectorA, vectorB]
  }
  
console.log(swapVectors([1, 2, 3], [4, 5, 6]))
  
  