#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { gameRules, getGameData } from '../src/games/progression.js';

startGame(gameRules, getGameData);