function sumar(a,b) {
    try {
        if(isNaN(a) || isNaN(b)) {
            throw "A y B no son numéricos";
        } else {
            return a + b;
        }
    } catch(error) {
        console.log(error);
    }
}

console.log(sumar("Hola", 9));
console.log(sumar(8,8));