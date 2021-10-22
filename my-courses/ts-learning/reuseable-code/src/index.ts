import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('football.csv')

reader.read()

// show off :odnice:

// const mUwins = matches.reduce(
//   (res: string[], cur: string[]): string[] => {
//     if (
//       (cur[1] === 'Man United' && cur[5] === 'H') ||
//       (cur[2] === 'Man United' && cur[5] === 'A')
//     ) {
//       res[1] = (parseInt(res[1]) + 1).toString()
//       return res
//     }
//     return res
//   },
//   ['MU', '0']
// )

// console.log(mUwins)

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0
for (const cur of reader.data) {
  if (
    (cur[1] === 'Man United' && cur[5] === MatchResult.HomeWin) ||
    (cur[2] === 'Man United' && cur[5] === MatchResult.AwayWin)
  )
    manUnitedWins++
}

console.log(
  `Man United won ${manUnitedWins} game${manUnitedWins === 1 ? '' : 's'}`
)
let num: number = 1
let anything: any = '1a'
num = anything
console.log(typeof num) // print number
