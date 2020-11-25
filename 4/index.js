window.onload = () => {

    const inputRaioEx4 = document.getElementById('raioEx4');

    const botaoCalcularRaio = document.getElementById('calcularAreaEx4');
    let resultArea = document.querySelectorAll('#areaEx4');
    const circle = document.querySelector('.circle');

    const calcularArea = () => {
        let valorInput = inputRaioEx4.value;
        let calculoArea = 3.14 * (valorInput * valorInput);

        calculoArea > 0 ?
            circle.style.backgroundColor = '#63f186' :
            circle.style.backgroundColor = '#e93d3d';
        
        for (let i of resultArea) {
            i.innerText = calculoArea;
            // i.innerText = calculoArea.toString().substring(0,7);
        }
    }

    botaoCalcularRaio.addEventListener('click', calcularArea);

}