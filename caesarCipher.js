// Note: Character case is preserved
const caesarCipher = (str, key) => {
    // const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = "";
    for (let i = 0; i < str.length; i++) {
        const ch = str[i];

        // Note: Adding 26 to the key ensures that the result is always positive, even if the key is negative
        if (ch >= "A" && ch <= "Z") {
            result += String.fromCharCode(
                ((ch.charCodeAt(0) - 65 + 26 + key) % 26) + 65
            );
        } else if (ch >= "a" && ch <= "z") {
            result += String.fromCharCode(
                ((ch.charCodeAt(0) - 97 + 26 + key) % 26) + 97
            );
        } else {
            result += ch;
        }
    }
    return result;
};
module.exports = caesarCipher;
