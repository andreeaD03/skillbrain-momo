const button = document.getElementById("button");
async function adviceGiver() {
    const url = "https://api.adviceslip.com/advice"

    try {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data);
    }
    catch (e) {
        console.error("eroare la obtinerea datelor")
    }
}

button.addEventListener('click', adviceGiver)