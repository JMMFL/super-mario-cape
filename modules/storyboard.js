import {
  levels,
  background,
  foreground,
  sound,
  player,
  controller,
  elements,
} from "../main.js";

const storyboard = {
  state: "LOAD",

  transitions: {
    LOAD: {
      play(timeout) {
        background.enabled = true;
        background.element.style.backgroundPositionX = 0;
        background.change("menu");

        setTimeout(() => {
          foreground.hide("loader");
          this.changeState("START");
        }, timeout);
      },
    },

    START: {
      play(timeout) {
        foreground.show("fade");
        sound.reset();
        sound.play("coin");

        setTimeout(() => {
          if (player.passedTutorial) {
            storyboard.playLevel();
          } else {
            player.reset();
            controller.enabled = true;
            background.change("athletic");
            foreground.hide("menu");
            foreground.hide("fade");
            foreground.show("tutorial");
            sound.play("worldClear");
            this.changeState("TUTORIAL");
          }
        }, timeout);
      },
    },

    TUTORIAL: {
      play(timeout) {
        controller.enabled = false;
        foreground.show("fade");
        sound.reset();
        sound.play("coin");

        setTimeout(storyboard.playLevel, timeout);
      },
    },

    LEVEL: {
      play(timeout) {
        controller.enabled = false;
        background.enabled = false;
        foreground.show("death");
        sound.reset();
        sound.play("lostALife");
        this.changeState("DEATH");

        setTimeout(() => {
          foreground.hide("death");
          foreground.show("fade");

          if (player.lives > 0) {
            setTimeout(() => storyboard.dispatch("play", []), timeout);
          } else {
            setTimeout(() => storyboard.dispatch("fail", []), timeout);
          }
        }, 3100);
      },
    },

    DEATH: {
      play() {
        player.lives -= 1;
        storyboard.playLevel();
      },

      fail() {
        foreground.hide("hud");
        foreground.hide("fade");
        foreground.show("fail");
        sound.play("gameOver");

        setTimeout(() => {
          foreground.show("fade");
          setTimeout(() => {
            background.enabled = true;
            background.change("menu");
            foreground.hide("fail");
            foreground.hide("fade");
            foreground.show("menu");
            sound.play("title");
            this.changeState("START");
          }, 1000);
        }, 6500);
      },
    },
  },

  playLevel() {
    const level = levels.getCurrent();
    const { backgroundTheme, musicName } = level;
    elements.timeouts.length = 0;
    elements.list.length = 0;
    player.isDead = false;
    player.gotStar = false;

    player.reset();
    controller.reset();
    background.enabled = true;
    background.change(backgroundTheme);
    foreground.hide("menu");
    foreground.hide("tutorial");
    foreground.hide("death");
    foreground.hide("fade");
    foreground.show("text");
    sound.play(musicName);

    setTimeout(() => {
      controller.enabled = true;
      foreground.hide("text");
      foreground.show("hud");
      level.spawnFn();
      storyboard.changeState("LEVEL");
    }, 1000);
  },

  dispatch(actionName, ...args) {
    const action = this.transitions[this.state][actionName];

    if (action) {
      action.apply(storyboard, ...args);
    } else {
      console.log(
        `Action '${actionName}' for state '${this.state}' does not exist.`
      );
    }
  },

  changeState(newState) {
    this.state = newState;
  },

  canPlay() {
    return this.state === "TUTORIAL" || this.state === "LEVEL";
  },

  passedTutorial() {
    return this.state === "TUTORIAL" && player.passedTutorial;
  },
};

export default storyboard;
