class Submarine {
  constructor() {
    this.x = 700;
    this.y = 750;
    this.velocity = 4;
  }

  setup() {
    this.submarineSprite = createSprite(this.x, this.y);
    this.submarineSprite.addImage(submarineImage);
    this.submarineSprite.scale = 0.035;
    this.submarineSprite.immovable=true
    this.missiles = new Group();
  }

  draw() {
    this.keyIsDown();
    // this.missiles.forEach(missile=>missile.draw())
  }

  keyIsDown() {
    if (keyIsDown(RIGHT_ARROW)) {
      this.submarineSprite.rotation += 3;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.submarineSprite.rotation -= 3;
    } else if (keyIsDown(UP_ARROW)) {
      this.submarineSprite.position.y -=
        cos(this.submarineSprite.rotation) * this.velocity;
      this.submarineSprite.position.x +=
        sin(this.submarineSprite.rotation) * this.velocity;
    }
  }

  createMissile() {
    let missileSprite = createSprite(
      this.submarineSprite.position.x,
      this.submarineSprite.position.y
    );
    missileSprite.addAnimation("missile", missileAnimation);
    missileSprite.rotation = this.submarineSprite.rotation;
    missileSprite.setSpeed(10,missileSprite.rotation-90);
    this.missiles.add(missileSprite);
  }

  keyPressed() {
    if (keyCode === 32) {
      this.createMissile();
      shootSound.play()
      // let newMissile =  new Missile(this.sprite.position.x, this.sprite.position.y,this.sprite.rotation)
      // newMissile.setup()
      // this.missiles.push(
      //   newMissile
      // );
    }
  }
}
