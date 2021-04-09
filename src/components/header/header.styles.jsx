import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/blueberry.svg';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin: 20px 0;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px 10px;

  @media screen and (max-width: 800px) {
    width: 40px;
    padding: 0;
  }
`;

export const CustomLogo = styled(Logo)`
  width: 50px;
  height: 50px;
`;

export const BrandName = styled.div`
  font-size: 2.5rem;
  margin: auto auto auto 1rem;

  @media screen and (max-width: 800px) {
    display: none;
    /* font-size: 1rem;
    margin-top: 5px; */
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;

  @media screen and (max-width: 800px) {
    /* font-size: 0.8rem; */
  }
`;
