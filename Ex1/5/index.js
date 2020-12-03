
const botaoConverter5 = document.getElementById('converterFtoC');

const inputF5 = document.getElementById('FarenheitEx5');
const inputC5 = document.getElementById('CelsiusEx5');

const converterFToC = () => {
    const valorFarenheit = inputF5.value;

    let result = 5 * (valorFarenheit - 32) / 9;

    inputC5.value = result;
}

botaoConverter5.addEventListener('click', converterFToC);
