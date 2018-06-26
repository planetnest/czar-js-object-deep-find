const find = (obj, key) => {
  let depth = [];
  for (let o in obj) {
    if (o === key) return obj[o];
    if (typeof obj[o] == 'object') depth.push(obj[o]);
  }
  for (let d of depth) {
    const f = find(d, key);
    if (!!f) return f;
  }
  return null;
};

module.exports = find;