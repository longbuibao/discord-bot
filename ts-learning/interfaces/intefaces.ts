export {}

interface Reportable {
  summary(): void
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary: function () {
    console.log(this)
  },
}

const printSummary = (item: Reportable): void => {
  item.summary()
}

printSummary(oldCivic)
