var services = {
    "стрижка": 60,
    "гоління": 80,
    "миття голови": 100
};

services.addService = function(name, price) {
    this[name] = price;
};

services.getPrices = function() {
    let prices = Object.values(this).filter(Number.isFinite);
    let total = 0;
    let min = prices[0];
    let max = prices[0];

    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
        if (prices[i] < min) {
            min = prices[i];
        }
        if (prices[i] > max) {
            max = prices[i];
        }
    }

    return {
        total: total + " грн",
        min: min + " грн",
        max: max + " грн"
    };
};

services.addService("Розбити скло", 200);

let prices = services.getPrices();
console.log("Загальна вартість:", prices.total);
console.log("Мінімальна ціна:", prices.min);
console.log("Максимальна ціна:", prices.max);
