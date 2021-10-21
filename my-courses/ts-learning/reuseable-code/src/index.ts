import fs from 'fs'

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((data: string): string[] => data.split(','))

// console.log(matches)

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

let manUnitedWins = 0
for (const cur of matches) {
  if (
    (cur[1] === 'Man United' && cur[5] === 'H') ||
    (cur[2] === 'Man United' && cur[5] === 'A')
  )
    manUnitedWins++
}
console.log(`Man United wins ${manUnitedWins} game(s)`)
