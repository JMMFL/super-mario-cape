import RedSuperKoopa from "../RedSuperKoopa.js";
import YellowSuperKoopa from "../YellowSuperKoopa.js";

class SuperKoopa {
  constructor(yIni, color) {
    return color === "yellow"
      ? new YellowSuperKoopa(yIni)
      : new RedSuperKoopa(yIni);
  }
}

export default SuperKoopa;
