import React from 'react';
import { render } from 'react-dom';
import './index.html';
import GlobalStyle from './globaStyle';
import Tree from './Components/Tree/Tree';
import Wish from './Components/Wish/Wish';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Tree />
      <Wish />
    </>
  );
};

render(<App />, document.querySelector('#app'));
