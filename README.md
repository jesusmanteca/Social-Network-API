# Social-Network-API

GIVEN a social network API

WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

WHEN I open API GET routes in Insomnia Core for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete users and thoughts in my database

WHEN I test API POST and DELETE routes in Insomnia Core
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list


- Models folder (collections/tables)
User

username

    String
    Unique
    Required
    Trimmed

email

    String
    Required
    Unique
    Must match a valid email address (look into Mongoose's matching validation)

thoughts

    Array of _id values referencing the Thought model   

friends

    Array of _id values referencing the User model (self-reference)

    Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

    ---
Thought

thoughtText

String
Required
Must be between 1 and 280 characters

createdAt

Date
Set default value to the current timestamp
Use a getter method to format the timestamp on query

username (The user that created this thought)

String
Required

reactions (These are like replies)
    Array of nested documents created with the reactionSchema

Schema Settings
    Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

---
server requires routes from index.js in ./routes, which is requiring the controllers which is requiring the models