import React from 'react';
import { useSelector } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionPageContainer, Items, Title } from './collection.styles';

const CollectionPage = ({ match }) => {
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
