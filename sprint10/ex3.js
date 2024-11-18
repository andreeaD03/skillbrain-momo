const letterCount = (string, letter) => {
    let counter = 0;
    for (let i = 0; i < string.length; i++){
        if (string[i].toLowerCase() === letter.toLowerCase()) {
            counter++;
        }
    }
    
    return counter;
        
    }

const nrOfLetters = (text, letter) => {
        console.log(`litera '${letter}' apare de ${letterCount(text, letter)} ori in sirul '${text}'`)
};
    
nrOfLetters("Imi Place Progrmarea", "a");
nrOfLetters("Vreau Sa Lucrez In IT", "r");