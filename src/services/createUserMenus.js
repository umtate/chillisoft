class CreateUserMenus {
  constructor(users, menu) {
    this.users = users;
    this.menu = menu;
  }

  createMenu = () => {
    try {
      return {
        users: this.users.map((user) => {
          const { userName, sequenceOne, sequenceTwo } = user;

          const firstSequencePermissions = this.filterForYValues(
            sequenceOne,
            1
          );

          const secondSequencePermissions = this.filterForYValues(
            sequenceTwo,
            sequenceOne.length + 1
          );

          const sequencePermissionsArr = [
            ...firstSequencePermissions,
            ...secondSequencePermissions,
          ];

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

  filterForYValues = (values, indexs) =>
    values
      .split("")
      .map((x, ind) => {
        if (x === "Y") return ind + indexs;
      })
      .filter((x) => !!x);
}

module.exports = CreateUserMenus;
