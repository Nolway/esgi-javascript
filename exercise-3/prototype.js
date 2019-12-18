
String.prototype.ucfirst = function (s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s[0].toUpperCase() + s.substr(1);
}

String.prototype.capitalize = function (s) {
  if (typeof s !== "string" || s.length === 0) return "";
  let wordArray = s.toLowerCase().split(' ');
  for(let i = 0; i < wordArray.length; i++) {
    wordArray[i] = ucfirst(wordArray[i]);
  }

  return wordArray.join(' ');
}


String.prototype.camelCase = function (s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return capitalize(s.replace(/_/g, " ").replace(/[^a-zA-Z0-9 ]/g, "")).split(" ").map(function(word, index) {
    return word;
  }).join("");
}

String.prototype.snake_case = function (s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s.replace(/[^a-zA-Z0-9_ ]/g, "").split(" ").map(function(word) {
    return word.toLowerCase();
  }).join("_");
}

String.prototype.leet = function (s) {
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

String.prototype.verlan = function (s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

String.prototype.yoda = function (s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s.split(' ').reverse().join(' ');
}