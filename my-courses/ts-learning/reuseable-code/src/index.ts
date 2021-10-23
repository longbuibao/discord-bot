import { MatchReader } from './MatchReader'

import { CsvFileReader } from './CsvFileReader'

//tuples
import { MatchResult } from './MatchResult'

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

let manUnitedWins = 0
for (const cur of matchReader.matches) {
  if (
    (cur[1] === 'Man United' && cur[5] === MatchResult.HomeWin) ||
    (cur[2] === 'Man United' && cur[5] === MatchResult.AwayWin)
  )
    manUnitedWins++
}

console.log(
  `Man United won ${manUnitedWins} game${manUnitedWins === 1 ? '' : 's'}`
)
