const names = []
const numbers = []
const form = document.getElementById('form-info');
const tableBody = document.getElementById('table-body');

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputName = document.getElementById('name');
    const inputNumber = document.getElementById('number');

    if (names.includes(inputName.value)) {
        alert(`Contato ${inputName.value} já existe`)
    } else if (numbers.includes(inputNumber.value)) {
        alert(`Número ${inputNumber.value} já existe`)
    } else {
        names.push(inputName.value);
        numbers.push(inputNumber.value);

        let linha = `<tr>`;
        linha += `<td> ${inputName.value} </td>`
        linha += `<td> ${inputNumber.value} </td>`
        linha += `</tr>`;
        linhas += linha ;   

        form.reset();
    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
