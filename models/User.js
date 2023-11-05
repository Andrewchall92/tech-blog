const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');


class User extends Model {
    // checks to see if password matches
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password)
    }
}

// creates the table for the users
User.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },

    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
    // hash the password before creating the user
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'users',
}
);

module.exports = User;