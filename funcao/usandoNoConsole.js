/*
function f1() {return this === window}
document.getElementsByTagName('body')[0].onclick = f1

const f3 () => console.log(this === window)

usando função arrow, fica linkado ao contexto léxico no qual foi criado
*/