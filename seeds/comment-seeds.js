const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "I love this! Outstanding post!"
    },
    {
        user_id: 2,
        post_id: 4,
        comment_text: "Great job! you really took time to research this. Educational!"
    },
    {
        user_id: 3,
        post_id: 3,
        comment_text: "I've been looking for something like this! Informative!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_text: "This is a superb post!"
    },
    {
        user_id: 5,
        post_id: 1,
        comment_text: "Outstanding, great work! Informative post!"
    },
    {
        user_id: 6,
        post_id: 1,
        comment_text: "Bingo!"
    },
    {
        user_id: 6,
        post_id: 1,
        comment_text: "I am looking forward to reading more about it!"
    },
    {
        user_id: 5,
        post_id: 2,
        comment_text: "Your explainations were very clear. Right on!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;