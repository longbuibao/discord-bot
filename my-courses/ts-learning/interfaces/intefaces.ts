export {}

interface Reportable {
  summary(): void
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary: function () {
    console.log(`I am a vehicle`)
  },
}

const drink = {
  name: 'Pepsi',
  year: 2021,
  sugar: 'free',
  summary: function () {
    console.log(`Drink me, I dont have sugar in my body, good for your health`)
  },
}

const printSummary = (item: Reportable): void => {
  item.summary()
}

printSummary(oldCivic)
printSummary(drink)
