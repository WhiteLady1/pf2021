import styled from 'styled-components';

export const ImgDiv = styled.div`
  @media (max-width: 600px) {
    width: 0%;
  }
  display: flex;
  width: 50%;
  max-width: 490px;
`;

export const Image = styled.img`
  @media (max-width: 600px) {
    visibility: hidden;
  }
  padding: 10px;
  width: 100%;
  opacity: 0.7;
`;
