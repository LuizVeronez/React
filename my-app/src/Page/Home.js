import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: 'First Post', content: 'This is the first post content' },
  { id: 2, title: 'Second Post', content: 'This is the second post content' },
  { id: 3, title: 'Third Post', content: 'This is the third post content' },
];

function Home() {
  return (
    <div>
      <h1>Blog Home
        nOVOss
      </h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
