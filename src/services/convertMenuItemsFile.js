const { splitStringAtNewLine, readFile } = require("../utils/commonUtils");

class ConvertMenuItemsFile {
  constructor(fileName) {
    this.fileName = fileName;
  }

  processFileToArr = () => {
    const data = readFile(this.fileName);
    return splitStringAtNewLine(data).map((row) => {
      const rows = row.split(" ");
      return {
        id: parseInt(rows[0].replace(",", "")),
        menuItem: rows[1],
      };
    });
  };
}

module.exports = ConvertMenuItemsFile;
