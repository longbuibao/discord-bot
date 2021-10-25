import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { WinAnalysis } from './analyzers/WinAnalysis'

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
const analysis = new WinAnalysis('Man United')

matchReader.load()
console.log(analysis.run(matchReader.matches))
