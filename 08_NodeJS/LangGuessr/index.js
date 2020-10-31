const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

try {
  const input = process.argv[2];
  const langISO = franc(input);
  const language = langs.where('3',langISO);
  console.log(`Our best guess is: ${language.name.brightGreen}`);
} catch (e) {
  console.log('Could not match a language. Plese try again with a larger sample'.brightRed);
}


