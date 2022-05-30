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
            background.change("plains");
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
      die(timeout) {
        controller.enabled = false;
        background.enabled = false;
        foreground.show("death");
        sound.reset();
        sound.play("lostALife");
        this.changeState("DEATH");

        setTimeout(() => {
          foreground.hide("death");
          foreground.show("fade");
          const next = player.lives > 0 ? "play" : "fail";
          setTimeout(() => storyboard.dispatch(next, []), timeout);
        }, 3100);
      },

      pass(timeout) {
        const beatGame = levels.atEnd();
        controller.enabled = false;
        foreground.show("pass");
        sound.reset();
        sound.play(`${beatGame ? "fortress" : "course"}Clear`);
        this.changeState("PASS");

        setTimeout(() => {
          background.enabled = false;
          foreground.hide("pass");
          foreground.show("iris");
          sound.play("irisOut");
          const next = beatGame ? "end" : "play";
          setTimeout(() => storyboard.dispatch(next, []), timeout);
        }, 8200);
      },
    },

    DEATH: {
      play() {
        player.lives -= 1;
        storyboard.playLevel();
      },

      fail() {
        player.setLives();
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

    PASS: {
      play() {
        levels.goNext();
        storyboard.playLevel();
      },

      end() {
        foreground.hide("hud");
        foreground.hide("death");
        foreground.hide("iris");
        foreground.show("end");
        sound.play("castList");
      },
    },
  },

  playLevel() {
    const level = levels.getCurrent();
    const { backgroundTheme, musicName } = level;
    elements.reset();
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
    foreground.hide("iris");
    foreground.show("level");
    sound.play(musicName);

    setTimeout(() => {
      controller.enabled = true;
      foreground.hide("level");
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
};

export default storyboard;
