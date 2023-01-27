const arguments = process.argv;
const ConvertMenuItemsFile = require("./src/services/convertMenuItemsFile");
const ConvertUsersFile = require("./src/services/convertUsersFile");
const CreateUserMenus = require("./src/services/createUserMenus");
const fileNames = arguments.filter((_, ind) => ind > 1);

if (fileNames.length < 2) {
  console.error("Expected to receive 2 file names");
  process.exit(1);
}
const users = new ConvertUsersFile(`./${fileNames[0]}`);
const menuItems = new ConvertMenuItemsFile(`./${fileNames[1]}`);

const usersMenu = new CreateUserMenus(
  users.processFile(),
  menuItems.processFileToArr()
);
console.log(JSON.stringify(usersMenu.createMenu()));
