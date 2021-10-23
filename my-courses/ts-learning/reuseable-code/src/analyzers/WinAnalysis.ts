import { Analyzer } from '../Summary'
import { MatchData } from '../MatchData'
import { MatchResult } from '../MatchResult'

export class WinAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0
    for (const cur of matches) {
      if (
        (cur[1] === this.team && cur[5] === MatchResult.HomeWin) ||
        (cur[2] === this.team && cur[5] === MatchResult.AwayWin)
      )
        wins++
    }
    return `${this.team} won ${wins} game${wins === 1 ? '' : 's'}`
  }
}
