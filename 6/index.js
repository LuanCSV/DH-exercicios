

const mediasInputs = document.querySelectorAll('#mediaMateria');
const botaoCalcularMedia = document.querySelector('#calcularMedia');
const medialTotal = document.getElementById('MediaTotal');
console.log(mediasInputs)

const calcularMedia = () => {

    let mediasValores = []
    for (let i of mediasInputs) {
        console.log(i)
        mediasValores.push(+i.value);
    }

    // soma os valores do array com reduce e divide pelo length do array
    const calculoMedia = mediasValores
        .reduce((acumulator, atual) => {
            return acumulator + atual
        }) / mediasValores.length;

    medialTotal.value = calculoMedia;

}

botaoCalcularMedia.addEventListener('click', calcularMedia);



