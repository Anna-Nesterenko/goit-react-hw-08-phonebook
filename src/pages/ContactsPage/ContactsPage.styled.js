import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px;
  margin-top: 30px;
  align-items: baseline;
  justify-content: space-evenly;
`;
export const TextStyled = styled.h3`
  margin-top: 50px;
  font-size: 22px;
  text-align: center;
`;

export const WrapperContacts = styled.div`
  padding: 15px;
  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;
  @media screen and (max-width: 800px) {
    margin-left: 10px;
    &:first-child {
      margin-left: 0;
    }
  }
`;
