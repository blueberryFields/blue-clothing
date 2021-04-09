import styled from 'styled-components';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: unset;
    padding-bottom: 50px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
