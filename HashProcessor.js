class HashProcessor {
    constructor() {
        this.hash = "e09fbe37fa2ee74434c7cf5fc981c1";
        this.S = this.#extractFirstNonZeroDigit();
    }

    // Método privado para extraer el primer dígito no cero del hash
    #extractFirstNonZeroDigit() {
        return parseInt(this.hash.match(/[1-9]/)[0]);
    }

    // Método público para obtener el valor de S
    getS() {
        return this.S;
    }
}

module.exports = new HashProcessor();
