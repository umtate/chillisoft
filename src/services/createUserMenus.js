class CreateUserMenus {
  constructor(users, menu) {
    this.users = users;
    this.menu = menu;
  }

  createMenu = () => {
    try {
      return {
        users: this.users.map((user) => {
          const userName = user.userName;
          const sequenceOne = user.sequenceOne
            .split("")
            .map((x, ind) => {
              if (x === "Y") return ind + 1;
            })
            .filter((x) => !!x);
          const sequenceTwo = user.sequenceTwo
            .split("")
            .map((x, ind) => {
              if (x === "Y") return ind + 6;
            })
            .filter((x) => !!x);

          const sequenceArr = [...sequenceOne, ...sequenceTwo];

          const menuItems = this.menu
            .filter((x) => sequenceArr.some((y) => y === x.id))
            .map((item) => item.menuItem);

          return { userName: userName, menuItems: menuItems };
        }),
      };
    } catch (err) {
	console.error(`An error occured while creating menus ${err}`)
    }
  };
}

module.exports = CreateUserMenus;
