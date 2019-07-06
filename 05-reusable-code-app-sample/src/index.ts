import fs from 'fs';

const matches = fs.readFileSync('data/football.csv', {
  encoding: 'utf-8'
});

console.log(matches);
