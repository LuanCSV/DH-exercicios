


const botaoConverter7 = document.getElementById('converterCtoF');

const inputF7 = document.getElementById('FarenheitEx7');
const inputC7 = document.getElementById('CelsiusEx7');

const converterCtoF = () => {
    const valorCelsius = inputC7.value;

    let result = valorCelsius * 1.8 + 32;

    inputF7.value = result;
}

botaoConverter7.addEventListener('click', converterCtoF);



