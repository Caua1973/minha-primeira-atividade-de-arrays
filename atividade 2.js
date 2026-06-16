let jogos = ['Minecraft', 'GTA V', 'Fortnite'];

// Imprime o nome do primeiro jogo
jogos.push(' Call of Duty');
console.log(jogos);
let desciplinas = ['Matemática', 'Português', 'História'];
console.unshift('Geografia');
console.log(desciplinas);

let cantina = ['Coca-cola', 'Pão de queijo', 'Suco de laranja'];
cantina.pop('Coca-cola');
console.log(cantina);

let nomes = ['João', 'Maria', 'Pedro'];
nomes.shift('João');
console.log(nomes);

let produtos = ['Notebook', 'Smartphone', 'Tablet'];
produtos.push('Smartwatch');
console.log(produtos);
produtos.shift('Notebook');
console.log(produtos);
produtos[1] = 'Fone de ouvido';
console.log(produtos);
