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
  ' ': ' ',
};

const MORSE_SYMBOLS = {
  '10': '.',
  '11': '-',
  '**': ' '
};

const splitIntoChunks = (str, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }

  return chunks;
};

const binaryToMorse = (binary) => {
  return splitIntoChunks(binary.replace(/^0+/, ''), 2)
    .map(code => MORSE_SYMBOLS[code])
    .join('')
    .replace(/\s+/g, ' ');
};

function decode(expr) {
  return splitIntoChunks(expr, 10)
    .map((binary) => binaryToMorse(binary))
    .map((morse) => MORSE_TABLE[morse])
    .join('');    
};

module.exports = {
  decode
}
