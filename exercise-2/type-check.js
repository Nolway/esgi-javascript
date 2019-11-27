function type_check_v1(v, t) {
  if (typeof t !== "string" || t.length === 0) return false;
  if (t === "null") {
    return v === null;
  } else if (t === "array") {
    return Array.isArray(v);
  } else if (t === "undefined") {
    return v === undefined;
  }
  return typeof v === t;
}

function type_check_v2(v, conf) {

  if (conf.hasOwnProperty('type')) {
    if(!type_check_v1(v, conf.type)) return false;
  }
  if (conf.hasOwnProperty('value')) {
    if(v !== conf.value) return false;
  }
  if (conf.hasOwnProperty('enum')) {
    if(!conf.enum.includes(v)) return false;
  }

  return true;
}
