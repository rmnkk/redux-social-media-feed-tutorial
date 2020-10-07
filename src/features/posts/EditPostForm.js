import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

import { postUpdated } from './postsSlice';

export const EditPostForm = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector(state =>
    state.posts.find(post => post.id === postId)
  )

  const [title, setTtile] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChange = e => setTtile(e.target.value);
  const onContentChange = e => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({
        id: postId,
        title,
        content
      }));

      history.push(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>

      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind"
          value={title}
          onChange={onTitleChange}
        />

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
      </form>
    </section>
  )
};
