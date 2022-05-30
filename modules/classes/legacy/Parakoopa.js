import YellowParakoopa from "../YellowParakoopa.js";
import RedParakoopa from "../RedParakoopa.js";
import BlueParakoopa from "../BlueParakoopa.js";
import GreenParakoopa from "../GreenParakoopa.js";

class Parakoopa {
  constructor(yIni, color) {
    let Kind = YellowParakoopa;

    switch (color) {
      case "red":
        Kind = RedParakoopa;
        break;
      case "yellow":
        Kind = YellowParakoopa;
        break;
      case "blue":
        Kind = BlueParakoopa;
        break;
      case "green":
        Kind = GreenParakoopa;
        break;
    }

    return new Kind(yIni);
  }
}

export default Parakoopa;
