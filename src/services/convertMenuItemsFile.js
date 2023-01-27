const { splitStringAtNewLine, readFile } = require("../utils/commonUtils");

class ConvertMenuItemsFile {
  constructor(fileName) {
    this.fileName = fileName;
  }

  processFileToArr = () => {
    const data = readFile(this.fileName);
    return splitStringAtNewLine(data).map((col) => {
      const columns = col.split(" ");
      return {
        id: parseInt(columns[0].replace(",", "")),
        menuItem: columns[1],
      };
    });
  };
}

module.exports = ConvertMenuItemsFile;
