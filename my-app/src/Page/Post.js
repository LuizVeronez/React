import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post content' },
  { id: 2, title: 'Second Post', content: 'This is the second post content' },
  { id: 3, title: 'Third Post', content: 'This is the third post content' },
];

function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
