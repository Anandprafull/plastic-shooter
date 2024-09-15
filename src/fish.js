class Fish {
  constructor() {
    this.x = (Math.random() * (WIDTH/2))+200;
    this.y = (Math.random() * (HEIGHT/2))+200;
    this.gravity = 0.05;
    this.velocity = 0;
    this.collisionAngle = 0;
    this.healthPoints =6;

  }

  setup() {
    this.fishSprite = createSprite(this.x, this.y);
    this.fishSprite.addImage(fishImage, 30, 30);
    this.fishSprite.scale = 0.1;
    this.fishSprite.setSpeed(1, this.fishSprite.rotation);
  }
  
  draw() {
    console.log(this.fishSprite.rotation)
    this.move();
  }

  move() {
    // this.fishSprite.setSpeed(3);

    if (frameCount > 120 && frameCount % 240 === 0) {
      // this.fishSprite.rotation = random(360);
    }
    if (
      this.fishSprite.position.x > WIDTH - 200 
    ) {
      this.fishSprite.position.x = WIDTH - 200
      this.fishSprite.rotation += 180;
      this.fishSprite.setSpeed(3, this.fishSprite.rotation);
    }else  if (

      this.fishSprite.position.y > HEIGHT - 200
    ) {
      console.log("flip")
      this.fishSprite.position.y = HEIGHT - 200
      this.fishSprite.rotation += 180;
      this.fishSprite.setSpeed(3, this.fishSprite.rotation);
    } else if (
    
      this.fishSprite.position.y < 200
    ) {
      this.fishSprite.position.y = 200

      console.log("flip")

      this.fishSprite.rotation -= 180;
      this.fishSprite.setSpeed(3, this.fishSprite.rotation);
    }
    else if (
      this.fishSprite.position.x < 200 
    ) {
      console.log("flip")
      this.fishSprite.position.x = 200
      
      this.fishSprite.rotation -= 180;
      this.fishSprite.setSpeed(3, this.fishSprite.rotation);
    }
  }
}
