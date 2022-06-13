import { useEffect } from "react";

export function CheckStatus(word, check_alphabet) {
  var freq = {};

  useEffect =
    (() => {
      word.split("").forEach(function (s) {
        freq[s] ? freq[s]++ : (freq[s] = 1);
      });
    },
    []);
}
