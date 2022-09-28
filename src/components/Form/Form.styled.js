import styled from 'styled-components';

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-size: 22px;
  width: 40%;
`;

export const Field = styled.input`
  margin-bottom: 25px;
  margin-top: 15px;
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
    box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,
      0 0 60px #008296;
  }
`;

export const BtnDisabled = styled.button`
  margin-bottom: 7px;
  color: ${props => (props.disabled ? `#7c7a7a` : ` #0f1111`)};
  background-color: ${props => (props.disabled ? `#afaaaa` : `white`)};
  border: 1px solid ${props => (props.disabled ? `#afaaaa` : `#d5d9d9`)};
  box-shadow: ${props =>
    props.disabled ? `none` : `rgba(213, 217, 217, 0.5) 0 2px 5px 0`};

  &:hover {
    color: ${props => (props.disabled ? `#7c7a7a` : `  white`)};
    background-color: ${props => (props.disabled ? `#afaaaa` : `#008296`)};
    box-shadow: ${props =>
      props.disabled
        ? `none`
        : `0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296`};
  }
`;
