const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// establishes relationships between tables
Post.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Post, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

module.exports = {
    User,
    Post,
    Comment,
};
