import { UPDATE_COLLECTIONS } from '../constants/shop.constants';

export const updateCollections = collectionsMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});