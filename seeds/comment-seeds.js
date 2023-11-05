const { Comment } = require('../models');

// seeds Comment table

const commentData = [
    {
        body: 'This is a comment about the future of AI robot cats',
        post_id: 1,
        user_id: 1,
    },
    {
        body: 'This is a comment about why we should all be using React Hooks',
        post_id: 2,
        user_id: 2,
    },
    {
        body: 'This is a comment about the basics of Redux',
        post_id: 3,
        user_id: 3,
    },
    {
        body: 'This is a comment about why JavaScript is the best programming language',
        post_id: 4,
        user_id: 4,
    },
    {
        body: 'This is a comment about why CSS is important and how to use it',
        post_id: 5,
        user_id: 5,
    },
    {
        body: 'This is a comment about what full stack development is',
        post_id: 6,
        user_id: 1,
    },
    {
        body: 'This is a comment about what front end development is',
        post_id: 7,
        user_id: 2,
    },
    {
        body: 'This is a comment about what back end development is',
        post_id: 8,
        user_id: 3,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
