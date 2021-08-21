import { game, elements, CANVAS_MID_Y, Elements} from "../main.js";

let { SuperKoopa, Parakoopa, FlyingGoomba, FlyingBrother,
    Chainsaw, BigBoo, BigBubble, BooBuddy, Eerie, BanzaiBill,
    BulletBillDiagonal, BulletBillLinear, Grinder, Star } = Elements;

class Level {
    constructor(backgroundPosY, audio, volume) {
        this.backgroundPosY = backgroundPosY;
        this.audio = new Audio(`sounds/${audio}.mp3`);
        this.volume = volume;
    }
}

const OVERWORLD = new Level(-760, "overworld", 0.4);
const ATHLETIC = new Level(-1520, "athletic", 0.45);
const HAUNTED = new Level(-2280, "spooky", 0.35);
const CASTLE = new Level(-3040, "castle", 0.8);

OVERWORLD.spawn = () => {
    spawnElement(1, new SuperKoopa(CANVAS_MID_Y, "red"));
    spawnElement(1.5, new Grinder(CANVAS_MID_Y));
    spawnElement(2, new Grinder(CANVAS_MID_Y));
    spawnElement(2.5, new Grinder(CANVAS_MID_Y));
    spawnElement(3, new Grinder(CANVAS_MID_Y));
    spawnElement(6, new Grinder(CANVAS_MID_Y));
    
    spawnElement(6, new Star());
}

ATHLETIC.spawn = () => {
    spawnElement(1, new Parakoopa(300, "green"));
    spawnElement(2, new Parakoopa(300, "blue"));
    spawnElement(3, new FlyingGoomba(300));
    spawnElement(3, new FlyingBrother(0));
    spawnElement(3, new Chainsaw(400));
    spawnElement(4, new Grinder(300));
    spawnElement(6, new Star());   
}

HAUNTED.spawn = () => {
    spawnElement(1, new BooBuddy(300));
    spawnElement(1, new BooBuddy(100));
    spawnElement(1, new BooBuddy(700));
    spawnElement(2, new BigBoo(300));
    spawnElement(3, new BigBubble(300));
    spawnElement(4, new Eerie(300));
    spawnElement(6, new Star());
}

CASTLE.spawn = () => {
    spawnElement(1, new BulletBillLinear(300));
    spawnElement(2, new BulletBillDiagonal("up"));
    spawnElement(3, new BulletBillDiagonal("down"));
    spawnElement(4, new BanzaiBill(300));
    spawnElement(5, new Grinder(300));
    spawnElement(6, new Star());
}

function spawnElement(delay, element) {
    let timeout = setTimeout(() => elements.push(element), delay * 1000);
    game.timeouts.push(timeout);
}

const LEVELS = [OVERWORLD, ATHLETIC, HAUNTED, CASTLE];

export {Level, LEVELS};