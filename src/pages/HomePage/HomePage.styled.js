import styled from 'styled-components';
// import { Link } from 'react-router-dom';

export const HomeTitle = styled.p`
  max-width: 400px;
  padding-left: 15px;
  font-size: 32px;
  font-weight: 700;
  margin-top: 30px;
  text-align: center;
  @media screen and (max-width: 550px) {
    font-size: 26px;
  }
`;
export const WrapperHomePage = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 40px;
  @media screen and (max-width: 550px) {
    padding: 25px;
  }
`;
