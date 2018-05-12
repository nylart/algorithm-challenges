// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}
    /*
    // First try
    var str2 = "";
    for (i = str.length-1; i >= 0; i--){
            str2 = str2.concat(str.charAt(i));
    }
    return str2;
    */

module.exports = reverse;
