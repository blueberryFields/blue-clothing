import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItemFromCart,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Quantity,
  Value,
  Arrow,
  Price,
  Remove,
  CheckoutImage,
} from './checkout-item.styles';
// import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <CheckoutImage src={imageUrl} alt="item" />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={() => dispatch(removeItemFromCart(cartItem))}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <Remove onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </Remove>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
