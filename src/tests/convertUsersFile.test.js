const ConvertUsersFile = require("../services/convertUsersFile");

describe("Convert users file to data class", () => {
  const fileName = "./users.txt";
  let users;
  beforeEach(() => {
    users = new ConvertUsersFile(fileName);
  });
  it("should create convert users file class with file name", () => {
    expect(users.fileName).toEqual(fileName);
  });
});
