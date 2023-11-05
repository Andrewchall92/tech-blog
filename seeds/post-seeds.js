const { Post } = require('../models');

// seeds Post table

const postData = [
    {
        title: 'The Future of AI robot cats',
        description: 'A blog about the uncertain future of AI robot cats',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquet n',
        user_id: 1
    },
    {
        title: 'Why we should all be using React Hooks',
        description: 'A blog about why we should all be using React Hooks',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquet n',
        user_id: 2,
    },
    {
        title: 'Understanding the basics of Redux',
        description: 'A brief introduction to Redux',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquet n',
        user_id: 3,
    },
    {
        title: 'JavaScript: The Good Parts',
        description: 'Why JavaScript is the best programming language',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquet n',
        user_id: 4,
    },
    {
        title: 'Why CSS is important',
        description: 'Why CSS is important and how to use it',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquet n',
        user_id: 5,
    },
    {
        title: 'Full Stack Development',
        description: 'What is full stack development?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquet n',
        user_id: 1,
    },
    {
        title: 'Front End Development',
        description: 'What is front end development?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquet n', 
        user_id: 2,
    },
    {
        title: 'Back End Development',
        description: 'What is back end development?',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl vitae aliquet ultricies, nunc nisl ultricies nunc, vitae aliquet n',  
        user_id: 3,
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;