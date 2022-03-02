const User = require('./User');
const Book = require('./Book');
const Comment = require('./Comment');

User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
});

Book.hasMany(Comment, {
  foreignKey: 'book_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(Book, {
  foreignKey: 'book_id',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Book, Comment };
