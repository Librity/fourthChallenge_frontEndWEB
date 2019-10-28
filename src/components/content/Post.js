import React from 'react';
import PropTypes from 'prop-types';

import './Post.css';

import Comment from './Comment';

const Post = ({ data }) => {
  return (
    <div className="post_body">
      <div className="post_header">
        <li className="post_avatar">
          <img src={data.author.avatar} className="author_avatar" />
        </li>
        <div className="left_of_avatar">
          <li className="post_author_name">{data.author.name}</li>
          <li className="post_date">{data.date}</li>
        </div>
      </div>
      <li className="post_content">{data.content}</li>
      <hr />
      <ul>
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </ul>
    </div>
  );
};

export default Post;
