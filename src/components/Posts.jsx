import React from "react"
import { Link, withRouter } from 'react-router-dom'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <ul>
        {posts.map((post, key) => (
          <li
            key={key}
            className='font-semibold text-xl mb-2 border p-2'
          >
            <Link to={post.path}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(Posts);