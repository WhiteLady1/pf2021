import styled from 'styled-components';

const MainDiv = styled.div`
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    margin-top: 0;
    height: 100vh;
  }
  display: flex;
  background-color: #ac591e;
  margin: auto;
  padding: 10px;
  margin-top: 50px;
  max-width: 980px;
`;

export default MainDiv;
