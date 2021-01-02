import React from 'react';
import { Icon } from '@iconify/react';
import { WishDiv, Wishtext, Icons } from './style';
import githubIcon from '@iconify/icons-simple-icons/github';
import googleIcon from '@iconify/icons-simple-icons/google';

const Wish = () => {
  return (
    <>
      <WishDiv>
        <Wishtext>
          <h1>Šťastný Nový rok 2021</h1>
          <p>
            Všem nadšencům přeji v Novém roce pozitivní myšlení, spoustu radosti
            z programování a hodně zdraví a sil pro React!
          </p>
        </Wishtext>
        <Icons>
          <a href="" target="_blank">
            <Icon icon={githubIcon} style={{ color: '#FFF6D2' }} />
          </a>
          <a href="mailto: blanka.seman@gmail.com" target="_blank">
            <Icon icon={googleIcon} style={{ color: '#FFF6D2' }} />
          </a>
        </Icons>
      </WishDiv>
    </>
  );
};
export default Wish;
