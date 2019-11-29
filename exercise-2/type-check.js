function type_check_v1(v, t) {
  if (typeof t !== "string" || t.length === 0) return false;
  if (t === "null") {
    return v === null;
  } else if (t === "array") {
    return Array.isArray(v);
  } else if (v === null ||  v instanceof Array) {
    return false;
  }
  return typeof v === t;
}

function type_check_v2(v, conf) {

  if (conf.hasOwnProperty('type')) {
    if(!type_check_v1(v, conf.type)) return false;
  }
  if (conf.hasOwnProperty('value')) {
    if(JSON.stringify(v) != JSON.stringify(conf.value)) return false;
  }
  if (conf.hasOwnProperty('enum')) {
    if(!conf.enum.find(function (value) {
      return JSON.stringify(value) == JSON.stringify(v);
    })) return false;
  }

  return true;
}

console.log(type_check_v2({ test: "dgfds", test2: "23D" }, { value: { test: "dgfds", test2: "23D" } }));