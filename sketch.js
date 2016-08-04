//2016 08 04 jueves
//colegio oratorio don bosco
//santiago de chile
//latinoamerica
//clase de progamacion
//funciona con p5.js
//elias contreras
//chanchinho

//setup() corre una vez 
//al principio
	var diametro;
	
function setup() {

	//creo un lienzo
	//createCanvas(dimHor, dimVEr);


	diametro = 100
	createCanvas(800, 600);

	//pintar el fondo verde
	//background(red, green, blue);
	//0 es nada,255 es todo
	background(33, 0 ,221);
}



//draw() se ejecuta despues
//de setup()
//se hace 60 por segundo
function draw() {


	//definir el estilo de la elipse
	//definir el ancho del borde
	//strokeWeight(px);
	strokeWeight(10);

	//definir color del borde
	//stroke(color);
	//1: grayscale, o es negro 255 es blanco
	//2:grayscale + alpha
	//3: RGB ,red ,green, blue
	//4: RGB +alpha
	stroke(255, 0 ,0, 255/2);


	fill((0),random(255),(0));
	fill(255*mouseX/height, 0, 0);

	//dibujar elise
	//que sigue al mouse
	//ellipse(posX, posY, width, height),
	ellipse(mouseX, mouseY, diametro, diametro); 
	diametro = diametro + 1
	diametro = 10 + 500* random(1000)/1000;
}