function dividir(a, b) {
    if (b === 0) {
        throw new ReferenceErrorrror("");
    }
    return a / b;
}

console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // ERRO!
