let userIsLoggedIn = true;
let videoIsCommentable = true;

const userCanComment = userIsLoggedIn && videoIsCommentable;

console.log(userCanComment);