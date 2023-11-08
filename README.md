# Blog Post

## Description
This is a web application that allows users to create profiles and then post blogs on various topics. Users can also view and comment on other peoples blogs.

## Technologies Used

- Express: A web framework for Node.js that provides features such as routing, middleware, and template engines.
- express-session: A middleware for Express that enables session management and authentication.
- SQL: A relational database management system that stores and manipulates data using Structured Query Language.
- sequelize: An object-relational mapping (ORM) library for Node.js that simplifies the interaction with SQL databases.
- RESTful APIs: A set of principles and standards for designing and building web services that provide a uniform interface for accessing resources on a server.
- Handlebars: A templating engine for Express that allows dynamic rendering of HTML pages using data and logic.
- MVC: A software design pattern that separates the application into three components: Model, View, and Controller. Model represents the data and business logic, View represents the user interface, and Controller handles the communication between the Model and the View.

## Installation

To run the application locally, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/<your-username>/blog-post.git`.
2. Navigate to the root directory of the project and run `npm install` to install the dependencies.
3. Create a `.env` file in the root directory and add the following variables:
    - `DB_NAME`: `techblog_db`.
    - `DB_USER`: The username for your SQL database.
    - `DB_PASSWORD`: The password for your SQL database.
    - `SESSION_SECRET`: A secret string for encrypting the session cookies.
4. Run `npm run seed` to seed the database with some sample data.
5. Run `npm start` or `npm run devstart` to start the server and launch the application on `http://localhost:3001`.

## Usage

The application has the following features:

- Users can sign up and log in using their username and password.
- Users can create, edit, and delete their own blog posts.
- Users can view all the blog posts on the homepage.
- Users can view the details of a single blog post, including the comments.
- Users can comment on each other users' blog posts.
- Users can view their own profile page, which shows their name and blog posts.
- Users can edit their profile information and password.

## License
This project is licensed under the [MIT License](LICENSE). ![MIT](https://img.shields.io/badge/MIT-blue)

## Questions

[My GitHub Profile](https://github.com/Andrewchall92)