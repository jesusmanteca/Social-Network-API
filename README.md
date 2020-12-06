# Social-Network-API

## Description 

The Social Network API is a basic back-end program that mimics the main components of a social media network site using MongoDB and Mongoose. As a user, you can add a comment, friend another user (similar to a like), reply on a comment and delete or edit information. 

## Table of Contents

* [Installation](#installation)
* [License](#License) 
* [Contributing](#Contributing)
* [Tests](#Tests) 
* [Languages](#Languages) 

## Installation

To install, simply clone the app and git init the json packages. Once on your terminal type 'node server' and you will connect to a local host. Using a program like Insomnia, you can test the routes and connect them to a front end of your choice. 

---
## License

  The application is covered under the MIT license.

  ![Badge](https://img.shields.io/badge/License-MIT-blueviolet)

## Contributing

Others may contribute by requesting to contribute through GitHub, cloning the code and creating separate branches. All final code will be reviewed and approved if changes are favorable.

## Tests

ROUTES:

/api/users - get all users or post a user

/api/users/:id - get user by id, update the user, or delete user

/api/users/:userId/friends/:friendId' - adds/removes friend

/api/thoughts/:userId - adds thought by user

/api/thoughts - get all thoughts

/api/thoughts/:id - get thoughts by id and update them

/api/thoughts/:thoughtId/reactions - add reaction 

/api/thoughts/:userId/:thoughtId' - remove thought

/api/thoughts/:thoughtId/:reactionId/deleteReaction') - delete thought

## Languages

JavaScript: Node, Express, Mongoose, MondoDB

## For More Information

https://github.com/jesusmanteca
jesusmanteca@gmail.com

[Video Link](https://youtu.be/3-X-wFI69rM)