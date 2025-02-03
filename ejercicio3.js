//  1.1 Multiplica 10 por 5 y muestra el resultado mediante console.

function multiply(numA, numB) {
  return numA * numB
}
let resultmult = multiply(10, 5)
console.log(resultmult)

//  1.2 Divide 10 por 2 y muestra el resultado en un console.

function divide(numA, numB) {
  return numA * numB
}
let resultdiv = divide(10, 2)
console.log(resultdiv)

//  1.3 Muestra mediante un console el resto de dividir 15 por 9.

function rest(numA, numB) {
  return numA % numB
}
let getrest = rest(15, 9)
console.log(getrest)

/*  1.4 Usa el correcto operador de asignación que resultará en o = 15, 
teniendo dos variables p = 10 y j = 5.*/
const p = 10
const j = 5
const findoperator = () => p + j
const o = findoperator()

console.log(o)

/*  1.5 Usa el correcto operador de asignación que resultará en i = 50,
teniendo dos variables c = 10 y m = 5.*/
const c = 10
const m = 5
const findoperator1 = () => c * m
const i = findoperator1()
console.log(i)
