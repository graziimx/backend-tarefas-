const alunos = ["Ana", "Bruna", "Carla"];

alunos.push("Diego"); //Adiciona elemento no final do array
alunos.unshift("Alan"); //Adicona elemento no início do array
console.log(alunos);

const removido = alunos.pop();
console.log(removido);
console.log(alunos);

console.log(alunos.indexOf("Carla")); //Retorna o indice do array
console.log(alunos.indexOf("Pedro"));

console.log(alunos.includes("Ana")); // Retorna o valor booleano
console.log(alunos.includes("Paula"));