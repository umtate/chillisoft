const ConvertMenuItemsFile = require("../services/convertMenuItemsFile");

describe("Convert menu items file to data class", () => {
  const fileName = "./menus.txt";
  let menus;
  beforeEach(() => {
    menus = new ConvertMenuItemsFile(fileName);
  });
  it("should create convert menu items file class with file name", () => {
    expect(menus.fileName).toEqual(fileName);
  });
});
