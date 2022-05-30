import { SCREEN } from "../../main.js";
import Level from "../classes/Level.js";
import SPAWNER from "../spawner.js";
import BooBuddy from "../classes/BooBuddy.js";
import BigBoo from "../classes/BigBoo.js";
import Eerie from "../classes/Eerie.js";
import BigBubble from "../classes/BigBubble.js";
import Star from "../classes/Star.js";

const HAUNTED = new Level("Spoooky", "haunted", "ghostHouse", 0.5, spawnFn);

function spawnFn() {
  const { spawnElement } = SPAWNER;
  spawnElement(1, new BooBuddy(100));
  spawnElement(1.1, new BooBuddy(100));
  spawnElement(1.2, new BooBuddy(100));
  spawnElement(1.3, new BooBuddy(100));

  spawnElement(1.5, new BooBuddy(500));
  spawnElement(1.6, new BooBuddy(500));
  spawnElement(1.7, new BooBuddy(500));
  spawnElement(1.8, new BooBuddy(500));

  spawnElement(1.9, new BooBuddy(300));
  spawnElement(2.0, new BooBuddy(300));
  spawnElement(2.1, new BooBuddy(300));
  spawnElement(2.2, new BooBuddy(300));

  spawnElement(2.0, new BigBoo(100));

  spawnElement(3.5, new BooBuddy(0));
  spawnElement(3.5, new BooBuddy(75));
  spawnElement(3.5, new BooBuddy(150));
  spawnElement(3.5, new BooBuddy(225));
  spawnElement(3.5, new BooBuddy(500));
  spawnElement(3.5, new BooBuddy(575));
  spawnElement(3.5, new BooBuddy(650));
  spawnElement(3.5, new BooBuddy(725));

  spawnElement(4.2, new BooBuddy(225));
  spawnElement(4.2, new BooBuddy(300));
  spawnElement(4.2, new BooBuddy(375));
  spawnElement(4.2, new BooBuddy(425));
  spawnElement(4.2, new BooBuddy(500));
  spawnElement(4.2, new BooBuddy(575));
  spawnElement(4.2, new BooBuddy(650));
  spawnElement(4.2, new BooBuddy(725));

  spawnElement(5.2, new BooBuddy(0));
  spawnElement(5.2, new BooBuddy(75));
  spawnElement(5.2, new BooBuddy(150));
  spawnElement(5.2, new BooBuddy(225));
  spawnElement(5.2, new BooBuddy(300));
  spawnElement(5.2, new BooBuddy(375));
  spawnElement(5.2, new BooBuddy(450));

  spawnElement(5.4, new BigBoo(SCREEN.centerY));
  spawnElement(6.5, new Eerie(SCREEN.centerY - 250));
  spawnElement(6.5, new Eerie(SCREEN.centerY + 150));
  spawnElement(7.5, new Eerie(SCREEN.centerY - 250));
  spawnElement(7.5, new Eerie(SCREEN.centerY + 150));
  spawnElement(8.5, new BigBubble(0));

  spawnElement(10, new BigBubble(SCREEN.centerY));
  spawnElement(10.5, new BigBubble(SCREEN.centerY));

  spawnElement(12, new BigBubble(SCREEN.centerY - 150));
  spawnElement(12.5, new BigBubble(SCREEN.centerY - 150));
  spawnElement(13.0, new BigBubble(SCREEN.centerY - 150));

  spawnElement(14.5, new BigBubble(0));
  spawnElement(14.5, new BigBubble(SCREEN.height - 200));

  spawnElement(16.0, new BigBubble(0));
  spawnElement(16.0, new BigBubble(SCREEN.height - 200));

  spawnElement(18 + 0.5, new BooBuddy(SCREEN.centerY));
  spawnElement(18.1 + 0.5, new BooBuddy(SCREEN.centerY + 125));
  spawnElement(18.1 + 0.5, new BooBuddy(SCREEN.centerY - 125));
  spawnElement(18.2 + 0.5, new BooBuddy(SCREEN.centerY + 225));
  spawnElement(18.2 + 0.5, new BooBuddy(SCREEN.centerY - 225));
  spawnElement(18.3 + 0.5, new BooBuddy(SCREEN.centerY + 125));
  spawnElement(18.3 + 0.5, new BooBuddy(SCREEN.centerY - 125));
  spawnElement(18.4 + 0.5, new BooBuddy(SCREEN.centerY));

  let mid = SCREEN.centerY - 200;
  spawnElement(19.5 + 0.5, new BooBuddy(mid + 125));
  spawnElement(19.6 + 0.5, new BooBuddy(mid));
  spawnElement(19.7 + 0.5, new BooBuddy(mid + 125));
  spawnElement(19.7 + 0.5, new BooBuddy(mid - 125));
  spawnElement(19.8 + 0.5, new BooBuddy(mid));
  spawnElement(19.9 + 0.5, new BooBuddy(mid + 125));

  mid = SCREEN.centerY + 150;
  spawnElement(21.0 + 0.5, new BooBuddy(mid - 125));
  spawnElement(21.1 + 0.5, new BooBuddy(mid));
  spawnElement(21.2 + 0.5, new BooBuddy(mid + 125));
  spawnElement(21.2 + 0.5, new BooBuddy(mid - 125));
  spawnElement(21.3 + 0.5, new BooBuddy(mid));
  spawnElement(21.4 + 0.5, new BooBuddy(mid - 125));

  mid = SCREEN.centerY;
  spawnElement(23, new BooBuddy(mid - 175));
  spawnElement(23, new BooBuddy(mid + 125));
  spawnElement(23.1, new BooBuddy(mid - 275));
  spawnElement(23.1, new BooBuddy(mid + 225));
  spawnElement(23.2, new BooBuddy(mid - 375));
  spawnElement(23.2, new BooBuddy(mid + 325));
  spawnElement(23.3, new BooBuddy(mid - 275));
  spawnElement(23.3, new BooBuddy(mid + 225));
  spawnElement(23.4, new BooBuddy(mid - 175));
  spawnElement(23.4, new BooBuddy(mid + 125));

  spawnElement(25, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.1, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.2, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.3, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.4, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.5, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.6, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.7, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.8, new Eerie(SCREEN.centerY - 225));
  spawnElement(25.9, new Eerie(SCREEN.centerY - 225));
  spawnElement(26, new Eerie(SCREEN.centerY - 225));
  spawnElement(26.1, new Eerie(SCREEN.centerY - 225));
  spawnElement(26.2, new Eerie(SCREEN.centerY - 225));
  spawnElement(26.3, new Eerie(SCREEN.centerY - 225));
  spawnElement(26.4, new Eerie(SCREEN.centerY - 225));
  spawnElement(26.5, new Eerie(SCREEN.centerY - 225));

  spawnElement(25, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.1, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.2, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.3, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.4, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.5, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.6, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.7, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.8, new Eerie(SCREEN.centerY - 300));
  spawnElement(25.9, new Eerie(SCREEN.centerY - 300));
  spawnElement(26, new Eerie(SCREEN.centerY - 300));
  spawnElement(26.1, new Eerie(SCREEN.centerY - 300));
  spawnElement(26.2, new Eerie(SCREEN.centerY - 300));
  spawnElement(26.3, new Eerie(SCREEN.centerY - 300));
  spawnElement(26.4, new Eerie(SCREEN.centerY - 300));
  spawnElement(26.5, new Eerie(SCREEN.centerY - 300));

  spawnElement(25, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.1, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.2, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.3, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.4, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.5, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.6, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.7, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.8, new Eerie(SCREEN.centerY - 375));
  spawnElement(25.9, new Eerie(SCREEN.centerY - 375));
  spawnElement(26, new Eerie(SCREEN.centerY - 375));
  spawnElement(26.1, new Eerie(SCREEN.centerY - 375));
  spawnElement(26.2, new Eerie(SCREEN.centerY - 375));
  spawnElement(26.3, new Eerie(SCREEN.centerY - 375));
  spawnElement(26.4, new Eerie(SCREEN.centerY - 375));
  spawnElement(26.5, new Eerie(SCREEN.centerY - 375));

  spawnElement(25, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.1, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.2, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.3, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.4, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.5, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.6, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.7, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.8, new Eerie(SCREEN.centerY - 450));
  spawnElement(25.9, new Eerie(SCREEN.centerY - 450));
  spawnElement(26, new Eerie(SCREEN.centerY - 450));
  spawnElement(26.1, new Eerie(SCREEN.centerY - 450));
  spawnElement(26.2, new Eerie(SCREEN.centerY - 450));
  spawnElement(26.3, new Eerie(SCREEN.centerY - 450));
  spawnElement(26.4, new Eerie(SCREEN.centerY - 450));
  spawnElement(26.5, new Eerie(SCREEN.centerY - 450));

  spawnElement(25, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.1, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.2, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.3, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.4, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.5, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.6, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.7, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.8, new Eerie(SCREEN.centerY - 525));
  spawnElement(25.9, new Eerie(SCREEN.centerY - 525));
  spawnElement(26, new Eerie(SCREEN.centerY - 525));
  spawnElement(26.1, new Eerie(SCREEN.centerY - 525));
  spawnElement(26.2, new Eerie(SCREEN.centerY - 525));
  spawnElement(26.3, new Eerie(SCREEN.centerY - 525));
  spawnElement(26.4, new Eerie(SCREEN.centerY - 525));
  spawnElement(26.5, new Eerie(SCREEN.centerY - 525));

  spawnElement(25, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.1, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.2, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.3, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.4, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.5, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.6, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.7, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.8, new Eerie(SCREEN.centerY + 225));
  spawnElement(25.9, new Eerie(SCREEN.centerY + 225));
  spawnElement(26, new Eerie(SCREEN.centerY + 225));
  spawnElement(26.1, new Eerie(SCREEN.centerY + 225));
  spawnElement(26.2, new Eerie(SCREEN.centerY + 225));
  spawnElement(26.3, new Eerie(SCREEN.centerY + 225));
  spawnElement(26.4, new Eerie(SCREEN.centerY + 225));
  spawnElement(26.5, new Eerie(SCREEN.centerY + 225));

  spawnElement(25, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.1, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.2, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.3, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.4, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.5, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.6, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.7, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.8, new Eerie(SCREEN.centerY + 300));
  spawnElement(25.9, new Eerie(SCREEN.centerY + 300));
  spawnElement(26, new Eerie(SCREEN.centerY + 300));
  spawnElement(26.1, new Eerie(SCREEN.centerY + 300));
  spawnElement(26.2, new Eerie(SCREEN.centerY + 300));
  spawnElement(26.3, new Eerie(SCREEN.centerY + 300));
  spawnElement(26.4, new Eerie(SCREEN.centerY + 300));
  spawnElement(26.5, new Eerie(SCREEN.centerY + 300));

  spawnElement(25, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.1, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.2, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.3, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.4, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.5, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.6, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.7, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.8, new Eerie(SCREEN.centerY + 375));
  spawnElement(25.9, new Eerie(SCREEN.centerY + 375));
  spawnElement(26, new Eerie(SCREEN.centerY + 375));
  spawnElement(26.1, new Eerie(SCREEN.centerY + 375));
  spawnElement(26.2, new Eerie(SCREEN.centerY + 375));
  spawnElement(26.3, new Eerie(SCREEN.centerY + 375));
  spawnElement(26.4, new Eerie(SCREEN.centerY + 375));
  spawnElement(26.5, new Eerie(SCREEN.centerY + 375));

  spawnElement(25, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.1, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.2, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.3, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.4, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.5, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.6, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.7, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.8, new Eerie(SCREEN.centerY + 450));
  spawnElement(25.9, new Eerie(SCREEN.centerY + 450));
  spawnElement(26, new Eerie(SCREEN.centerY + 450));
  spawnElement(26.1, new Eerie(SCREEN.centerY + 450));
  spawnElement(26.2, new Eerie(SCREEN.centerY + 450));
  spawnElement(26.3, new Eerie(SCREEN.centerY + 450));
  spawnElement(26.4, new Eerie(SCREEN.centerY + 450));
  spawnElement(26.5, new Eerie(SCREEN.centerY + 450));

  spawnElement(25, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.1, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.2, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.3, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.4, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.5, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.6, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.7, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.8, new Eerie(SCREEN.centerY + 525));
  spawnElement(25.9, new Eerie(SCREEN.centerY + 525));
  spawnElement(26, new Eerie(SCREEN.centerY + 525));
  spawnElement(26.1, new Eerie(SCREEN.centerY + 525));
  spawnElement(26.2, new Eerie(SCREEN.centerY + 525));
  spawnElement(26.3, new Eerie(SCREEN.centerY + 525));
  spawnElement(26.4, new Eerie(SCREEN.centerY + 525));
  spawnElement(26.5, new Eerie(SCREEN.centerY + 525));

  spawnElement(25, new Star());
}

export default HAUNTED;
