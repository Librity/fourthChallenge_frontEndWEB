import React from 'react';

import './App.css';

import Header from './components/header/Header';
import PostList from './components/content/PostList';

const App = () => {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
};

export default App;
