class Masina {
    constructor(marca, model, culoare, kilometraj) {
        this.marca = marca;
        this.model = model;
        this.culoare = culoare;
        this.kilometraj = kilometraj;
    }
    getMarca() {
        return this.marca;
    }

    getModel() {
        return this.model;
    }

    getCuloare() {
        return this.culoare;
    }

    getKilometraj() {
        return this.kilometraj;
    }
}

const masina1 = new Masina("VOLVO", "XC-60", "Negru", "234000");
const masina2 = new Masina("Mazda", "CX-5", "Verde", "111000");
const masina3 = new Masina("Dacia", "BIGGSTER", "Albastru", "20000");


console.log(masina1);
console.log(masina2);
console.log(masina3);