const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    updateThought
  } = require('../../controllers/thoughts-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)

router
  .route('/:thoughtId')
  .put(updateThought)

// /api/thoughts/:id
router
    .route('/:thoughtId')
    .get(getThoughtById)
    //.put(updateThought)

// /api/thoughts
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// /api/thoughts/<userId>/<thoughtId>
router
  .route('/:userId/:thoughtId')
  .delete(removeThought)

// /api/thoughts/<thoughtId>/<reactionID>
router
    .route('/:thoughtId/:reactionId/deleteReaction')
    .delete(removeReaction);

module.exports = router;