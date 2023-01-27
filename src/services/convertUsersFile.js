const { splitStringAtNewLine, readFile } = require("../utils/commonUtils");

class ConvertUsersFile {
  constructor(fileName) {
    this.fileName = fileName;
  }

  processFile = () => {
    const data = readFile(this.fileName)
    return splitStringAtNewLine(data).map((col) => {
      const columns = col.split(" ");
      return {
        userName: columns[0],
        sequenceOne: columns[1],
        sequenceTwo: columns[2],
      };
    });
  };
}

module.exports = ConvertUsersFile;
