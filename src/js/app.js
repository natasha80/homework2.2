import { Game, GameSavingData, readGameSaving, writeGameSaving } from './app.js';
import { loadGame, saveGame} from './app.js';

console.log(GameSavingData);
console.log(readGameSaving);
console.log(writeGameSaving);
console.log(loadGame);
console.log(saveGame);

console.log('app worked');

const game = new Game();
game.start();

import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

