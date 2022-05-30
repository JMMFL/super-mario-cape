import SPAWNER from "../spawner.js";
import Level from "../classes/Level.js";
import FlyingGoomba from "../classes/FlyingGoomba.js";
import SuperKoopa from "../classes/legacy/SuperKoopa.js";
import Parakoopa from "../classes/legacy/Parakoopa.js";
import Star from "../classes/Star.js";

const OVERWORLD = new Level(
  "The Basics",
  "overworld",
  "overworld",
  0.5,
  spawnFn
);

function spawnFn() {
  const { spawnElement } = SPAWNER;

  spawnElement(1, new SuperKoopa(0, "yellow"));
  spawnElement(1, new SuperKoopa(100, "yellow"));
  spawnElement(1, new SuperKoopa(200, "yellow"));
  spawnElement(2.5, new SuperKoopa(600, "red"));
  spawnElement(2.5, new SuperKoopa(100, "red"));
  spawnElement(4, new Parakoopa(300, "red"));
  spawnElement(5, new Parakoopa(400, "yellow"));
  spawnElement(6, new FlyingGoomba(250));
  spawnElement(8, new Parakoopa(350, "yellow"));
  spawnElement(8.5, new Parakoopa(300, "yellow"));
  spawnElement(9, new Parakoopa(300, "yellow"));
  spawnElement(9.5, new Parakoopa(300, "yellow"));
  spawnElement(10, new Parakoopa(300, "yellow"));
  spawnElement(10.5, new Parakoopa(300, "yellow"));
  spawnElement(11, new FlyingGoomba(0));
  spawnElement(11, new FlyingGoomba(100));
  spawnElement(11, new FlyingGoomba(200));
  spawnElement(11, new FlyingGoomba(300));
  spawnElement(11, new FlyingGoomba(400));
  spawnElement(13, new FlyingGoomba(250));
  spawnElement(13, new FlyingGoomba(350));
  spawnElement(13, new FlyingGoomba(450));
  spawnElement(13, new FlyingGoomba(550));
  spawnElement(13, new FlyingGoomba(650));
  spawnElement(16, new SuperKoopa(100, "yellow"));
  spawnElement(16.25, new SuperKoopa(100, "yellow"));
  spawnElement(16.5, new SuperKoopa(100, "yellow"));
  spawnElement(16.75, new SuperKoopa(100, "yellow"));
  spawnElement(17, new SuperKoopa(100, "yellow"));
  spawnElement(18.5, new FlyingGoomba(200));
  spawnElement(19.5, new FlyingGoomba(200));
  spawnElement(18, new FlyingGoomba(625));
  spawnElement(19, new FlyingGoomba(625));
  spawnElement(20, new FlyingGoomba(625));
  spawnElement(18.5, new SuperKoopa(100, "red"));
  spawnElement(18.75, new SuperKoopa(100, "red"));
  spawnElement(19, new SuperKoopa(100, "red"));
  spawnElement(19.25, new SuperKoopa(100, "red"));
  spawnElement(19.5, new SuperKoopa(100, "red"));
  spawnElement(19.75, new SuperKoopa(100, "red"));
  spawnElement(20, new SuperKoopa(100, "red"));
  spawnElement(20.25, new SuperKoopa(100, "red"));
  spawnElement(20.5, new SuperKoopa(100, "red"));
  spawnElement(20.75, new SuperKoopa(100, "red"));
  spawnElement(21, new SuperKoopa(100, "red"));
  spawnElement(22, new Parakoopa(100, "yellow"));
  spawnElement(22.5, new Parakoopa(100, "yellow"));
  spawnElement(23, new Parakoopa(100, "yellow"));
  spawnElement(24.5, new Parakoopa(500, "red"));
  spawnElement(25, new Parakoopa(500, "red"));
  spawnElement(25.5, new Parakoopa(500, "red"));
  spawnElement(26, new Parakoopa(500, "red"));
  spawnElement(27, new Star());
}

export default OVERWORLD;
