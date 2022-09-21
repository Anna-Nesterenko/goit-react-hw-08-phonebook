import styled from 'styled-components';

export const NotFoundPage = () => {
  return (
    <>
      <ErrorTitle>Error 404</ErrorTitle>
      <ErrorText>Woops... Looks like this page doesn't exist!</ErrorText>
    </>
  );
};

const ErrorTitle = styled.h3`
  margin-top: 35px;
  text-align: center;
  font-size: 36px;
`;
const ErrorText = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;
