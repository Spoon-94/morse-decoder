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
   let strToArray = expr.match(/(.{10})/g);
   let arrayToMorse = strToArray.map((value) => value = value.replace(/(10)/g, `.`).replace(/(11)/g, `-`).replace(/(0)/g, ``).replace(/\*{10}/g, ` `));
   for (let i = 0; i < arrayToMorse.length; i++) {
      if(arrayToMorse[i] !== ` `) {
         arrayToMorse[i] =  MORSE_TABLE[arrayToMorse[i]];
      }
   }
   return arrayToMorse.join(``);
}

module.exports = {
    decode
}