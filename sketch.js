let animals = [
  { name: 'vaca', description: 'Este animal dá leite e tem grandes orelhas.' },
  { name: 'galinha', description: 'Este animal põe ovos e canta "cócóricó".' },
  { name: 'porco', description: 'Este animal gosta de lama e faz "oinc oinc".' },
  { name: 'cavalo', description: 'Este animal é conhecido por ser rápido e tem uma crina.' },
  { name: 'ovelha', description: 'Este animal tem lã que é usada para fazer roupas.' }
];

let currentAnimalIndex = 0;
let userInput;
let checkButton, nextButton;
let message = '';
let gameState = 'playing'; // 'playing', 'won', 'lost'

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(22);
  
  // Cria o input para o palpite
  userInput = createInput('');
  userInput.position(width / 2 - 100, height / 2 + 40);
  userInput.size(200);
  
  // Botão verificar
  checkButton = createButton('Verificar');
  checkButton.position(width / 2 - 100, height / 2 + 80);
  checkButton.mousePressed(checkAnswer);
  
  // Botão próximo animal
  nextButton = createButton('Próximo Animal');
  nextButton.position(width / 2 + 20, height / 2 + 80);
  nextButton.mousePressed(nextAnimal);
}

function draw() {
  background(240);
  fill(50);
  
  textSize(28);
  text('Jogo da Fazenda', width / 2, 60);
  
  textSize(20);
  text(animals[currentAnimalIndex].description, width / 2, height / 2 - 20);
  
  if (gameState === 'playing') {
    message = 'Digite seu palpite e clique em Verificar';
  } else if (gameState === 'won') {
    message = 'Você acertou! 🎉';
  } else if (gameState === 'lost') {
    message = `Errado! A resposta correta era: ${animals[currentAnimalIndex].name}`;
  }
  
  fill(gameState === 'won' ? 'green' : 'red');
  text(message, width / 2, height / 2 + 120);
}

function checkAnswer() {
  let answer = userInput.value().toLowerCase().trim();
  let correct = animals[currentAnimalIndex].name.toLowerCase();
  
  if (answer === correct) {
    gameState = 'won';
  } else {
    gameState = 'lost';
  }
}

function nextAnimal() {
  currentAnimalIndex = (currentAnimalIndex + 1) % animals.length;
  gameState = 'playing';
  userInput.value('');
}
