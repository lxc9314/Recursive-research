const dataJson = require("./data.json");
const isPlainObject = require("is-plain-object");
// 根据 version key-value
const forEachDeep = (data, path, fn) => {
  if (Array.isArray(data)) {
    data.forEach((value, index) => {
      let deepPath = `${path}${index}`;
      fn(value, deepPath);
      forEachDeep(data[index], deepPath, fn);
    });
  } else if (isPlainObject(data)) {
    Object.keys(data).forEach(key => {
      let deepPath = `${path}${key}`;
      fn(data[key], deepPath);
      forEachDeep(data[key], deepPath, fn);
    });
  }
};

const fn = (data, path) => {
  if (typeof data === "string") {
    console.log(path, "---", data);
  }
};
const ad = forEachDeep(dataJson, "", fn);
