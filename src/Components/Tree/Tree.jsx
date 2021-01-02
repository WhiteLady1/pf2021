import React from 'react';
import tree from '../../img/tree.jpg';
import { ImgDiv, Image } from './style';

const Tree = () => {
  return (
    <>
      <ImgDiv>
        <Image src={tree} alt="Vánoční stromeček" />
      </ImgDiv>
    </>
  );
};

export default Tree;
