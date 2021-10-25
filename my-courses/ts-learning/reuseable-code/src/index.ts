import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.fromCsv('football.csv')
const reporter = Summary.winsAnalysisWithConsoleReport('Man United')

matchReader.load()
reporter.buildAndPrintReport(matchReader.matches)
