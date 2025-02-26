const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultadoElemento = document.getElementById('resultado');

function calculo() {
    const alturaValor = parseFloat(altura.value);
    const pesoValor = parseFloat(peso.value);

    const resultado = pesoValor / (alturaValor * alturaValor);
    resultadoElemento.innerHTML = `Seu IMC é ${resultado.toFixed(2)}`
}