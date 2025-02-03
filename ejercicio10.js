//    Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(param) {
  let average = 0
  for (const result of param) {
    average += result
  }
  console.log(average)
  return average / param.lenght
}
average(numbers)
