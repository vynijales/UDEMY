console.log('01)', '1' == 1)
console.log('02)', '1' === 1) // estritamente igual
console.log('03,', '3' != 3)
console.log('03,', '3' !== 3) // estritamente diferente

console.log('04)', 3 < 2)
console.log('05)', 3 > 2)
console.log('04)', 3 <= 2)
console.log('04)', 3 >= 2)

const d1 = new Date(0) // 01 de jan de 1970
const d2 = new Date(0)

console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())