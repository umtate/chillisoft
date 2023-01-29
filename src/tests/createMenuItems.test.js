const CreateUserMenus = require("../services/createUserMenus");

describe("Create Menu Permissions", () => {
  const users = [
    { userName: "User1", sequenceOne: "NYNYN", sequenceTwo: "NNNNY" },
    { userName: "UserBob", sequenceOne: "NNYNN", sequenceTwo: "NNNYY" },
    { userName: "User3", sequenceOne: "YNNYN", sequenceTwo: "YNNYY" },
    { userName: "User4", sequenceOne: "YYYYY", sequenceTwo: "YYYYY" },
  ];

  const menuItems = [
    { id: 1, menuItem: "Applications Menu" },
    { id: 2, menuItem: "Security Permissions Menu" },
    { id: 3, menuItem: "Customers Menu" },
    { id: 4, menuItem: "Accounts Menu" },
    { id: 6, menuItem: "Settings Menu" },
    { id: 5, menuItem: "Pricing Menu" },
    { id: 7, menuItem: "Orders Menu" },
    { id: 8, menuItem: "Jobs Menu" },
    { id: 9, menuItem: "Profile Menu" },
    { id: 10, menuItem: "Help Menu" },
  ];

  const output = {
    users: [
      {
        userName: "User1",
        menuItems: ["Security Permissions Menu", "Accounts Menu", "Help Menu"],
      },
      {
        userName: "UserBob",
        menuItems: ["Customers Menu", "Profile Menu", "Help Menu"],
      },
      {
        userName: "User3",
        menuItems: [
          "Applications Menu",
          "Accounts Menu",
          "Settings Menu",
          "Profile Menu",
          "Help Menu",
        ],
      },
      {
        userName: "User4",
        menuItems: [
          "Applications Menu",
          "Security Permissions Menu",
          "Customers Menu",
          "Accounts Menu",
          "Settings Menu",
          "Pricing Menu",
          "Orders Menu",
          "Jobs Menu",
          "Profile Menu",
          "Help Menu",
        ],
      },
    ],
  };

  let createMenu;
  beforeEach(() => {
	createMenu = new CreateUserMenus(users, menuItems);
  })

  it("should create menu perissions class with users and menu items", () => {

    expect(createMenu.users).toEqual(users)
    expect(createMenu.menu).toEqual(menuItems)
  });

  it("should create menu perissions given users and menu items", () => {
    expect(createMenu.createMenu()).toEqual(output);
  });
});
