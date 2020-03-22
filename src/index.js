const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
    let phrase = '';
    for (let i = 0; i < expr.length; i+=10) {
        const char = expr.slice(i, i+10);
        if (char === '**********') {
        phrase += ' ';
        continue;
        }
        let signs = '';
        for (let i = 0; i < char.length; i+=2) {
        switch (char.slice(i, i+2)) {
            case '10':
            signs += '.';
            break;
            case '11':
            signs += '-';
            break;
            default:
            break;
        }
        }
        phrase += MORSE_TABLE[signs];
    }
    return phrase;
}

module.exports = {
    decode
}