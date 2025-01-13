const getRandom = (start, end) => {
    const random = Math.random() * (end - start) + start;
    const randomInteger = Math.floor(random);

    return randomInteger;
}

const randomNumber = getRandom(6, 7);

console.log(randomNumber);