import styled, { css } from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  @media screen and (max-width: 800px) {
    padding-right: unset;
  }
`;

export const CheckoutImage = styled.img`
  width: 100%;
  height: 100%;
`;

const valuesWidth = css`
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 20%;
  }
`;

export const Name = styled.span`
  ${valuesWidth}
`;

export const Quantity = styled.span`
  ${valuesWidth}
  display: flex;
  padding-left: 20px;
`;

export const Price = styled.span`
  ${valuesWidth}
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Remove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
