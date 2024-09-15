class Background {
  constructor() {
    this.xWaves = 0;
    this.xOcean = 0;
    this.xSeabed = 0;
    // this.xSnail = 250;
  }

  setup() {
    this.algaeSprite = createSprite(
      150,
      630,
      algaeAnimation.width / 10,
      algaeAnimation.height / 10
    );
    this.algaeSprite.addAnimation("algaeAnimation", algaeAnimation);
    this.algaeSprite.animation.frameDelay = 10;
    this.algaeSprite.scale = 0.2;

    this.coralSprite = createSprite(
      1300,
      630,
      coralAnimation.width / 10,
      coralAnimation.height / 10
    );
    this.coralSprite.addAnimation("coralAnimation", coralAnimation);
    this.coralSprite.animation.frameDelay = 10;
    this.coralSprite.scale = 0.2;

    this.shellSprite = createSprite(
      900,
      830,
      shellAnimation.width / 10,
      shellAnimation.height / 10
    );
    this.shellSprite.addAnimation("shellAnimation", shellAnimation);
    this.shellSprite.animation.frameDelay = 20;
    this.shellSprite.scale = 0.09;

this.snailSprite=createSprite(250,850,snailImage.width / 10,
  snailImage.height / 10)
this.snailSprite.addImage(snailImage)
this.snailSprite.scale=0.15



  }

  draw() {
    this.xWaves += 2;
    if (this.xWaves >= WIDTH) {
      this.xWaves = 0;
    }
    image(waveImage, this.xWaves, 0, WIDTH, 150);

    image(waveImage, this.xWaves - WIDTH, 0, WIDTH, 150);

    image(oceanImage, this.xOcean, 149, WIDTH);
    image(seabedImage, this.xSeabed, 830, WIDTH, 70);
    // image(
    //   snailImage,
    //   this.xSnail,
    //   810,
    //   snailImage.width / 10,
    //   snailImage.height / 10
    // );
    this.snailSprite.position.x += 0.2;
    if (this.snailSprite.position.x >= 850) {
//       this.snailOppSprite=createSprite(850,830,snailOppositeImage.width / 10,
//   snailOppositeImage.width / 10)
// this.snailOppSprite.addImage(snailOppositeImage)
// this.snailOppSprite.scale=0.15
    }
  }
}
