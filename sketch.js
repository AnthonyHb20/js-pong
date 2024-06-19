//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200; 
let diametro = 15;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;


//variaveis da raquete
let xRaquete = 5; 
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    circle(xBolinha, yBolinha, diametro);
    xBolinha += velocidadeXBolinha;
    //yBolinha += velocidadeYBolinha;
}

function verirficaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeYBolinha *= -1;
    }
}

function draw () {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    //verificaColisaoBorda();
    mostraRaquete();
    movimentaMinhaRaquete();
    //verificaColisaoRaquete();
}

function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro)
}

function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}


function mostraRaquete() {
    rect(xRaquete, yBolinha, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
 
  function verificaColisaoRaquete()
  }
  
