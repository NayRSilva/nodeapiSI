module.exports = (sequelize, Sequelize) => {
    const Medicine = sequelize.define("medicines", {
      name: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      time:{
          type: Sequelize.TIME
      },
      interval:{
        type: Sequelize.INTEGER
      },
      refill:{
          type: Sequelize.BOOLEAN
      }
    });
  
    return Medicine;
  }