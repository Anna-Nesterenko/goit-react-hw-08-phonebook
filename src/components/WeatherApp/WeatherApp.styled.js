import styled from 'styled-components';

export const WeatherName = styled.h1`
  font-size: 2rem;
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 450px;
  background-color: rgba(226, 226, 226, 0.2);
  text-align: center;
  box-shadow: rgb(33 33 33) 0px 2px 10px 1px;
  padding: 20px;
  @media screen and (max-width: 750px) {
    padding: 15px;
  }
`;

export const CitySearch = styled.input`
  width: 200px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  outline: none;
  border-radius: 20px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: white;
  background-position: 10px 10px;
  padding: 12px 20px 12px 20px;
  transition: width 0.4s ease-in-out;
  &:focus {
    width: 60%;
  }
`;

export const CityName = styled.div`
  margin-top: 10px;
  font-size: 1.25em;
`;

export const DateWrapper = styled.div`
  font-size: 1.25em;
  font-weight: 600;
`;

export const IconStyled = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #1e2432;
  text-align: center;
  @media screen and (max-width: 750px) {
    font-size: 3rem;
  }
`;

export const DegStyled = styled.span`
  font-size: 3rem;
  @media screen and (max-width: 750px) {
    font-size: 2.5rem;
  }
`;

export const WindStyled = styled.div`
  font-weight: 600;
`;

export const ErroreMessage = styled.span`
  display: block;
  text-align: center;
  color: rgb(20, 2, 2);
  font-size: 30px;
`;
