// Функция за връщане назад в историята на браузъра
function goBack() {
    window.history.back();
}

// Функция за определяне на вида климат
function determineClimate() {
    const avgTempMax = parseFloat(document.getElementById('avgTempMax').value);
    const avgTempMin = parseFloat(document.getElementById('avgTempMin').value);
    const annualRainfall = parseFloat(document.getElementById('annualRainfall').value);
    const resultElement = document.getElementById('climateResult');

    // Проверка за валидни въведени данни
    if (isNaN(avgTempMax) || isNaN(avgTempMin) || isNaN(annualRainfall)) {
        resultElement.textContent = "Моля, въведете валидни числа за всички полета.";
        resultElement.style.color = "#ff6b6b"; // Червен цвят за грешка
        return;
    }

    let climateType = "Неопределен климат";
    resultElement.style.color = "#d8caff"; // Основен цвят за резултата

    // Принципна логика за определяне на климата, базирана на примерите от снимките
    // Това е опростено и може да се доразвие за по-голяма точност

    // Горещ пустинен климат (Хартум)
    if (avgTempMax >= 35 && avgTempMin >= 20 && annualRainfall < 200) {
        climateType = "Горещ пустинен климат";
    }
    // Полярен пустинен климат (Восток)
    else if (avgTempMax <= -10 && avgTempMin <= -40 && annualRainfall < 100) {
        climateType = "Полярен пустинен климат";
    }
    // Тропически дъждовен климат (Икитос)
    else if (avgTempMax >= 25 && avgTempMin >= 18 && annualRainfall >= 2000) {
        climateType = "Тропически дъждовен климат";
    }
    // Умерен климат (Париж)
    else if (avgTempMax >= 15 && avgTempMax <= 25 && avgTempMin >= 5 && avgTempMin <= 15 && annualRainfall >= 500 && annualRainfall <= 1000) {
        climateType = "Умерен климат";
    }
    // Континентален климат (Уинипег, Инчуан)
    else if (avgTempMax <= 20 && avgTempMin <= 10 && annualRainfall < 600) {
        climateType = "Континентален климат";
    }
    // Средиземноморски климат (Лос Анджелис)
    else if (avgTempMax >= 20 && avgTempMax <= 30 && avgTempMin >= 5 && avgTempMin <= 15 && annualRainfall >= 200 && annualRainfall <= 500) {
        climateType = "Средиземноморски климат";
    }
    // Субтропичен климат (Сидни)
    else if (avgTempMax >= 20 && avgTempMin >= 5 && annualRainfall >= 800) {
        climateType = "Субтропичен климат";
    }
    // Субтропичен континентален (Ла Пас)
    else if (avgTempMax >= 15 && avgTempMax <= 25 && avgTempMin >= 0 && avgTempMin <= 10 && annualRainfall >= 400 && annualRainfall <= 700) {
        climateType = "Субтропичен континентален климат";
    }


    resultElement.textContent = `Видът климат е: ${climateType}`;
}