import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import Comment from './Comment';

const Post = ({ data }) => {
  return (
    <div className="post_body">
      <li>
        <img  src={data.author.avatar} className="author_avatar" />
      </li>
      <li className="post_author_name">{data.author.name}</li>
      <li className="post_date">{data.date}</li>
      <li className="post_content">{data.content}</li>
      <ul>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </div>
  );
};

export default Post;
