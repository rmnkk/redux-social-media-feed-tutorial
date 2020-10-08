import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'

export const PostList = () => {
  const posts = useSelector(state => state.posts);

  const orderedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section>
      <h2>Posts</h2>
      {orderedPosts.map(post => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>

          <p className="post-content">
            {post.content.substring(0, 100)}
          </p>

          <div>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date} />
          </div>

          <ReactionButtons post={post} />

          <Link
            to={`/posts/${post.id}`}
            className="button muted-button"
          >
            View Post
          </Link>
        </article>
      ))}
    </section>
  )
}
