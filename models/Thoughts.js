const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionsSchema = require('./Reactions');

const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionsSchema],
    }, 
    {
        toJSON: {
          virtuals: true,
        },
        id: false
      }
);

  // get total count of comments and replies on retrieval
ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });
  // create the Users model using the PizzaSchema
const Thoughts = model('Thoughts', ThoughtsSchema);

// export the users model
module.exports = Thoughts;