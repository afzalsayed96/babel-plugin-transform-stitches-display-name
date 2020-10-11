import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from '@babel/core';

function trim(str) {
  return str.replace(/^\s+|\s+$/, '');
}

describe('', () => {
  const fixturesDir = path.join(__dirname, 'fixtures', 'display-name');
  fs.readdirSync(fixturesDir).map((caseName) => {
    const fixtureDir = path.join(fixturesDir, caseName);
    const inputPath = path.join(fixtureDir, 'input.js');
    
    if (fs.existsSync(inputPath)) {
      it(`works for ${caseName.split('-').join(' ')}`, () => {
        const input = transformFileSync(inputPath).code;
        const output = fs.readFileSync(
          path.join(fixtureDir, 'output.js')
          ).toString();
          
          assert.equal(trim(input), trim(output));
        });
      }
  });
});
