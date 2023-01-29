class CreateUserMenus {
  constructor(users, menu) {
    this.users = users;
    this.menu = menu;
  }

  createMenu = () => {
    try {
      return {
        users: this.users.map((user) => {
          const {userName, sequenceOne, sequenceTwo} = user
          
          const firstSequencePermissions = sequenceOne
            .split("")
            .map((x, ind) => {
              if (x === "Y") return ind + 1;
            })
            .filter((x) => !!x);
          const secondSequencePermissions = sequenceTwo
            .split("")
            .map((x, ind) => {
              if (x === "Y") return ind + sequenceOne.length + 1
            })
            .filter((x) => !!x);

          const sequencePermissionsArr = [...firstSequencePermissions, ...secondSequencePermissions];

          const menuItems = this.menu
            .filter((x) => sequencePermissionsArr.some((y) => y === x.id))
            .map((item) => item.menuItem);

          return { userName, menuItems };
        }),
      };
    } catch (err) {
      console.error(`An error occured while creating menus ${err}`);
    }
  };
}

module.exports = CreateUserMenus;
