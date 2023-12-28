const MAX_NEW_COMMENTS = 5;

const imageContainer = document.querySelector('.big-picture');
const loadMoreButton = imageContainer.querySelector('.comments-loader');
const commentCountPicture = imageContainer.querySelector('.social__comment-count');
const commentsContainer = imageContainer.querySelector('.social__comments');
const commentTemplate = commentsContainer.children[0];

let COMMENTS_MULTIPLIER = 1;

const createCommentElement = (commentData) => {
  const commentElement = commentTemplate.cloneNode(true);
  const commentImage = commentElement.querySelector('.social__picture');

  commentImage.src = commentData.avatar;
  commentImage.alt = commentData.name;
  commentElement.querySelector('.social__text').textContent = commentData.message;

  commentElement.classList.add('hidden');

  return commentElement;
};

const addNewComments = () => {
  const newCommentsCount = MAX_NEW_COMMENTS * COMMENTS_MULTIPLIER;
  const totalCommentsCount = commentsContainer.children.length;
  const addedCommentsCount = newCommentsCount >= totalCommentsCount ? totalCommentsCount : newCommentsCount;

  for (let i = 0; i < addedCommentsCount; i++) {
    if (i < newCommentsCount && i >= newCommentsCount - MAX_NEW_COMMENTS) {
      commentsContainer.children[i].classList.remove('hidden');
    }
  }

  if (totalCommentsCount > newCommentsCount) {
    loadMoreButton.classList.toggle('hidden');
  }
  else {
    loadMoreButton.classList.add('hidden');
  }
  commentCountPicture.innerHTML = `${addedCommentsCount} из <span class="comments-count">${totalCommentsCount}</span> комментариев`;
};

const setComments = (commentsData) => {
  commentsContainer.innerHTML = '';

  commentsData.forEach((commentData) => {
    commentsContainer.appendChild(createCommentElement(commentData));
  });

  COMMENTS_MULTIPLIER = 1;
  addNewComments();
};

loadMoreButton.addEventListener('click', () => {
  COMMENTS_MULTIPLIER++;
  addNewComments();
});

export {setComments};
