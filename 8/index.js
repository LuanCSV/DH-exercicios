
const inputGasosa8 = document.querySelector('#inputGasosa8');
const inputAlcool8 = document.querySelector('#inputAlcool8');

const botaoMelhorOpcao8 = document.querySelector('#calcularMelhor8');

let melhorOpcao = document.querySelector('#opcaoEx8');

const calcularMelhorOpcao = () => {
    
    let valorGasosa = inputGasosa8.value;
    let valorAlcool = inputAlcool8.value;
    
    if (valorAlcool > (valorGasosa* 0.7)) {
        melhorOpcao.style.color = 'crimson';
        melhorOpcao.textContent ='GASOLINA';
    }else{
        melhorOpcao.style.color = '#14b4dc';
        melhorOpcao.textContent ='ALCOOL';
    }
    // melhorOpcao.textContent = valorAlcool > (valorGasosa* 0.7) ?
    // 'GASOLINA' && melhorOpcao.style.color = 'green':
    // 'ALCOOL';
}

botaoMelhorOpcao8.addEventListener('click', calcularMelhorOpcao)
