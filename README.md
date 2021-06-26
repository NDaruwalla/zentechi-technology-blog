# Zentechi Technology Blog
![Icon Name](Assets/img/blog.png)
<!-- image credit: this image is from icons8-->

  ## Description / Objective
  Zentechi is a technology blog site. It is designed to be a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and also comment on other developers’ posts. This site was built and deployed to Heroku. It follows the MVC paradigm in its architectural structure, uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

  ## Github Repository 
  [Zentechi on Github](https://github.com/NDaruwalla/zentechi-technology-blog)

  ## Heroku 
  [Zentechi on Heroku](https://sheltered-mesa-69370.herokuapp.com/)

## User Story 
   ```md
  AS A developer who writes about tech
  I WANT a CMS-style blog site
  SO THAT I can publish articles, blog posts, and my thoughts and opinions
  ```

  ## Acceptance Criteria
  ```md
  GIVEN a CMS-style blog site
  WHEN I visit the site for the first time
  THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in 
  WHEN I click on the homepage option
  THEN I am taken to the homepage
  WHEN I click on any other links in the navigation
  THEN I am prompted to either sign up or log in
  WHEN I choose to sign up
  THEN I am prompted to create a username and password
  WHEN I click on the sign-up button
  THEN my user credentials are saved and I am logged into the site
  WHEN I revisit the site at a later time and choose to sign in
  THEN I am prompted to enter my username and password
  WHEN I am signed in to the site
  THEN I see navigation links for the homepage, the dashboard, and the option to log out
  WHEN I click on the homepage option in the navigation
  THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
  WHEN I click on an existing blog post
  THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
  WHEN I enter a comment and click on the submit button while signed in
  THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
  WHEN I click on the dashboard option in the navigation
  THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
  WHEN I click on the button to add a new blog post
  THEN I am prompted to enter both a title and contents for my blog post
  WHEN I click on the button to create a new blog post
  THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
  WHEN I click on one of my existing posts in the dashboard
  THEN I am able to delete or update my post and taken back to an updated dashboard
  WHEN I click on the logout option in the navigation
  THEN I am signed out of the site
  WHEN I am idle on the site for more than a set time
  THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
  ```

   ## Tools
  The tools used to create this application include: HTML, CSS, Bootstrap, JavaScript, MySql, Node, Sequelize, Bcrypt, Dotenv, Express, Express-handlebars, Express-session, Heroku, Github, Git Bash, and Visual Studio Code.

  ## Installation
  The following packages were installed:

  - [express-handlebars](https://www.npmjs.com/package/express-handlebars) package is used to implement Handlebars.js for Views.
  - [MySQL2](https://www.npmjs.com/package/mysql2), and
  - [Sequelize](https://www.npmjs.com/package/sequelize) packages are used to connect to a MySQL database for the Models, and create an Express.js API for Controllers.
  - [dotenv package](https://www.npmjs.com/package/dotenv) is used for environment variables.
  - [bcrypt package](https://www.npmjs.com/package/bcrypt) is used to hash passwords.
  - [express-session](https://www.npmjs.com/package/express-session) package adds authentication.
  - [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) package adds authentication.
  - [express-session](https://www.npmjs.com/package/express-session) package stores the session data on the client in a cookie. When you are idle on the site for more than a set time, the cookie will expire and you will be required to log in again to start a new session. This is the default behavior and nothing is required other than other than implementing the npm package.

  ## Use
  Use this application is used to read posts, create posts, and comment on posts about technology related topics. 