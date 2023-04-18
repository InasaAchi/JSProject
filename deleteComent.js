let userIsAdmin = true;
let userIsModerator = false;
let userIsCommentAuthor = true;

const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;

console.log(userCanDelete);