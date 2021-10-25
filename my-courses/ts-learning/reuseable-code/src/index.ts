import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { Summary } from './Summary'
import { WinAnalysis } from './analyzers/WinAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)

const summary = new Summary(new WinAnalysis('West Ham'), new ConsoleReport())
const htmlSummary = new Summary(new WinAnalysis('West Ham'), new HtmlReport())

matchReader.load()

summary.buildAndPrintReport(matchReader.matches)
htmlSummary.buildAndPrintReport(matchReader.matches)
