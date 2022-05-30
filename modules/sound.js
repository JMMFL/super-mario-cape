const sound = {
  enabled: false,

  library: {
    overworld: new Audio("audio/music/overworld.mp3"),
    ghostHouse: new Audio("audio/music/ghost-house.mp3"),
    athletic: new Audio("audio/music/athletic.mp3"),
    castList: new Audio("audio/music/cast-list.mp3"),
    courseClear: new Audio("audio/music/course-clear.wav"),
    fortressClear: new Audio("audio/music/fortress-clear.wav"),
    worldClear: new Audio("audio/music/world-clear.mp3"),
    lostALife: new Audio("audio/music/lost-a-life.wav"),
    coin: new Audio("audio/sfx/coin.wav"),
    irisOut: new Audio("audio/sfx/iris-out.wav"),
    capeJump: new Audio("audio/sfx/cape-jump.wav"),
    messageBlock: new Audio("audio/sfx/message-block.wav"),
    gameOver: new Audio("audio/music/game-over.wav"),
    title: new Audio("audio/music/title.mp3"),
    yoshisIsland: new Audio("audio/music/yoshis-island.mp3"),
  },

  setup() {
    const soundBtn = document.getElementById("sound-btn");
    soundBtn.addEventListener("click", () => {
      this.toggle();
      const { enabled } = this;
      this.library.title[enabled ? "play" : "pause"]();
      soundBtn.value = `Sound: ${enabled ? "On!" : "Off"}`;
    });
  },

  play(soundName) {
    if (!this.enabled) return;

    const sound = this.library[soundName];

    if (sound) {
      sound.play();
    } else {
      console.log(`Sound '${soundName}' does not exist.`);
    }
  },

  reset() {
    if (!this.enabled) return;

    const sounds = [...Object.values(this.library)];
    sounds.forEach((sound) => {
      sound.pause();
      sound.currentTime = 0;
    });
  },

  toggle() {
    this.enabled = !this.enabled;
  },
};

export default sound;
