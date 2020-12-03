const IDADE = 18;


var alunos = [
    { nome: 'joão', idade: 15 },
    { nome: 'josé', idade: 18 },
    { nome: 'antonio', idade: 19 },
    { nome: 'joana', idade: 16 },
    { nome: 'pedro', idade: 22 },
    { nome: 'maria', idade: 30 }
];

// Q1
// const alunosMaiores =
//     alunos.filter((obj) => {
//         return obj.idade >= IDADE;
//     })

// const Q1 = () => {
//     let alunosMaiores = []
//     for (const i in alunos) {
//         const aluno = alunos[i];
//         aluno.idade >= IDADE && alunosMaiores.push(aluno);
//     }
//     return alunosMaiores;
// }
// console.log('Q1: ', alunosMaiores);
// console.log('Q1: ', Q1()); 


//Q2
// const alunoPedro = alunos.find((obj) => {
//     return obj.nome === "pedro";
// })

// const Q2 = (nomeAluno) => {
//     let alunoProcurado;
//     for (const i in alunos) {
//         const aluno = alunos[i];
//         aluno.nome === nomeAluno ? alunoProcurado = aluno : null;
//     }
//     return alunoProcurado;
// }
// console.log('Q2: ', alunoPedro);
// console.log('Q2: ', Q2("pedro"));

//Q3
const verificarAlunosMaiores =
    alunos.map((obj) => {
        return obj.idade
    }).every((value) => {
        return value > IDADE;
    })

const Q3 = () => {
    let idadeAlunos = [];
    for (const i in alunos) {
        const aluno = alunos[i];
        idadeAlunos.push(aluno.idade)
    }

    // Cria variavel p capturar o valores da condicao
    let condicao = []
    for (const i of idadeAlunos) {
        // if (i < 18) {
        //     condicao.push(i);
        //     console.log(condicao);
        // }
        i < IDADE ? condicao.push(i) : null;
    }
    return condicao.length > 0 ? false : true;
}
console.log('Q3: ', verificarAlunosMaiores);
console.log('Q3: ', Q3());


//Q4
const somaAlunoIdades =
    alunos.map((value) => {
        return value.idade
    }).reduce((acumulator, currentValue) => {
        return acumulator + currentValue;
    })

const Q4 = () => {
    let arrayIdades = [];
    for (const i in alunos) {
        const aluno = alunos[i];
        arrayIdades.push(aluno.idade)
    }
    let soma = 0;
    for (const i of arrayIdades) {
        soma = i + soma;
    }
    return soma;
}

console.log('Q4: ', somaAlunoIdades);
console.log('Q4: ', Q4());