
const botaoConverter2 = document.getElementById('converterMtoCM');

const inputCM2 = document.getElementById('centimetrosEx2');
const inputMetros2 = document.getElementById('metrosEx2');

const converterMetrosToCM = () => {
    const valorMetros = inputMetros2.value;

    let result = valorMetros * 100;

    inputCM2.value = result;
}

botaoConverter2.addEventListener('click', converterMetrosToCM);
