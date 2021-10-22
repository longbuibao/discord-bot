import fs from 'fs'
import { MatchResult } from './MatchResult'
//tuple
// type MatchData = [Date, string, string, number, number, MatchResult, string]

export abstract class CsvFileReader<T> {
  data: T[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

  // this.data = [MatchData, MatchData]
  // which is [
  //   [Date, string, string, number, number, MatchResult, string],
  //  [Date, string, string, number, number, MatchResult, string]
  // ]

  read(): void {
    this.data = fs
      .readFileSync(this.filename, { encoding: 'utf-8' })
      .split('\n')
      .map((data: string): string[] => data.split(','))
      .map(this.mapRow)
  }
}
