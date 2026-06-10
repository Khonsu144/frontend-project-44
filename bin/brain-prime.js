#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { gameRules, getGameData } from '../src/games/prime.js';

startGame(gameRules, getGameData);

