const CreateUserMenus = require("../services/createUserMenus");

describe("Create Menu Permissions", () => {
  const users = [
    { userName: "User1", sequenceOne: "NYNYN", sequenceTwo: "NNNNY" },
    { userName: "UserBob", sequenceOne: "NNYNN", sequenceTwo: "NNNYY" },
    { userName: "User3", sequenceOne: "YNNYN", sequenceTwo: "YNNYY" },
    { userName: "User4", sequenceOne: "YYYYY", sequenceTwo: "YYYYY" },
  ];

  const menuItems = [
    { id: 1, menuItem: "Applications" },
    { id: 2, menuItem: "Security" },
    { id: 3, menuItem: "Customers" },
    { id: 4, menuItem: "Accounts" },
    { id: 6, menuItem: "Settings" },
    { id: 5, menuItem: "Pricing" },
    { id: 7, menuItem: "Orders" },
    { id: 8, menuItem: "Jobs" },
    { id: 9, menuItem: "Profile" },
    { id: 10, menuItem: "Help" },
  ];

  const output = {
    users: [
      { userName: "User1", menuItems: ["Security", "Accounts", "Help"] },
      { userName: "UserBob", menuItems: ["Customers", "Profile", "Help"] },
      {
        userName: "User3",
        menuItems: ["Applications", "Accounts", "Settings", "Profile", "Help"],
      },
      {
        userName: "User4",
        menuItems: [
          "Applications",
          "Security",
          "Customers",
          "Accounts",
          "Settings",
          "Pricing",
          "Orders",
          "Jobs",
          "Profile",
          "Help",
        ],
      },
    ],
  };

  it("should create menu perissions class with users and menu items", () => {
    const createMenu = new CreateUserMenus(users, menuItems);

    expect(createMenu.users).toEqual(users)
    expect(createMenu.menu).toEqual(menuItems)
  });

  it("should create menu perissions given users and menu items", () => {
    const createMenu = new CreateUserMenus(users, menuItems);

    expect(createMenu.createMenu()).toEqual(output);
  });
});
