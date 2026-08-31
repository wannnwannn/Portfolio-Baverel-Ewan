console.log("Snake JS is ready");
//Variables:
let started = false //le jeu a commencer ???
let squareSize = 20; //Côté d'un carré en pixels
let boardWidth = 20; //Largeur du damier
let boardHeight = 20; //Hauteur du damier
let xSnake; //Abscisses des carrés du serpent
let ySnake; //Ordonnées des carrés du serpent
let xApple; //abscisse de la pomme
let yApple; //ordonnée de la pomme
let xApple1;
let yApple1;
let xApple2;
let yApple2;
let snakeTimer; //Horloge du jeu
let dirHead; //Direction of the snake :
    //     1
    // 2  Head  0
    //     3
let score;
let multiplierText = document.getElementById('MultiplierTXT');
let scoreMultiplier = 1.00;
let oldscore = -1;
let bestScore = 0;
let bestScoreText = document.getElementById("BestScoreTXT");
let endedtxt = document.getElementById("NBWinTXT");


let xObject;
let yObject;
//pomme
let appleImg = new Image();
appleImg.src = "Images/scarab.png";
//cactus
let nbCactus = 0;
let xCactus;
let yCactus;
let cactusImg = new Image;
cactusImg.src = "Images/cactus.png";


//tete snake
let thickness = 0.1;
//droite
let headRightImg = new Image();
headRightImg.src = "Images/headRight.png";
//gauche
let headLeftImg = new Image();
headLeftImg.src = "Images/headLeft.png";
//up
let headUpImg = new Image();
headUpImg.src = "Images/headUp.png";
//down
let headDownImg = new Image();
headDownImg.src = "Images/headDown.png";

let eatAppleSound = new Audio("audio/eating.mp3");
let gameOverSound = new Audio("audio/GameOver.mp3");
let tunrSound = new Audio("audio/TurnSound.mp3");
let winSound = new Audio("audio/winSound.mp3");
//gagner
let win = false;
let nbWin = 0;
//nombres de parties joué
let nbparties = 0;
const nbpartieTXT = document.getElementById("NBgames");
//rainbow
let rainbow = false;
const buttonFlash = document.getElementById("FlashButton");
buttonFlash.addEventListener("click", FlashMode);
function FlashMode(){
  if (rainbow === false){
    buttonFlash.innerHTML = "Mode Activé"
    rainbow = true
    nbApple = 3
    scoreMultiplier += 0.50
  }
  else {
    buttonFlash.innerHTML = "Mode Flash"
    rainbow = false
	nbApple = 1
  scoreMultiplier -= 0.50
  }
  startGame()
}


let endThickness;


const button3scab = document.getElementById("3scabButton")
button3scab.addEventListener("click", troiScarab)
let scarabX3 = false
function troiScarab(){
	if (scarabX3 === false){
		button3scab.innerHTML = "Mode Activé"
		scarabX3 = true
    scoreMultiplier -= 0.50
	}
	else if (scarabX3 === true){
		button3scab.innerHTML = "3 Scarabées"
		scarabX3 = false
		xApple1 = -1
		yApple1 = -1

		xApple2= -1
		yApple2 = -1
    scoreMultiplier += 0.50
	}
  startGame()
}
const button0colide = document.getElementById("0colide")
button0colide.addEventListener("click", noColide)
let pasCollision = false
function noColide(){
  if (pasCollision === false){
    button0colide.innerHTML = "Mode Activé"
    pasCollision = true
    scoreMultiplier -= 0.50
  }
  else if(pasCollision === true){
    button0colide.innerHTML = "0 collision"
    pasCollision = false
    scoreMultiplier += 0.50

  }
  startGame()
}

//extra vitesse
//vitesse x0.5
const vitesseButton = document.getElementById("V05");
vitesseButton.addEventListener("click", vitesseButtonfunction);
let x05 = false
function vitesseButtonfunction(){
  if (x05 === false){
    x05 = true;
    scoreMultiplier -= 0.50;
    vitesseButton.innerHTML = "Mode Activé";
  }
  else if (x05 === true) {
    x05 = false;
    scoreMultiplier += 0.50;
    vitesseButton.innerHTML = "Vitesse x0.5";
  }
  startGame()
}





//Canvas:
const boardCanvas = document.getElementById("snakeCanvas");
const board2dCtx = boardCanvas.getContext("2d");
//Taille du canvas:
boardCanvas.width = squareSize*boardWidth;
boardCanvas.height = squareSize*boardHeight;

//Bouton:
const buttonStart = document.getElementById("startgame");
buttonStart.addEventListener("click", startGame);

//collision avec damier
const collisionButton = document.getElementById("colbut");
collisionButton.addEventListener("click", colbuttxt);
collisionDamier = false
function colbuttxt(){
	if(collisionDamier === false){
		collisionDamier = true
		collisionButton.innerHTML = "Collision avec les bords du damier";
		startGame()
	}
	else if(collisionDamier === true){
		collisionDamier = false
		collisionButton.innerHTML = "Réapparaitre de l'autre côté du damier";
		startGame()
	}
}






function gameLoop(){

//	var canvas = document.getElementById('snakeCanvas');
//	canvas.width = window.innerWidth - 130;
//	canvas.height = window.innerHeight - 130;
//	squareSize = window.innerWidth / window.innerHeight + 30;
//	boardHeight = window.innerHeight - 130;
//	boardWidth = window.innerWidth - 130;





    //Dessin du grand rectangle orange pale:
    if (rainbow === true){
      board2dCtx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      board2dCtx.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
    }
    else {
      board2dCtx.fillStyle = "#fb8b24";
      board2dCtx.fillRect(0, 0, boardCanvas.width, boardCanvas.height);
    }


    //Dessin des carrés orange foncés:
    if (rainbow === true){
      board2dCtx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
    }
    else {
      board2dCtx.fillStyle = "#e36414";
      for (let i = 0; i < boardWidth; i=i+2) {
          for (let j = 0; j < boardHeight; j=j+2) {
              board2dCtx.fillRect(i*squareSize, j*squareSize, squareSize, squareSize);
              board2dCtx.fillRect((i+1)*squareSize, (j+1)*squareSize, squareSize, squareSize);
          }
      }
    }


    //Ajout de la nouvelle tête du serpent
    switch(dirHead) {
        case 0: //Right

            xSnake.unshift(xSnake[0]+1);
            ySnake.unshift(ySnake[0]);

            break;
        case 1: //Up
            xSnake.unshift(xSnake[0]);
            ySnake.unshift(ySnake[0]-1);
            break;
        case 2: //Left
            xSnake.unshift(xSnake[0]-1);
            ySnake.unshift(ySnake[0]);
            break;
        case 3: //Down
            xSnake.unshift(xSnake[0]);
            ySnake.unshift(ySnake[0]+1);
            break;

    }

	if(collisionDamier === false){
		//Collision avec les bords du damier droite
		if( xSnake[0] === boardWidth ){
			xSnake[0] = 0;
		}
		//Collision avec les bords du damier bas
		if( ySnake[0] === boardHeight ){
			ySnake[0] = 0;
		}
		//Collision avec les bords du damier haut
		if( ySnake[0] === -1 ){
			ySnake[0] = boardHeight;
		}
		//Collision avec les bords du damier gauche
		if( xSnake[0] === -1 ){
			xSnake[0] = boardWidth;
		}
	}
	
	else if(collisionDamier === true){
		if( xSnake[0] === boardWidth ){
			endGame()
		}	
		if( ySnake[0] === boardHeight){
			endGame()
		}
		if( xSnake[0] === -1){
			endGame()
		}
		if( ySnake[0] === -1){
			endGame()
		}		
	}
	
	
	
		
		//Collision avec le corps du serpent
    if (pasCollision === false){
      for (i = 1; i < xSnake.length; i=i+1) {
  			if (xSnake[0] === xSnake[i] && ySnake[0]===ySnake[i]){
  				endGame(); //finir le jeu avec la fonction EndGame
  				return; //Sort de la fonction gameLoop
  			}
  		}
    }


	//collision avec les pommes
    if( xSnake[0] === xApple && ySnake[0] === yApple ){
        //créer une nouvelle pomme
          thicknessCalculator()
		      score = score + 1;
          if (bestScore < score * scoreMultiplier) {
            bestScore = score*scoreMultiplier;
            bestScoreText.innerHTML = "Meilleur score : " + bestScore + "|";
          }
          encouragescore()
		      eatAppleSound.play();
		      startgame.innerText = "score : " + score * scoreMultiplier;
          xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
          yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
    }
	else if (xSnake[0] === xApple1 && ySnake[0] === yApple1 && scarabX3 === true){
		//créer une nouvelle pomme
    thicknessCalculator()
		score = score + 1;
    if (bestScore * scoreMultiplier < score * scoreMultiplier) {
      bestScore = score * scoreMultiplier;
      bestScoreText.innerHTML = "Meilleur score : " + bestScore + "|";
    }
		eatAppleSound.play();
		startgame.innerText = "score : " + score * scoreMultiplier;
        xApple1 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
        yApple1 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
	}

	else if (xSnake[0] === xApple2 && ySnake[0] === yApple2 && scarabX3 === true){
		//créer une nouvelle pomme
    thicknessCalculator()
		score = score + 1;
    if (bestScore * scoreMultiplier < score * scoreMultiplier) {
      bestScore = score * scoreMultiplier;
      bestScoreText.innerHTML = "Meilleur score : " + bestScore + "|";
    }
		eatAppleSound.play();
		startgame.innerText = "score : " + score * scoreMultiplier;
        xApple2 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
        yApple2 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
	}
	else{
        //Suppression de la queue du serpent
        xSnake.pop();
        ySnake.pop();

    }
    //faire en sorte que les pomme ne spawn pas au même endroit qu'un cactus
    for (i = 1; i < xCactus.length; i=i+1) {
      if (xApple === xCactus[i] && yApple ===yCactus[i]){
        xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
        yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
      }

	  if (scarabX3 === true){
		  if (xApple1 === xCactus[i] && yApple1 ===yCactus[i]){
        xApple1 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
        yApple1 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
		}
	  if (xApple2 === xCactus[i] && yApple2 ===yCactus[i]){
        xApple2 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
        yApple2 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
		}
	  }
    }
    //faire en sorte que les pommes n'apparaissent pas sur le serpent
    for (i = 1; i < xSnake.length; i=i+1) {
      if (xApple === xSnake[i] && yApple ===ySnake[i]){
        xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
        yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
      }
	  if (scarabX3 === true){
		  if (xApple1 === xSnake[i] && yApple1 ===ySnake[i]){
        xApple1 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
        yApple1 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
      }
	  if (xApple2 === xSnake[i] && yApple2 ===ySnake[i]){
        xApple2 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
        yApple2 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
		}
	  }

    }









    //Dessin du serpent
		board2dCtx.fillStyle = "#86a1fa";
    thicknessCalculator()


    for (let i = 0; i < xSnake.length; i=i+1) {
        board2dCtx.fillRect(xSnake[i+1]*squareSize,ySnake[i+1]*squareSize,squareSize-i*thickness,squareSize-i*thickness);
        endThickness = i;
    }




	switch(dirHead) {
	case 0  : //right
		board2dCtx.drawImage(headRightImg, xSnake[0]*squareSize, ySnake[0]*squareSize, squareSize, squareSize);
		break
	case 1 : //up
		board2dCtx.drawImage(headUpImg, xSnake[0]*squareSize, ySnake[0]*squareSize, squareSize, squareSize);
		break
	case 2: //left
		board2dCtx.drawImage(headLeftImg, xSnake[0]*squareSize, ySnake[0]*squareSize, squareSize, squareSize);
		break
	case 3: //down
		board2dCtx.drawImage(headDownImg, xSnake[0]*squareSize, ySnake[0]*squareSize, squareSize, squareSize);
		break
	}

	//Dessin de la pomme
	board2dCtx.drawImage(appleImg, xApple*squareSize, yApple*squareSize, squareSize, squareSize);
	board2dCtx.drawImage(appleImg, xApple1*squareSize, yApple1*squareSize, squareSize, squareSize);
	board2dCtx.drawImage(appleImg, xApple2*squareSize, yApple2*squareSize, squareSize, squareSize);



  //créer un obstacle :
	CreateCactus(nbCactus)

  //faire gagner le joueur
  ser = xSnake.length + ySnake.length;
  boa = (boardWidth * boardHeight) - 2;
  if (ser > boa){
    win = true;
    console.log("win");
    wingame();
    return;
  }

  //collision avec l'obstacle
  if (pasCollision === false){
    for (i = 1; i < xCactus.length; i=i+1) {
      if (xSnake[0] === xCactus[i] && ySnake[0]===yCactus[i]){
        endGame(); //finir le jeu avec la fonction EndGame
        return; //Sort de la fonction gameLoop
      }
    }
  }




}



function handleKeyboard(event) {
    event.preventDefault();//Evite le défilement de la page
		if (started === true){
			switch(event.key) {
        //fleches directionnelles
	        case "ArrowRight":
            if (dirHead != 2){
              dirHead = 0;
              tunrSound.play()
            }
	          break;
	        case "ArrowUp":
            if (dirHead != 3){
              dirHead = 1;
              tunrSound.play()
            }
	          break;
	        case "ArrowLeft":
            if (dirHead != 0){
              dirHead = 2;
              tunrSound.play()
            }
	            break;
	        case "ArrowDown":
          if (dirHead != 1){
            dirHead = 3;
            tunrSound.play()
          }
	            break;
              //ZQSD
              case "d":
                if (dirHead != 2){
                  dirHead = 0;
                  tunrSound.play()
                }
    	          break;
    	        case "z":
                if (dirHead != 3){
                  dirHead = 1;
                  tunrSound.play()
                }
    	          break;
    	        case "q":
                if (dirHead != 0){
                  dirHead = 2;
                  tunrSound.play()
                }
    	            break;
    	        case "s":
              if (dirHead != 1){
                dirHead = 3;
                tunrSound.play()
              }
    	            break;

	    }
		}

}
//controle mobile
//gauche
const turnL = document.getElementById("arrowL");
turnL.addEventListener("click", tl);
function tl(){
	if (dirHead != 0){
                  dirHead = 2;
                  tunrSound.play()
                }
}
//haut
const turnU = document.getElementById("arrowU");
turnU.addEventListener("click", tu);
function tu(){
	if (dirHead != 3){
                  dirHead = 1;
                  tunrSound.play()
                }
}
//bas
const turnD = document.getElementById("arrowD");
turnD.addEventListener("click", td);
function td(){
	if (dirHead != 1){
                dirHead = 3;
                tunrSound.play()
              }
}
//droite
const turnR = document.getElementById("arrowR");
turnR.addEventListener("click", tr);
function tr(){
	if (dirHead != 2){
                  dirHead = 0;
                  tunrSound.play()
                }
}


function startGame(){
	score = 0;
  //Horloge du jeux
	clearInterval(snakeTimer);
	if (easy === true){
    //taille du serpent
		xSnake = [2,1,0];
		ySnake = [0,0,0];
    //vitesse du jeu
    if (x05 === false) {
      snakeTimer = setInterval(gameLoop,100);
    }
    else if (x05 === true) {
      snakeTimer = setInterval(gameLoop,200);
    }
	}
	else if (medium === true){
    //taille du serpent
		xSnake = [5,4,3,2,1,0];
		ySnake = [0,0,0,0,0,0];
    //vitesse du jeu
    if (x05 === false) {
      snakeTimer = setInterval(gameLoop,80);
    }
    else if (x05 === true) {
      snakeTimer = setInterval(gameLoop,160);
    }
	}
	else if (easy === false && medium === false){
    //taille du serpent
		xSnake = [10,9,8,7,6,5,4,3,2,1,0];
		ySnake = [0,0,0,0,0,0,0,0,0,0,0];
    //vitesse du jeu
    if (x05 === false) {
      snakeTimer = setInterval(gameLoop,60);
    }
    else if (x05 === true) {
      snakeTimer = setInterval(gameLoop,120);
    }

	}
  multiplierText.innerHTML = "Score : x" + scoreMultiplier + "|"
    //Premier serpent
	//xSnake = [3,2,1,0];
	//ySnake = [0,0,0,0];
	//dirHead = 0;
	//Première pomme
	xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et boardWidth (exclu)
	yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et boardHeight (exclu)
	if (scarabX3 === true){
		xApple1 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et boardWidth (exclu)
		yApple1 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et boardHeight (exclu)

		xApple2 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et boardWidth (exclu)
		yApple2 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et boardHeight (exclu)
	}

	//snakeTimer = setInterval(gameLoop, 50);
	//Ecoute le clavier
	document.addEventListener("keydown", handleKeyboard);
	started = true
	win = false

	xCactus = [];
	yCactus = [];
	for (let i = 0; i < nbCactus; i=i+1) {
        xCactus[i]= Math.floor(Math.random()*boardWidth);
		    yCactus[i] = Math.floor(Math.random()*boardHeight);
        if (yCactus[i] === 0){
            yCactus[i] = Math.floor(Math.random()*boardHeight);
        }
    }



}

function wingame(){
  winSound.play()
  nbWin = nbWin + 1;
  endedtxt.innerHTML = "Parties gagnées : " + nbWin + " | ";
  encouragescore()
  //Stopper l'horloge du jeu
  clearInterval(snakeTimer)
  //nombre de parties jouée
  nbparties = nbparties + 1;
  nbpartieTXT.innerHTML = "Parties jouées : " + nbparties;
  //afficher que le joueur a gagner
  board2dCtx.fillStyle = "black"
  board2dCtx.font = "40px Arial Black"
  board2dCtx.fillText("Vous avez réussi!", 10, 150, 400)
  board2dCtx.fillText("Score : " + score, 10, 200, 200)
  buttonStart.innerHTML = "recommencer";
  dirHead = 0;
  started = false

}

function endGame(){
 //Stopper l'horloge du jeu
 clearInterval(snakeTimer);
 //Affiche Game Over ! et le score
 gameOverSound.play();
 board2dCtx.fillStyle = "black"
 board2dCtx.font = "50px Arial Black";
 board2dCtx.fillText("Game Over !", 10,150);
 board2dCtx.fillText("Score : " + score, 10, 200);
 //nombre de parties jouée
 nbparties = nbparties + 1;
 nbpartieTXT.innerHTML = "Parties jouées : " + nbparties;
 //Modifie le message du bouton
 buttonStart.innerHTML = "réessayer";
 dirHead = 0;
 started = false
}



//Premier serpent
xSnake = [3,2,1,0];
ySnake = [0,0,0,0];
dirHead = 0;
//Première pomme
xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
//Horloge du jeux
//clearInterval(snakeTimer);
//snakeTimer = setInterval(gameLoop, 500);
//Ecoute le clavier
document.addEventListener("keydown", handleKeyboard);


//niveau facile
const buttonEasy = document.getElementById("easy");
buttonEasy.addEventListener("click", Neasy);
let easy = false;
function Neasy(){

	xSnake = [2,1,0];
	ySnake = [0,0,0,0];
	score = 0;
	squareSize = 50;
	boardHeight = 8;
	boardWidth = 8;
	boardCanvas.width = squareSize*boardWidth;
	boardCanvas.height = squareSize*boardHeight;
	clearInterval(snakeTimer);
  if (x05 === false) {
    snakeTimer = setInterval(gameLoop,100);
  }
  else if (x05 === true) {
    snakeTimer = setInterval(gameLoop,200);
  }

	buttonStart.innerHTML = "Score : 0";
	started = true
	win = false
	nbCactus = 0;
	xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
	yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
	easy = true;
	medium = false;
	hard = false;
	insane = false;
	create3scarab()
	startGame()




}
//niveau medium
const buttonMedium = document.getElementById("medium")
buttonMedium.addEventListener("click", Nmedium)
let medium = false;
function Nmedium(){
  xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
  yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
	xSnake = [5,4,3,2,1,0];
	ySnake = [0,0,0,0];
	score = 0;
	squareSize = 20;
	boardHeight = 20;
	boardWidth = 20;

	boardCanvas.width = squareSize*boardWidth;
	boardCanvas.height = squareSize*boardHeight;
	clearInterval(snakeTimer);
  if (x05 === false) {
    snakeTimer = setInterval(gameLoop,80);
  }
  else if (x05 === true) {
    snakeTimer = setInterval(gameLoop,160);
  }

	buttonStart.innerHTML = "Score : 0";
	medium = true;
	easy = false;
	hard = false;
	insane = false;
	started = true
	win = false
	nbCactus = 7;
	xCactus = [];
	yCactus = [];
	for (let i = 0; i < nbCactus; i=i+1) {
    xCactus[i]= Math.floor(Math.random()*boardWidth);
		yCactus[i] = Math.floor(Math.random() * (boardHeight - 1) + 1);
    }


	create3scarab()
  startGame()
}
//niveau hard
const buttonHard = document.getElementById("hard")
buttonHard.addEventListener("click", Nhard)
let hard = false;
function Nhard(){
  xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
  yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
	xSnake = [10,9,8,7,6,5,4,3,2,1,0];
	ySnake = [0,0,0,0];
	score = 0;
	squareSize = 20;
	boardHeight = 30;
	boardWidth = 30;
	boardCanvas.width = squareSize*boardWidth;
	boardCanvas.height = squareSize*boardHeight;

	clearInterval(snakeTimer);
  if (x05 === false) {
    snakeTimer = setInterval(gameLoop,60);
  }
  else if (x05 === true) {
    snakeTimer = setInterval(gameLoop,120);
  }

	buttonStart.innerHTML = "Score : 0";
	easy = false;
	medium = false;
	hard = true;
	insane = false;
	started = true
	win = false
	nbCactus = 20;
	xCactus = [];
	yCactus = [];
	for (let i = 0; i < nbCactus; i=i+1) {
    xCactus[i]= Math.floor(Math.random()*boardWidth);
		yCactus[i] = Math.floor(Math.random() * (boardHeight - 1) + 1);
    }
	create3scarab()
  startGame()
}

//niveau Insane
const buttonInsane = document.getElementById("insane")
buttonInsane.addEventListener("click", Ninsane)
let insane = false;
function Ninsane(){
  xApple = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et  boardWidth (exclu)
  yApple = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et  boardHeight (exclu)
	xSnake = [10,9,8,7,6,5,4,3,2,1,0];
	ySnake = [0,0,0,0];
	score = 0;
	squareSize = 20;
	boardHeight = 32;
	boardWidth = 32;
	boardCanvas.width = squareSize*boardWidth;
	boardCanvas.height = squareSize*boardHeight;
	clearInterval(snakeTimer);
  if (x05 === false) {
    snakeTimer = setInterval(gameLoop,60);
  }
  else if (x05 === true) {
    snakeTimer = setInterval(gameLoop,120);
  }

	buttonStart.innerHTML = "Score : 0";
	easy = false;
	medium = false;
	hard = false;
	insane = true;

	started = true
	win = false
	nbCactus = 100;
	xCactus = [];
	yCactus = [];
	for (let i = 0; i < nbCactus; i=i+1) {
    xCactus[i]= Math.floor(Math.random()*boardWidth);
		yCactus[i] = Math.floor(Math.random() * (boardHeight - 1) + 1);
    }
	create3scarab()
  startGame()


}





function CreateCactus(nbOfCactus){
	for (let i = 0; i < nbOfCactus; i=i+1) {
		let xCact = xCactus[i]; //abscisse aléatoire entre 0 et  boardWidth (exclu)
    let yCact = yCactus[i]; //ordonnée aléatoire entre 0 et  boardHeight (exclu)

		board2dCtx.drawImage(cactusImg, xCact*squareSize, yCact*squareSize, squareSize, squareSize);
		//console.log(xCactus)

	}
}

function create3scarab(){
	if (scarabX3 === true){
		xApple1 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et boardWidth (exclu)
		yApple1 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et boardHeight (exclu)

		xApple2 = Math.floor(Math.random()*boardWidth); //abscisse aléatoire entre 0 et boardWidth (exclu)
		yApple2 = Math.floor(Math.random()*boardHeight); //ordonnée aléatoire entre 0 et boardHeight (exclu)
	}
	if (scarabX3 === false){
		xApple1 = -1
		yApple1 = -1

		xApple2= -1
		yApple2 = -1
	}
}

const encourageTXT = document.getElementById("encouragement")

function encouragescore (){
	if (score >= boardWidth*boardHeight-10){
		encourageTXT.innerHTML = "Encore un éffort !!"
	}
	else if (nbWin === 1){
		encourageTXT.innerHTML = "Pas mal..."
	}
	else if (nbWin === 3){
		encourageTXT.innerHTML = "tu es vraiment fort !"
	}
	else if (nbWin === 5){
		encourageTXT.innerHTML = "Fantastique !"
	}
	else if (nbWin === 8){
		encourageTXT.innerHTML = "Tu es une légende !"
	}
	else if (nbWin === 10){
		encourageTXT.innerHTML = "Je ne peu que m'incliner devant toi"
	}
}

let oldthickness = 0;
function thicknessCalculator(){
  if (score === oldscore){
    thickness = thickness + 0.05
    oldthickness = oldthickness + 1
    console.log(thickness);
  }

  if (score <= 5){
    thickness = 1.5
  }
  else if (score >= 11 && score <= 15) {
    thickness = 0.8
  }

  else if (score >= 20 && score <= 25) {
    thickness = 0.5
  }
  else if (score >= 30 && score <= 40) {
    thickness = 0.2
  }
  else if (score >= 50 && score <= 55) {
    thickness = 0.05
  }
  else if (score >= 150) {
    thickness = 0.009
  }

//  if (oldthickness === 5){
//    thickness =  0.1
    //thickness = 0.1
//    oldthickness = 0
//  }
  if (squareSize-endThickness*thickness <= 10 && score <= 150){
    thickness = thickness - 0.05;
  }
}
