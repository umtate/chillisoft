const fs = require("fs");

const splitStringAtNewLine = (dataString) =>
  dataString.toString().split(/\r\n|\r|\n/g);

const readFile = (fileName) => {
  try {
    return fs.readFileSync(`${fileName}`);
  } catch (err) {
    console.error(`An error occured while reading ${fileName} file ${err}`);
  }
};

module.exports = { splitStringAtNewLine, readFile };
