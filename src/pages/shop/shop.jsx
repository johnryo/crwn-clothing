import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection/collection';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route
      path={`${match.path}`}
      component={CollectionsOverview}
      exact
    />
    <Route
      path={`${match.path}/:collectionId`}
      component={CollectionPage}
    />
  </div>
);

export default ShopPage;