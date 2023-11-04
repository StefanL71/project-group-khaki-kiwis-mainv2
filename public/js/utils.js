export function randomNumbersAsString(numOfRandomNumbers) {
    let randomNumbers = "";
    for (let i = 0; i < numOfRandomNumbers; i++) {
        randomNumbers += (Math.floor(Math.random() * 9) + 1);
    }
    return randomNumbers;
  }