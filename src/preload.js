let cokeBottleImage;
let sodaCanImage;
let snailImage;
let snailOppositeImage;
let shellAnimation;
let waveImage;
let oceanImage;
let algaeAnimation;
let coralAnimation;
let seabedImage;
let fishImage;
let fishDeadImage;
let submarineImage;
let missileSpriteLoad;
let missileAnimation;
let trashArray;
let shootSound;
let loseSound;
let winSound;
let bubblesSound;

function preload() {
  cokeBottleImage = loadImage("assets/coke-bottle.png");
  sodaCanImage = loadImage("assets/soft-drink.png");
  trashArray = ["assets/coke-bottle.png", "assets/soft-drink.png"].map(img =>
    loadImage(img)
  );
  snailImage = loadImage("assets/snail.png");
  snailOppositeImage = loadImage("assets/snail-opposite.png");
  waveImage = loadImage("assets/waves.png");
  oceanImage = loadImage("assets/ocean.png");
  seabedImage = loadImage("assets/seabed.png");
  fishImage = loadImage("assets/clown-fish-alive.png");
  fishDeadImage = loadImage("assets/clown-fish-dead.png");
  submarineImage=loadImage("assets/submarine.png")
  algaeAnimation = loadAnimation(
    "assets/algae/algae1.png",
    "assets/algae/algae2.png",
    "assets/algae/algae1.png",
    "assets/algae/algae3.png",
    "assets/algae/algae4.png",
    "assets/algae/algae5.png",
    "assets/algae/algae6.png"
  );
  coralAnimation = loadAnimation(
    "assets/coral/coral1.png",
    "assets/coral/coral2.png",
    "assets/coral/coral3.png",
    "assets/coral/coral4.png",
    "assets/coral/coral5.png",
    "assets/coral/coral6.png"
  );

  shellAnimation = loadAnimation(
    "assets/shell/seashell1.png",
    "assets/shell/seashell2.png",
    "assets/shell/seashell3.png",
    "assets/shell/seashell2.png"
  );
  missileSpriteLoad = loadSpriteSheet("assets/explosion.png", 16, 16, 5);
  missileAnimation = loadAnimation(missileSpriteLoad);
  shootSound=loadSound("assets/laser.mp3")
  loseSound=loadSound("assets/death.wav")
  winSound=loadSound("assets/round_end.wav")
  bubblesSound=loadSound("assets/bubbles.wav")
}
