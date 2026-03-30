const 1dade = 15;
const maiorIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorIdade && possuiCNH; //E, AND
console.log('Pode viajar sozinho?', podeDirigir);

const podeViaajarSozinho = maiorIdade || possuiCNH; //OU, OR 
console.log('Pode viajar sozinho?', podeViajarSozinho);

const precisaDeAcompanhante = ImaiorIdade;
console.log('Precisa de acompanhante?', precisaDeAcompanhante);