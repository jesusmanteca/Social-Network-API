const { Schema, Types } = require('mongoose');

const reactionsSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },

  reactionText: {
    type: String,
    required: true,
  },
});

module.exports = reactionsSchema;
