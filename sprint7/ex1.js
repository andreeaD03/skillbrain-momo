const divizibilCu10 = (numar) => {
    if (numar % 10 === 0) {
        return true
    }
    else {
        return false
    }
};

console.log("este numarul 20 divizibil cu 10? " + divizibilCu10(20))