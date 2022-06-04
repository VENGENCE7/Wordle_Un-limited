export function CheckStatus(word, check_alphabet) {
  var freq = {};
  word.split("").forEach(function (s) {
    freq[s] ? freq[s]++ : (freq[s] = 1);
  });
  
}
