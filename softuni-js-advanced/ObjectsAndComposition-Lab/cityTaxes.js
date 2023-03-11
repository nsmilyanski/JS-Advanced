function cityTaxes(cityName, population, treasury) {
    return {
        name: cityName,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes () { this.treasury += this.population * this.taxRate },
        applyGrowth (x) { this.population += Math.floor(population * x / 100) },
        applyRecession (x) {this.treasury -=  Math.floor(treasury * x / 100)}
    };
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);

