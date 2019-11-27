function ucfirst (s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s[0].toUpperCase() + s.substr(1);
}

function capitalize(s) {
  if (typeof s !== "string" || s.length === 0) return "";
  let wordArray = s.toLowerCase().split(' ');
  for(let i = 0; i < wordArray.length; i++) {
    wordArray[i] = ucfirst(wordArray[i]);
  }

  return wordArray.join(' ');
}


function camelCase(s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return capitalize(s.replace(/_/g, " ").replace(/[^a-zA-Z0-9 ]/g, "")).split(" ").map(function(word, index) {
    return word;
  }).join("");
}

function snake_case(s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s.replace(/[^a-zA-Z0-9_ ]/g, "").split(" ").map(function(word) {
    return word.toLowerCase();
  }).join("_");
}

function leet(s) {
  if (typeof s !== "string" || s.length === 0) return "";
  let map = {
    'A': '4',
    'E': '3',
    'I': '1',
    'O': '0',
    'U': "(_)",
    'Y': '7'
  }

  for (var prop in map) {
    if (map.hasOwnProperty(prop)) {
        var reg = new RegExp(prop, 'g');
        var regLower = new RegExp(prop.toLowerCase(), 'g');
        s = s.replace(reg, map[prop]);
        s = s.replace(regLower, map[prop]);
    }
  }
  return s;
}

function prop_access(o, p, pf = '') {
  if (typeof p !== "string" || p.length === 0 || typeof o !== "object") return "";
  let path = p.split('.');

  var result = o[path[0]] !== undefined ? o[path[0]] : "";  
  
  if (path.length === 1) {
    return result;
  }
  path.shift();
  return prop_access(result, path.join('.'), pf ? pf : p);
}

function verlan(s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

function yoda(s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s.split(' ').reverse().join(' ');
}

function vig(s, k) {
  if (typeof s !== "string" || s.length === 0 || typeof k !== "string" || k.length === 0) return "";
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return s.split(' ').map(function(word) {
    for (char in string) {
      if (!alphabet.includes(char) || !alphabet.includes(char.toUpperCase())) {
        return char;
      }
    }
    // return word.split('').map(function(char) {
    //   if (!alphabet.includes(char) || !alphabet.includes(char.toUpperCase())) {
    //     return char;
    //   }

    //   return alphabet.indexOf(char);
    // }).join('');
  }).join(' ');
}