var alunos = [
    { nome: 'joão', idade: 15 },
    { nome: 'josé', idade: 18 },
    { nome: 'antonio', idade: 19 },
    { nome: 'joana', idade: 16 },
    { nome: 'pedro', idade: 22 },
    { nome: 'maria', idade: 20 }
];

const alunosMaiores = alunos.filter((value) => {
    return value.idade >= 18;
})

console.log(alunosMaiores);