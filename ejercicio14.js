/*    Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:   */

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
{
  function repeatCounter(array) {
    const count = {}
    for (let i = 0; i < array.length; i++) {
      if (count[array[i]] >= 1) {
        count[array[i]]++
      } else {
        count[array[i]] = 1
      }
    }

    console.log(count)
  }

  repeatCounter(counterWords)
}
