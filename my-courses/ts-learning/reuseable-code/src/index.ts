import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { Summary } from './Summary'
import { WinAnalysis } from './analyzers/WinAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReport'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)

const summary = new Summary(new WinAnalysis('West Ham'), new ConsoleReport())

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)
