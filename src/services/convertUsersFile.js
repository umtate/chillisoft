const { splitStringAtNewLine, readFile } = require("../utils/commonUtils");

class ConvertUsersFile {
  constructor(fileName) {
    this.fileName = fileName;
  }

  processFile = () => {
    const data = readFile(this.fileName)
    return splitStringAtNewLine(data).map((row) => {
      const rows = row.split(" ");
      return {
        userName: rows[0],
        sequenceOne: rows[1],
        sequenceTwo: rows[2],
      };
    });
  };
}

module.exports = ConvertUsersFile;
