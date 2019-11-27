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
  return capitalize(s.replace(/[^a-zA-Z0-9 ]/g, "")).join("");
}

function snake_case(s) {
  if (typeof s !== "string" || s.length === 0) return "";
  return s.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").map(function(word) {
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

function prop_access(p, o) {
  if (typeof p !== "" || p.length === 0 || o !== "object") return "";
  let path = p.split('.');

  var result = o[p[0]] !== "undefined" ? o[p[0]] : "";
  if (path.length === 1) {
    return result;
  }
  return prop_access(path.shift(), result)
}

//console.log(leet("whEsh+ la #s't{r@eet"));