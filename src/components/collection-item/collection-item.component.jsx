import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import {
  AddButton,
  CollectionFooter,
  CollectionItemContainer,
  Image,
  Name,
  Price,
} from './collection-item.styles';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer>
      <Image className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></Image>
      <CollectionFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooter>
      <AddButton inverted onClick={() => dispatch(addItem(item))}>
        ADD TO CART
      </AddButton>
    </CollectionItemContainer>
  );
};

export default CollectionItem;
