const { User } = require('../models');

// seeds User table

const userData = [
    {
        user_name: 'Mackenzie',
        password: 'password'
    },
    {
        user_name: 'Justin',
        password: 'password'
    },
    {
        user_name: 'Katie',
        password: 'password'
    },
    {
        user_name: 'Megan',
        password: 'password'
    },
    {
        user_name: 'Kelsey',
        password: 'password'
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;