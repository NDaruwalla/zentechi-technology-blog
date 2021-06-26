const { User } = require('../models');

const userData = [
    {
        username: "James Bond",
        github: "The007",
        email: "bond@email.com",
        password: "p@ssword1"
    },
    {
        username: "Burzin Daruwalla",
        github: "Bdaruwalla",
        email: "bdaruwalla@email.com",
        password: "p@ssword2"
    },
    {
        username: "Nick Dars",
        github: "ndars",
        email: "nick@email.com",
        password: "p@ssword3"
    },
    {
        username: "Lane Fox",
        github: "lanefox",
        email: "lanefox@email.com",
        password: "p@ssword4"
    },
    {
        username: "Chara Vanhousen",
        github: "vannchar",
        email: "chara@email.com",
        password: "p@ssword5"
    },
    {
        username: "Jim Morrison",
        github: "jimmorrison",
        email: "jimmorrison@email.com",
        password: "p@ssword6"
    },
    {
        username: "Sally Franken",
        github: "sallyfran",
        email: "franksa@email.com",
        password: "p@ssword7"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;