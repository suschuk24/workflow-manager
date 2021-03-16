const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection')

// create RO model
class RepairOrder extends Model {}

RepairOrder.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    roNumber: {
      type: DataTypes.INTEGER,
      unique: true
    },
    customerName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    invoiceDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totalSale: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalRec: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    closingRatio: {
      type: DataTypes.INTEGER
    },
    advisor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    leadType: {
        type: DataTypes.STRING,
        allowNull: false
    }

  },
  {
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'repair-order'
  }
);

module.exports = RepairOrder