
const botaoConverterCMtoPolegas3 = document.getElementById('converterCMtoPolegadas');

const inputCM3 = document.getElementById('centimetrosEx3');
const inputPolegadas3 = document.getElementById('polegadasEx3');

const convertCMtoInches = () => {
    const valorCM = inputCM3.value;

    let result = valorCM * 0.3937;

    inputPolegadas3.value = result;
}

botaoConverterCMtoPolegas3.addEventListener('click',convertCMtoInches);