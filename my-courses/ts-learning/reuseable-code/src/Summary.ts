import { MatchData } from './MatchData'
import { WinAnalysis } from './analyzers/WinAnalysis'
import { HtmlReport } from './reportTargets/HtmlReport'
import { ConsoleReport } from './reportTargets/ConsoleReport'

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new HtmlReport())
  }
  static winsAnalysisWithConsoleReport(team: string): Summary {
    return new Summary(new WinAnalysis(team), new ConsoleReport())
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}
