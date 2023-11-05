const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 
class Post extends Model {};

// creates the table for the posts
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'No content provided',
            validate: {
                len: {
                    args: [10],
                    msg: 'Body must be at least 10 characters long'
                }
            }
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'posts',
    }
);

module.exports = Post;