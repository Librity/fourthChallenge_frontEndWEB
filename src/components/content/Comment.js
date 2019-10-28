import React from 'react';
import PropTypes from 'prop-types';

import './Comment.css';

const Comment = ({ data }) => {
  return (
    <>
      <div className="comment_body">
        <li className="comment_avatar">
          <img src={data.author.avatar} className="author_avatar" />
        </li>
        <div className="comment_bubble">
          <li className="comment_author_name">{data.author.name}</li>
          <li className="comment_author_content">{data.content}</li>
        </div>
      </div>
    </>
  );
};

export default Comment;
