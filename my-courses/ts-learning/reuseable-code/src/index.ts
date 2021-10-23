import { MatchReader } from './MatchReader'

import { CsvFileReader } from './CsvFileReader'

//tuples
import { MatchResult } from './MatchResult'

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

console.log()
