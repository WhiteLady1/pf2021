import React from 'react';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-simple-icons/github';
import googleIcon from '@iconify/icons-simple-icons/google';

const Wish = () => {
  return (
    <>
      <h1>Šťastný Nový rok</h1>
      <h1>2021</h1>
      <p>
        Všem nadšencům přeji v Novém roce pozitivní myšlení, spoustu radosti z
        programování, hodně zdraví a sil pro objevování tajů Reactu!
      </p>
      <a href="" target="_blank">
        <Icon icon={githubIcon} />
      </a>
      <a href="mailto: blanka.seman@gmail.com" target="_blank">
        <Icon icon={googleIcon} />
      </a>
    </>
  );
};
export default Wish;
