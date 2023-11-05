const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

// creates the table for the comments
Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: 'No content provided',
            validate: {
                len: {
                    args: [1, 160],
                    msg: 'Comment must be between 1 and 160 characters long'
                },
            },
        },

        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'posts',
                key: 'id',
            },
        },
        
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: false,
        underscored: true,
        modelName: 'comments',

    },
);

module.exports = Comment;