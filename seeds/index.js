const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n***Your database has synced***\n');
  
  await seedUsers();
    console.log('\n***Your users table was seeded***\n');
  
  await seedPosts();
    console.log('\n***Your post table was seeded***\n');

  await seedComments();
    console.log('\n***Your comment table was seeded***\n');

  process.exit(0);
};

seedAll();
