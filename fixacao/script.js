const paragrafo = document.getElementById('paragrafo')

const inputTexto = document.getElementById('texto')

console.log(inputTexto.value)
console.log(paragrafo.innerHTML)

const imprimirTexto = () => {
    paragrafo.innerHTML = inputTexto.value
 }

const imprimirValor = () => {
   console.log(inputTexto.value)
}

