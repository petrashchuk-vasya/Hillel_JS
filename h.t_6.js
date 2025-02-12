function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let num = getRandomInRange(100, 1000);

        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercentage = Math.round((evenCount / count) * 100);
    let oddPercentage = Math.round((oddCount / count) * 100);

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Непарних чисел: ${oddCount}`);
    console.log(`Відсоток парних: ${evenPercentage}%`);
    console.log(`Відсоток непарних: ${oddPercentage}%`);
}

checkProbabilityTheory(1000);