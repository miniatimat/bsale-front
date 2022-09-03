const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define('product', {
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
        ,price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        url_image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        discount:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        category:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        { timestamps: false,
        freezeTableName: true})

};

// Posts ()
// Id. - NUMBER
// Name. - STRING
// Price.  - NUMBER
// Details. - STRING
// Rating. - NUMBER
// Image-
// Status (Active, Inactive). - BOOLEAN
// Stock. - NUMBER
// Reviews. - TUPLE [NUMBER & STRING]
// Questions and answers - TUPLE [ date, string, strings].
