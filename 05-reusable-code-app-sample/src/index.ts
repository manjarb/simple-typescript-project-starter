import { MatchReader } from './interfaces-method/MatchReader';
import { CsvFileReader } from './interfaces-method/CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';

// const reader = new MatchReader('data/football.csv');
// reader.read();

const csvFileReader = new CsvFileReader('data/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  // new ConsoleReport()
  new HtmlReport()
);

summary.buildAndPrintReport(matchReader.matches);
