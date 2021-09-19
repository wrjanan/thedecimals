const createKeccakHash = require("keccak");

const MAX_VALUE_BIGINT = BigInt(1000000000000000000);
const MAX_VALUE = BigInt(1000000000000000000);
const keysPrefix = ["FIRST", "SECOND", "THIRD", "FOURTH", "FIFTH", "SIXTH", "SEVENTH", "EIGHTH"]

const getDecimal = (number, token) => {
    const text = `${keysPrefix[number]}${token}`;
    const bigint = BigInt("0x" + createKeccakHash('keccak256').update(text).digest("hex"));
    const luck = bigint % BigInt(21);
    let remainder = BigInt(((bigint) % (MAX_VALUE_BIGINT)).toString());
    if (luck >= 19) {
        if (luck == 19) {
            remainder = remainder + ((MAX_VALUE - remainder) / BigInt(2))
        }
        else {
            remainder = ((MAX_VALUE - remainder) / BigInt(2))
        }
    }

    return remainder.toString() / MAX_VALUE.toString();
}

module.exports = {
    getDecimal,
};