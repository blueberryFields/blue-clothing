import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from '../../pages/collection/collection.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const CollectionPageContainer = (props) => {
  const isCollectionLoaded = useSelector(selectIsCollectionsLoaded);

  return (
    <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
  );
};

export default CollectionPageContainer;
