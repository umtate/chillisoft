const { splitStringAtNewLine, readFile } = require("../utils/commonUtils");

class ConvertMenuItemsFile {
  constructor(fileName) {
    this.fileName = fileName;
  }

  processFileToArr = () => {
    const data = readFile(this.fileName);
    return splitStringAtNewLine(data).map((row) => {
      const rows = row.split(" ");
      let menuItem = "";
      rows.forEach((x, ind) => {
        if (ind !== 0) menuItem = `${menuItem} ${x}`;
      });
      return {
        id: parseInt(rows[0].replace(",", "")),
        menuItem: menuItem.trim(),
      };
    });
  };
}

module.exports = ConvertMenuItemsFile;
