import { Element } from "../../main.js";

class BulletBill extends Element {
  constructor(yIni) {
    super();

    this.width = 64;
    this.height = 56;
    this.xAtlas = 184;
    this.yAtlas = 0;
    this.xSpeed = 20;
    this.yPos = yIni;
    this.wBox = 64;
    this.hBox = 56;
  }

  moveImage() {
    this.moveLinear();
  }
}

export default BulletBill;
