const sound = {
  enabled: false,

  library: {
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
