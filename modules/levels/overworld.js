import { SCREEN } from "../../main.js";
import SPAWNER from "../spawner.js";
import Level from "../classes/Level.js";
import YellowParakoopa from "../classes/YellowParakoopa.js";
import RedSuperKoopa from "../classes/RedSuperKoopa.js";
import YellowSuperKoopa from "../classes/YellowSuperKoopa.js";
import FlyingGoomba from "../classes/FlyingGoomba.js";
import Star from "../classes/Star.js";

const OVERWORLD = new Level(
  "Creative Name",
  "overworld",
  "overworld",
  0.5,
  spawnFn
);

function spawnFn() {
  SPAWNER.makeCol(YellowSuperKoopa, 3, 0, 1);
  SPAWNER.makeOne(RedSuperKoopa, 100, 2.5);
  SPAWNER.makeOne(RedSuperKoopa, 600, 2.5);
  SPAWNER.makeOne(YellowParakoopa, 400, 5);
  SPAWNER.makeOne(FlyingGoomba, 250, 6);
  SPAWNER.makeRow(YellowParakoopa, 6, 350, 8);
  SPAWNER.makeCol(FlyingGoomba, 5, 0, 11);
  SPAWNER.makeCol(FlyingGoomba, 5, 300, 13);
  SPAWNER.makeRow(YellowSuperKoopa, 5, 100, 16);
  SPAWNER.makeRow(FlyingGoomba, 3, 625, 18);
  SPAWNER.makeRow(FlyingGoomba, 2, 200, 18.5);
  SPAWNER.makeRow(RedSuperKoopa, 11, 100, 18.5);
  SPAWNER.makeRow(YellowParakoopa, 3, 100, 22);
  SPAWNER.makeRow(YellowParakoopa, 4, 500, 24.5);
  SPAWNER.makeOne(Star, SCREEN.centerY, 26);
}

export default OVERWORLD;
