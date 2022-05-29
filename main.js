import Element from "./modules/classes/Element.js";
import Star from "./modules/classes/Star.js";
import SuperKoopa from "./modules/classes/SuperKoopa.js";
import Parakoopa from "./modules/classes/Parakoopa.js";
import YellowParakoopa from "./modules/classes/YellowParakoopa.js";
import SPAWNER from "./modules/spawner.js";
import background from "./modules/background.js";
import foreground from "./modules/foreground.js";
import sound from "./modules/sound.js";
import storyboard from "./modules/storyboard.js";
import controller from "./modules/controller.js";
import loading from "./modules/load.js";
import Mario from "./modules/classes/Mario.js";
import Level from "./modules/classes/Level.js";
import OVERWORLD from "./modules/levels/overworld.js";

// we're drawing mario on all screens
// mario can move during tutorial on exit
// draw mario but put him away OR don't draw mario at all

const FPS_INTERVAL = 1000 / 60;
const CANVAS = document.getElementById("canvas");
const CONTEXT = CANVAS.getContext("2d");

const SCREEN = {
  width: CANVAS.width,
  height: CANVAS.height,
  centerX: CANVAS.width / 2,
  centerY: CANVAS.height / 2,
};

const player = new Mario();
const elements = {
  list: [],
  timeouts: [],

  move() {
    this.list.forEach((element) => element.move());
  },

  draw() {
    this.list.forEach((element) => element.draw());
  },
};

const levels = {
  index: 0,
  list: [OVERWORLD],

  getCurrent() {
    return this.list[this.index];
  },

  goNext() {
    this.index += 1;
  },

  atEnd() {
    this.index === this.list.length - 1;
  },
};

const atlas = new Image(972, 736);
atlas.src = "images/atlas/atlas.png";
let then = Date.now();
let elapsed, now;

function runGame() {
  requestAnimationFrame(runGame);
  now = Date.now();
  elapsed = now - then;

  if (elapsed > FPS_INTERVAL) {
    then = now - (elapsed % FPS_INTERVAL);
    background.scroll();
    clearCanvas();

    if (storyboard.canPlay()) {
      if (storyboard.state !== "TUTORIAL" || !player.passedTutorial) {
        player.move();
      }

      player.draw();
      elements.move();
      elements.draw();
    } else if (storyboard.state === "DEATH") {
      elements.draw();
    } else if (storyboard.state === "PASS") {
      player.draw();
    }
  }
}

function clearCanvas() {
  CONTEXT.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

function setGame() {
  let interval = setInterval(() => {
    if (loading.length === 0) {
      controller.setup();
      sound.setup();
      runGame();
      storyboard.dispatch("play", []);
      clearInterval(interval);
    }
  }, 250);
}

window.addEventListener("load", setGame);

export {
  FPS_INTERVAL,
  elements,
  atlas,
  background,
  foreground,
  sound,
  SCREEN,
  CONTEXT,
  SPAWNER,
  controller,
  storyboard,
  Element,
  player,
  Level,
  levels,
  Parakoopa,
  SuperKoopa,
  YellowParakoopa,
  Star,
  Mario,
};
