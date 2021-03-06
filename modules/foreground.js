import { levels, player } from "../main.js";

const foreground = {
  screens: {
    iris: document.getElementById("iris"),
    fade: document.getElementById("fade"),
    menu: document.getElementById("menu"),
    tutorial: document.getElementById("tutorial"),
    loader: document.getElementById("loader"),
    level: document.getElementById("level"),
    pass: document.getElementById("pass"),
    death: document.getElementById("death"),
    fail: document.getElementById("fail"),
    hud: document.getElementById("hud"),
    end: document.getElementById("end"),
  },

  show(screenName) {
    const screen = this.screens[screenName];

    switch (screen) {
      case fade:
        screen.classList.add("fade-active");
        break;
      case level:
        const { name } = levels.getCurrent();
        screen.innerText = `${name}`;
        break;
      case pass:
        const type = levels.atEnd() ? "Fortress" : "Course";
        pass.innerText = `${type} Clear!`;
        break;
      case hud:
        const { lives } = player;
        hud.innerText = lives;
        break;
      case death:
        const { xBox, wBox, yPos } = player;
        const centerX = xBox + wBox / 2;
        death.style.backgroundPosition = `${centerX}px ${yPos}px`;
        setTimeout(() => death.classList.add("falling"), 500);
        break;
    }

    screen.classList.remove("hidden");
  },

  hide(screenName) {
    const screen = this.screens[screenName];

    switch (screen) {
      case fade:
        screen.classList.remove("fade-active");
        break;
      case death:
        screen.classList.remove("falling");
        break;
    }

    screen.classList.add("hidden");
  },
};

export default foreground;
