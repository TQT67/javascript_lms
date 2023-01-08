function toBinary(hex) {
    let binary = "";
    let num = parseInt(hex, 16);

    while (num > 0) {
        let remainder = num % 2;
        binary = remainder + binary;
        num = Math.floor(num / 2);
    }

    return binary;
}

console.log(toBinary("FF"));
console.log(toBinary("AA"));
console.log(toBinary("FA"));