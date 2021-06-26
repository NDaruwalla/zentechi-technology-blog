const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create all associations (note add onDelete: 'CASCADE' to enable post deletion that also has comments) 

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

module.exports = {User, Post, Comment};