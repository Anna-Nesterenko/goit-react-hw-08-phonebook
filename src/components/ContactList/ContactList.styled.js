import styled from 'styled-components';

export const ContactContainer = styled.ul`
  padding: 30px;
  margin: 0;
  margin-top: 30px;
  outline: 1px solid white;
  width: 400px;
  box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,
    0 0 60px #008296;
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  

  & > span {
    width: 50%;
  }
`;

export const ContactBtn = styled.button`
  /* margin-left: 20px; */
`;
