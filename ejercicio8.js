/*    Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:    */

const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]
function findLongestWord(param) {
  let longestWord = ''

  for (let longword of param) {
    if (longword.length > longestWord.length) {
      longestWord = longword
    }
  }

  console.log(longestWord)
  return longestWord
}

findLongestWord(avengers)
