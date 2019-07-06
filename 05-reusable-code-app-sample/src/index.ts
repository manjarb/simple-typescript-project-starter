import { MatchResult } from './MatchResult';
import { MatchReader } from './interfaces-method/MatchReader';
import { CsvFileReader } from './interfaces-method/CsvFileReader';

// const reader = new MatchReader('data/football.csv');
// reader.read();

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const printMatchResult = (match: string[]): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   }

//   return MatchResult.AwayWin;
// };

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won: ${manUnitedWins}`);
