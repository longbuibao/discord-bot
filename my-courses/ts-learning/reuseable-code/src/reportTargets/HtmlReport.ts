import { OutputTarget } from '../Summary'
import fs from 'fs'

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
	 <div>
	 	<h1> REPORTER </h1>
		<div> ${report} </div>
	 </div>
	  `
    fs.writeFileSync('index.html', html)
  }
}
