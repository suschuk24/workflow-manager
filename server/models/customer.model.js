module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customers", {
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zipCode: {
        type: Sequelize.INTEGER
      }
    });
  
    return Customer;
  };