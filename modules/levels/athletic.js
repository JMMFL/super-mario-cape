import { SCREEN } from "../../main.js";
import Level from "../classes/Level.js";
import SPAWNER from "../spawner.js";
import Parakoopa from "../classes/legacy/Parakoopa.js";
import FlyingBrother from "../classes/FlyingBrother.js";
import Chainsaw from "../classes/Chainsaw.js";
import Star from "../classes/Star.js";

const ATHLETIC = new Level(
  "Koopa Dragon",
  "athletic",
  "athletic",
  "0.5",
  spawnFn
);

function spawnFn() {
  const { spawnElement } = SPAWNER;
  spawnElement(1.5, new Parakoopa(SCREEN.centerY, "green"));
  spawnElement(1.5, new Parakoopa(SCREEN.centerY, "blue", true));
  spawnElement(2.5, new Parakoopa(100, "green"));
  spawnElement(2.5, new Parakoopa(100, "blue", true));
  spawnElement(3.5, new Parakoopa(550, "green"));
  spawnElement(3.5, new Parakoopa(550, "blue", true));
  spawnElement(4.0, new Parakoopa(100, "green"));
  spawnElement(4.25, new Parakoopa(100, "green"));
  spawnElement(4.5, new Parakoopa(100, "green"));
  spawnElement(4.75, new Parakoopa(100, "green"));
  spawnElement(5.25, new Parakoopa(550, "blue", true));
  spawnElement(5.5, new Parakoopa(550, "blue", true));
  spawnElement(5.75, new Parakoopa(550, "blue", true));
  spawnElement(6, new Parakoopa(550, "blue", true));
  spawnElement(6.75, new FlyingBrother(SCREEN.centerY - 350));
  spawnElement(7.0, new FlyingBrother(SCREEN.centerY - 350));
  spawnElement(7.25, new FlyingBrother(SCREEN.centerY - 350));
  spawnElement(7.5, new FlyingBrother(SCREEN.centerY - 350));
  spawnElement(7.75, new FlyingBrother(SCREEN.centerY - 350));
  spawnElement(8, new FlyingBrother(SCREEN.centerY - 350));

  spawnElement(7, new Chainsaw(SCREEN.centerY - 300));
  spawnElement(7, new Chainsaw(SCREEN.centerY + 200));
  spawnElement(7.25, new Chainsaw(SCREEN.centerY - 300));
  spawnElement(7.25, new Chainsaw(SCREEN.centerY + 200));
  spawnElement(7.5, new Chainsaw(SCREEN.centerY - 300));
  spawnElement(7.5, new Chainsaw(SCREEN.centerY + 200));
  spawnElement(7.75, new Chainsaw(SCREEN.centerY - 300));
  spawnElement(7.75, new Chainsaw(SCREEN.centerY + 200));

  spawnElement(8, new Chainsaw(SCREEN.centerY - 350));
  spawnElement(8, new Chainsaw(SCREEN.centerY + 150));
  spawnElement(8.25, new Chainsaw(SCREEN.centerY - 350));
  spawnElement(8.25, new Chainsaw(SCREEN.centerY + 150));
  spawnElement(8.5, new Chainsaw(SCREEN.centerY - 350));
  spawnElement(8.5, new Chainsaw(SCREEN.centerY + 150));
  spawnElement(8.75, new Chainsaw(SCREEN.centerY - 350));
  spawnElement(8.75, new Chainsaw(SCREEN.centerY + 150));

  spawnElement(9, new Chainsaw(SCREEN.centerY - 400));
  spawnElement(9, new Chainsaw(SCREEN.centerY + 100));
  spawnElement(9.25, new Chainsaw(SCREEN.centerY - 400));
  spawnElement(9.25, new Chainsaw(SCREEN.centerY + 100));
  spawnElement(9.5, new Chainsaw(SCREEN.centerY - 400));
  spawnElement(9.5, new Chainsaw(SCREEN.centerY + 100));
  spawnElement(9.75, new Chainsaw(SCREEN.centerY - 400));
  spawnElement(9.75, new Chainsaw(SCREEN.centerY + 100));

  spawnElement(10, new Chainsaw(SCREEN.centerY - 450));
  spawnElement(10, new Chainsaw(SCREEN.centerY + 50));
  spawnElement(10.25, new Chainsaw(SCREEN.centerY - 450));
  spawnElement(10.25, new Chainsaw(SCREEN.centerY + 50));
  spawnElement(10.5, new Chainsaw(SCREEN.centerY - 450));
  spawnElement(10.5, new Chainsaw(SCREEN.centerY + 50));
  spawnElement(10.75, new Chainsaw(SCREEN.centerY - 450));
  spawnElement(10.75, new Chainsaw(SCREEN.centerY + 50));

  spawnElement(11, new Chainsaw(SCREEN.centerY - 500));
  spawnElement(11, new Chainsaw(SCREEN.centerY));
  spawnElement(11.25, new Chainsaw(SCREEN.centerY - 500));
  spawnElement(11.25, new Chainsaw(SCREEN.centerY));
  spawnElement(11.5, new Chainsaw(SCREEN.centerY - 500));
  spawnElement(11.5, new Chainsaw(SCREEN.centerY));
  spawnElement(11.75, new Chainsaw(SCREEN.centerY - 500));
  spawnElement(11.75, new Chainsaw(SCREEN.centerY));

  spawnElement(12, new Chainsaw(SCREEN.centerY - 600));
  spawnElement(12, new Chainsaw(SCREEN.centerY - 50));
  spawnElement(12.25, new Chainsaw(SCREEN.centerY - 600));
  spawnElement(12.25, new Chainsaw(SCREEN.centerY - 50));
  spawnElement(12.5, new Chainsaw(SCREEN.centerY - 600));
  spawnElement(12.5, new Chainsaw(SCREEN.centerY - 50));
  spawnElement(12.75, new Chainsaw(SCREEN.centerY - 600));
  spawnElement(12.75, new Chainsaw(SCREEN.centerY - 50));

  spawnElement(13.25, new Chainsaw(176));
  spawnElement(13.75, new Chainsaw(176 * 2));
  spawnElement(14.25, new Chainsaw(176 * 3));
  spawnElement(14.75, new Chainsaw(176 * 4));
  spawnElement(15.25, new Chainsaw(176 * 5));

  spawnElement(14.5, new Chainsaw(0));
  spawnElement(15, new Chainsaw(176));
  spawnElement(15.5, new Chainsaw(176 * 2));

  spawnElement(13.25, new Chainsaw(176));
  spawnElement(13.75, new Chainsaw(176 * 2));
  spawnElement(14.25, new Chainsaw(176 * 3));
  spawnElement(14.75, new Chainsaw(176 * 4));
  spawnElement(15.25, new Chainsaw(176 * 5));

  spawnElement(15.75, new Chainsaw(176 * 5));
  spawnElement(16.25, new Chainsaw(176 * 4));
  spawnElement(16.75, new Chainsaw(176 * 3));
  spawnElement(17.25, new Chainsaw(176 * 2));
  spawnElement(17.75, new Chainsaw(176));

  spawnElement(20.5, new Chainsaw(176 * 4));
  spawnElement(23, new Chainsaw(176 * 4));
  spawnElement(20.5, new Chainsaw(176 * 3));
  spawnElement(23, new Chainsaw(176 * 3));

  //
  spawnElement(23.0, new Parakoopa(SCREEN.centerY - 400, "blue"));
  spawnElement(23.0, new Parakoopa(SCREEN.centerY - 300, "blue"));
  spawnElement(23.0, new Parakoopa(SCREEN.centerY - 200, "blue"));
  spawnElement(23.1, new Parakoopa(SCREEN.centerY - 400, "green"));
  spawnElement(23.1, new Parakoopa(SCREEN.centerY - 300, "green"));
  spawnElement(23.1, new Parakoopa(SCREEN.centerY - 200, "green"));
  spawnElement(23.2, new Parakoopa(SCREEN.centerY - 400, "blue"));
  spawnElement(23.2, new Parakoopa(SCREEN.centerY - 300, "blue"));
  spawnElement(23.2, new Parakoopa(SCREEN.centerY - 200, "blue"));
  spawnElement(23.3, new Parakoopa(SCREEN.centerY - 400, "green"));
  spawnElement(23.3, new Parakoopa(SCREEN.centerY - 300, "green"));
  spawnElement(23.3, new Parakoopa(SCREEN.centerY - 200, "green"));
  spawnElement(23.4, new Parakoopa(SCREEN.centerY - 400, "blue"));
  spawnElement(23.4, new Parakoopa(SCREEN.centerY - 300, "blue"));
  spawnElement(23.4, new Parakoopa(SCREEN.centerY - 200, "blue"));
  spawnElement(23.5, new Parakoopa(SCREEN.centerY - 400, "green"));
  spawnElement(23.5, new Parakoopa(SCREEN.centerY - 300, "green"));
  spawnElement(23.5, new Parakoopa(SCREEN.centerY - 200, "green"));
  spawnElement(23.6, new Parakoopa(SCREEN.centerY - 400, "blue"));
  spawnElement(23.6, new Parakoopa(SCREEN.centerY - 300, "blue"));
  spawnElement(23.6, new Parakoopa(SCREEN.centerY - 200, "blue"));
  spawnElement(23.7, new Parakoopa(SCREEN.centerY - 400, "green"));
  spawnElement(23.7, new Parakoopa(SCREEN.centerY - 300, "green"));
  spawnElement(23.7, new Parakoopa(SCREEN.centerY - 200, "green"));

  spawnElement(25.0, new FlyingBrother(-300));
  spawnElement(25.25, new FlyingBrother(-300));
  spawnElement(25.5, new FlyingBrother(-300));
  spawnElement(25.75, new FlyingBrother(-300));
  spawnElement(26, new FlyingBrother(-300));
  spawnElement(26.25, new FlyingBrother(-300));

  spawnElement(25.0, new FlyingBrother(220));
  spawnElement(25.25, new FlyingBrother(220));
  spawnElement(25.5, new FlyingBrother(220));
  spawnElement(25.75, new FlyingBrother(220));
  spawnElement(26, new FlyingBrother(220));
  spawnElement(26.25, new FlyingBrother(220));

  spawnElement(28, new Star());
}

export default ATHLETIC;
