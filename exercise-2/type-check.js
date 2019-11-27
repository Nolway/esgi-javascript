function type_check_v1(v, t) {
  return typeof t === "string" && t.length > 0 && typeof v === t;
}