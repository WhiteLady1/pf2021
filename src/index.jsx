import React from 'react';
import { render } from 'react-dom';
import './index.html';
import GlobalStyle from './globaStyle';
import Tree from './Components/Tree/Tree';
import Wish from './Components/Wish/Wish';
import MainDiv from './style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainDiv>
        <Tree />
        <Wish />
      </MainDiv>
    </>
  );
};

render(<App />, document.querySelector('#app'));
