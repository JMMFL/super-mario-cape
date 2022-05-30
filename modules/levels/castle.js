import { SCREEN } from "../../main.js";
import Level from "../classes/Level.js";
import SPAWNER from "../spawner.js";
import BulletBill from "../classes/BulletBill.js";
import Grinder from "../classes/Grinder.js";
import BanzaiBill from "../classes/BanzaiBill.js";
import Star from "../classes/Star.js";

const CASTLE = new Level("Doomsday", "castle", "fortress", "0.5", spawnFn);

function spawnFn() {
  const { spawnElement } = SPAWNER;

  let mid = SCREEN.centerY + 100;
  spawnElement(2, new BulletBill(mid - 2 * 56));
  spawnElement(2, new BulletBill(mid - 3 * 56));
  spawnElement(2, new BulletBill(mid - 56));
  spawnElement(2, new BulletBill(mid));
  spawnElement(2, new BulletBill(mid + 56));
  spawnElement(2, new BulletBill(mid + 2 * 56));
  spawnElement(2, new BulletBill(mid + 3 * 56));

  mid = SCREEN.centerY - 156;
  spawnElement(3, new BulletBill(mid - 2 * 56));
  spawnElement(3, new BulletBill(mid - 3 * 56));
  spawnElement(3, new BulletBill(mid - 56));
  spawnElement(3, new BulletBill(mid));
  spawnElement(3, new BulletBill(mid + 56));
  spawnElement(3, new BulletBill(mid + 2 * 56));
  spawnElement(3, new BulletBill(mid + 3 * 56));

  mid = SCREEN.centerY;
  spawnElement(4, new BulletBill(mid - 2 * 56));
  spawnElement(4, new BulletBill(mid - 3 * 56));
  spawnElement(4, new BulletBill(mid - 56));
  spawnElement(4, new BulletBill(mid));
  spawnElement(4, new BulletBill(mid + 56));
  spawnElement(4, new BulletBill(mid + 2 * 56));
  spawnElement(4, new BulletBill(mid + 3 * 56));

  spawnElement(5, new BanzaiBill(0));
  spawnElement(5, new BanzaiBill(SCREEN.height - 256));

  spawnElement(7.0, new Grinder(128 * 2));
  spawnElement(7.0, new Grinder(128 * 3));
  spawnElement(7.0, new Grinder(128 * 4));
  spawnElement(7.0, new Grinder(128 * 5));
  spawnElement(7.0, new Grinder(128 * 6));

  spawnElement(8.5, new Grinder(0));
  spawnElement(8.5, new Grinder(128));
  spawnElement(8.5, new Grinder(128 * 2));
  spawnElement(8.5, new Grinder(128 * 3));

  spawnElement(10.0, new Grinder(0));
  spawnElement(10.0, new Grinder(128 * 3));
  spawnElement(10.0, new Grinder(128 * 4));
  spawnElement(10.0, new Grinder(128 * 5));
  spawnElement(10.0, new Grinder(128 * 6));

  spawnElement(10.5, new Grinder(0));
  spawnElement(11.0, new Grinder(0));
  spawnElement(11.5, new Grinder(0));
  spawnElement(12.0, new Grinder(0));
  spawnElement(12.5, new Grinder(0));
  spawnElement(13.0, new Grinder(0));
  spawnElement(13.5, new Grinder(0));
  spawnElement(14.0, new Grinder(0));
  spawnElement(14.5, new Grinder(0));
  spawnElement(15, new Grinder(0));
  spawnElement(15, new Grinder(128));
  spawnElement(15, new Grinder(128 * 2));
  spawnElement(15, new Grinder(128 * 3));

  spawnElement(10.5, new Grinder(128 * 3));
  spawnElement(11.0, new Grinder(128 * 3));
  spawnElement(11.5, new Grinder(128 * 3));
  spawnElement(12.0, new Grinder(128 * 3));
  spawnElement(12.5, new Grinder(128 * 3));
  spawnElement(13.0, new Grinder(128 * 3));
  spawnElement(13.5, new Grinder(128 * 3));
  spawnElement(13.5, new Grinder(128 * 4));
  spawnElement(13.5, new Grinder(128 * 5));
  spawnElement(13.5, new Grinder(128 * 6));

  spawnElement(18.5, new BanzaiBill(0));
  spawnElement(19, new BanzaiBill(0));
  spawnElement(19.5, new BanzaiBill(0));
  spawnElement(20, new BanzaiBill(0));
  spawnElement(20.5, new BanzaiBill(0));

  spawnElement(15.5, new Grinder(128 * 3));
  spawnElement(16, new Grinder(128 * 3));
  spawnElement(16.5, new Grinder(128 * 3));
  spawnElement(17, new Grinder(128 * 3));
  spawnElement(17.5, new Grinder(128 * 3));
  spawnElement(18, new Grinder(128 * 3));
  spawnElement(20, new Grinder(128 * 4));
  spawnElement(20, new Grinder(128 * 5));

  spawnElement(21, new Grinder(0 - 128 / 1.5));
  spawnElement(22.75, new Grinder(0 - 128 / 1.5));
  spawnElement(24.5, new Grinder(0 - 128 / 1.5));
  spawnElement(26.25, new Grinder(0 - 128 / 1.5));
  spawnElement(28, new Grinder(0 - 128 / 1.5));
  spawnElement(29.75, new Grinder(0 - 128 / 1.5));

  spawnElement(21.85, new Grinder(128 * 1.25));
  spawnElement(23.6, new Grinder(128 * 1.25));
  spawnElement(27.1, new Grinder(128 * 1.25));

  spawnElement(21, new Grinder(SCREEN.centerY - 128 / 2));
  spawnElement(22.75, new Grinder(SCREEN.centerY - 128 / 2));
  spawnElement(24.5, new Grinder(SCREEN.centerY - 128 / 2));
  spawnElement(26.25, new Grinder(SCREEN.centerY - 128 / 2));
  spawnElement(28, new Grinder(SCREEN.centerY - 128 / 2));
  spawnElement(29.75, new Grinder(SCREEN.centerY - 128 / 2));

  spawnElement(21.85, new Grinder(128 * 3.75));
  spawnElement(23.6, new Grinder(128 * 3.75));
  spawnElement(27.1, new Grinder(128 * 3.75));

  spawnElement(21, new Grinder(128 * 5 + 128 / 2));
  spawnElement(22.75, new Grinder(128 * 5 + 128 / 2));
  spawnElement(24.5, new Grinder(128 * 5 + 128 / 2));
  spawnElement(26.25, new Grinder(128 * 5 + 128 / 2));
  spawnElement(28, new Grinder(128 * 5 + 128 / 2));
  spawnElement(29.75, new Grinder(128 * 5 + 128 / 2));

  spawnElement(32, new Star());
}

export default CASTLE;
