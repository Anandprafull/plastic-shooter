class Missile {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.velocity = 4;
  }

  setup() {
    this.sprite = createSprite(this.x, this.y);
    this.sprite.addAnimation("missile", missileAnimation);
  }

  draw() {
    this.sprite.position.y -= cos(this.rotation) * this.velocity;
    this.sprite.position.x += sin(this.rotation) * this.velocity;
  }
}
