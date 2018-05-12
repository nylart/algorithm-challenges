// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /*
    // First try
    var str2 = "";
    for (i = str.length-1; i >= 0; i--){
            str2 = str2.concat(str.charAt(i));
    }
    return str2;
    */

    // Cleaned up
   return str.split('').reverse().join('');
}

module.exports = reverse;
