function type_check_v1(v, t) {
  if (typeof t !== "string" || t.length === 0) return false;
  if (t === "null") {
    return v === null;
  } else if (t === "array") {
    return Array.isArray(v);
  }
  return typeof v === t;
}
