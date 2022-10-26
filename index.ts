#!/usr/bin/env node

import * as readline from 'readline';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('who are you?', (answer) => {
    console.log(`Hello ${answer}`);
});

