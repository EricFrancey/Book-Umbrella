const router = require('express').Router();
const { Book, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const bookData = await Book.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!bookData) {
      res.status(404).json({ message: 'No book found with this id!' });
      return;
    }

    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
