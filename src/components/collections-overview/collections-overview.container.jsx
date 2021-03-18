import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from '../collections-overview/collections-overview.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionsOverviewContainer = (props) => {
  const isCollectionFetching = useSelector(selectIsCollectionFetching);

  return (
    <CollectionsOverviewWithSpinner
      isLoading={isCollectionFetching}
      {...props}
    />
  );
};

export default CollectionsOverviewContainer;
