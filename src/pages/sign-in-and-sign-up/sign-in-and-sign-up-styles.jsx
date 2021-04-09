import styled from 'styled-components';

export const SignInAndSignUpPageContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    padding: 0 20px;
    max-width: 100vw;
    flex-direction: column;
  }
`;
