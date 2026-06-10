#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { gameRules, getGameData } from '../src/games/gcd.js';

startGame(gameRules, getGameData);

