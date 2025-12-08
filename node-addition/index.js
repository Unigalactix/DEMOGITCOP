#!/usr/bin/env node
import process from 'node:process';

function parseArg(i) {
  const v = parseFloat(process.argv[i]);
  if (Number.isNaN(v)) {
    console.error('Invalid number input');
    process.exit(1);
  }
  return v;
}

const a = parseArg(2);
const b = parseArg(3);
console.log(a + b);
