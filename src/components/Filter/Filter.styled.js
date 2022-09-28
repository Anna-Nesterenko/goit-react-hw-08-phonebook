import styled from 'styled-components';

export const Field = styled.input`
  margin-left: 15px;
  margin-right: 10px;
  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid white;
  outline: none;
  color: white;
  height: 20px;
  font-family: inherit;
  font-size: 18px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.56);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #008296, 0 0 20px #008296, 0 0 30px #008296,
      0 0 60px #008296;
  }
`;
