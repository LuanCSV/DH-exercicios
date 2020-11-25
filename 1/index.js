window.onload = () => {
    var numero = prompt("Digite um numero");

    var spanResult = document.getElementById('numeroInformado1');

    function execute() {
        while (!numero.match(/^[0-9]*$/)) {
            numero = prompt("Digite um numero")
        }
        spanResult.value = numero;
    }

    execute();
}
