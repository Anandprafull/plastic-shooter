class Game {
  constructor() {
    this.background = new Background();
    this.fish = new Fish();
    this.submarine = new Submarine();
    this.trashSprite;
    this.distanceArray = [];
    this.minDistance;
    this.minPosition;
    this.velocity = 2;
    this.score=0;
  }

  setup() {
    this.trashes = new Group();
    this.background.setup();
    this.submarine.setup();
    this.fish.setup();
    bubblesSound.play();
    bubblesSound.setLoop(true);
    
  }

  draw() {
    this.background.draw();
    document.querySelector(".score-card").style.display="inline";
    if (frameCount >= 60 && frameCount % 60 === 0) {
      // if (this.trashes.length < 20)
      this.createTrash();
    }
    if(this.trashes.length>20) this.trashes[0].remove();

    this.submarine.draw();

    this.fish.draw();

    if (frameCount % 300 === 0) {
      if (this.trashes.length > 1) {
        this.distanceArray = [];

        for (let i = 0; i < this.trashes.length; i++) {
          let eachDistance = distance(this.trashes[i], this.fish.fishSprite);
          this.distanceArray.push(eachDistance);
        }
        this.minDistance = Math.min(...this.distanceArray);

        this.minPosition = this.distanceArray.indexOf(this.minDistance);

        this.fish.fishSprite.rotation = Math.atan2(
          this.trashes[this.minPosition].position.y -
            this.fish.fishSprite.position.y,
          this.trashes[this.minPosition].position.x -
            this.fish.fishSprite.position.x
        );

        this.fish.fishSprite.setSpeed(
          1,
          (this.fish.fishSprite.rotation / PI) * 180
        );
        //   this.fish.fishSprite.position.y -=
        //   cos((this.fish.fishSprite.rotation/PI)*180) * this.velocity;
        // this.fish.fishSprite.position.x +=
        //   sin((this.fish.fishSprite.rotation/PI)*180) * this.velocity;
      }
    }
    this.trashes.collide(this.fish.fishSprite, this.eatTrash)
    document.querySelector(".health-bar").style.width = `${this.fish.healthPoints*(100/6)}%`;
    document.querySelector(".score-value").innerText = `${this.score}`;
    
    if (this.submarine.missiles) {
      this.trashes.collide(this.submarine.missiles, this.hitMissile);
    }

    if (this.score>190) {
      document.querySelector(".game-win-text1").innerText =
     "Yaay you saved the ocean!! ⭐️🐠";
    document.querySelector(".game-win-text2").innerText = `You Scored ${this.score} points!`;
    document.querySelector(".play-again-win").innerText = "Play Again";
    document.querySelector(".game-win").style.display = "inline";
    winSound.play()
    winSound.setVolume(0.5)
    startGame = false
      noLoop();
    }

    this.trashes.bounce(this.submarine.submarineSprite);
    this.trashes.bounce(this.trashes);
    this.fish.fishSprite.bounce(this.trashes);
    this.fish.fishSprite.bounce(this.submarine.submarineSprite);
  }

  createTrash() {
    this.trashSprite = createSprite(
      random(100, WIDTH - 100),
      random(100, HEIGHT - 100)
    );
    this.trashSprite.addImage(sodaCanImage);
    this.trashSprite.scale = 0.1;
    this.trashSprite.setSpeed(0.5, random(360));
    this.trashSprite.rotationSpeed = 0.5;
    this.trashes.add(this.trashSprite);

    // this.trashes.forEach((trash,index) => {
    //   this.trashBoundary(index);
    // });
  }

  // trashBoundary(index) {
  //   if (this.trashes[index].position.x > WIDTH - 100) {
  //     this.trashes[index].position.x = WIDTH - 100;
  //     this.trashes[index].rotation += 180;
  //     this.trashes[index].setSpeed(0.5, this.trashes[index].rotation);
  //     this.trashes[index].rotationSpeed = 0.5;
  //   } else if (this.trashes[index].position.y > HEIGHT - 100) {

  //     this.trashes[index].position.y = HEIGHT - 100;
  //     this.trashes[index].rotation += 180;
  //     this.trashes[index].setSpeed(0.5, this.trashes[index].rotation);
  //     this.trashes[index].rotationSpeed = 0.5;
  //   } else if (this.trashes[index].position.y < 100) {
  //     this.trashes[index].position.y = 100;
  //     this.trashes[index].rotation -= 180;
  //     this.trashes[index].setSpeed(0.5, this.trashes[index].rotation);
  //     this.trashes[index].rotationSpeed = 0.5;
  //   } else if (this.trashes[index].position.x < 100) {
  //     this.trashes[index].position.x = 100;
  //     this.trashes[index].rotation -= 180;
  //     this.trashes[index].setSpeed(0.5, this.trashes[index].rotation);
  //     this.trashes[index].rotationSpeed = 0.5;
  //   }
  // }

  hitMissile(missile, trash) {
    trash.remove();
    missile.remove();
    addScore();
  }

  eatTrash(trash, fish) {
    trash.remove();
    reduceHealthPoint();

    if (fish.scale < 0.45) {
      fish.scale += 0.07;
      // this.healthWidth -= 50;
      // let healthPx = `${this.healthWidth}px`;
     
   
    } else {
      fish.remove();
      console.log(this);
      createDeadFish();
      startGame = false;
      document.querySelector(".game-lose-text1").innerText =
        "Oh no! You couldn't save the ocean.";
      document.querySelector(".game-lose-text2").innerText = "Game Over!";
      document.querySelector(".play-again-lose").innerText = "Try Again";
      document.querySelector(".game-lose").style.display = "inline";
      loseSound.play()
      loseSound.setVolume(0.5)
      noLoop();
    }
  }
}

function createDeadFish() {
  console.log("dead");
  let fishDeadSprite = createSprite(
    game.fish.fishSprite.position.x,
    game.fish.fishSprite.position.y
  );
  fishDeadSprite.addImage(fishDeadImage);
  fishDeadSprite.scale = 0.45;
}

function reduceHealthPoint(){
  game.fish.healthPoints-=1;
}

function addScore(){
game.score+=10;
}