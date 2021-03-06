import {
  FPS_INTERVAL,
  Mario,
  CONTEXT,
  SCREEN,
  Star,
  atlas,
  storyboard,
  player,
  elements,
} from "../../main.js";

class Element {
  constructor() {
    this.spriteFrame = 0;
    this.spriteRate = 0;
    this.spriteLength = 0;
    this.xPos = SCREEN.width;
    this.yPos = 0;
    this.xOff = 0;
    this.yOff = 0;
    this.time = 0;
  }

  drawImage() {
    const { width, height, xAtlas, yAtlas, xPos, yPos, spriteFrame } = this;
    CONTEXT.drawImage(
      atlas,
      xAtlas + spriteFrame * width,
      yAtlas,
      width,
      height,
      xPos,
      yPos,
      width,
      height
    );
  }

  drawSprite() {
    const { spriteFrame, spriteLength, spriteRate, time } = this;

    if (Math.round(time) % spriteRate === 0) {
      const lastFrame = spriteFrame === spriteLength - 1;
      this.spriteFrame += lastFrame ? -spriteFrame : 1;
    }
  }

  moveHitbox() {
    const { xPos, yPos, xOff, yOff } = this;
    this.xBox = xPos + xOff;
    this.yBox = yPos + yOff;
  }

  moveImage() {
    this.xPos -= this.xSpeed;
  }

  moveLinear() {
    this.xPos -= this.xSpeed;
  }

  moveWave() {
    const { yIni, waveSize, waveType, waveRate, time } = this;
    this.yPos = yIni + waveSize * Math[waveType](time * waveRate);
    this.xPos -= this.xSpeed;
  }

  moveCurve() {
    const { yIni, curveSize, curveRate, time } = this;
    this.yPos = yIni + curveSize * Math.sqrt(time * curveRate);
    this.xPos -= this.xSpeed;
  }

  detectHit() {
    let { xBox: ex1, yBox: ey1, wBox: ew, hBox: eh } = this;
    let { xBox: mx1, yBox: my1, wBox: mw, hBox: mh } = player;
    let [ex2, mx2] = [ex1 + ew, mx1 + mw];
    let [ey2, my2] = [ey1 + eh, my1 + mh];
    return !(ex1 >= mx2 || ey1 >= my2 || ex2 <= mx1 || ey2 <= my1);
  }
  offCanvas() {
    return this.xPos + this.width < 0;
  }

  draw() {
    if (storyboard.state !== "DEATH") this.drawSprite();
    this.drawImage();
  }

  move() {
    this.moveHitbox();
    this.moveImage();

    if (this instanceof Mario === false) {
      if (this.detectHit()) {
        if (this instanceof Star) {
          storyboard.dispatch("pass", [1000]);
        } else {
          storyboard.dispatch("die", [1000]);
        }
      }

      if (this.offCanvas()) {
        const index = elements.list.indexOf(this);
        elements.list.splice(index, 1);
      }
    }

    this.time += FPS_INTERVAL;
  }
}

export default Element;
