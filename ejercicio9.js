/*    Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:   */

const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let sum = 0

  for (let total of param) {
    sum += total
  }
  console.log(sum)

  return sum
}

sumAll(numbers)
