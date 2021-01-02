import styled from 'styled-components';
import img from '../../img/podklad.jpg';

export const WishDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${img});
  max-width: 480px;
  max-height: 600px;
  padding-left: 10px;
  text-align: center;
`;

export const Wishtext = styled.div`
  margin-top: 100px;
  padding: 20px;
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
  }
  @media (min-width: 900px) {
    margin-top: 200px;
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 25px;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding-left: 20px;
  font-size: 25px;
  a {
    padding: 10px;
  }
`;
