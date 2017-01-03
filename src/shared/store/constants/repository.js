import { createConstants } from 'store/utils';

const catalogueConstants = createConstants(
  'FETCH_CATALOGUE_REQUEST',
  'FETCH_CATALOGUE_SUCCESS',
  'SEARCH_CATALOGUE_REQUEST',
  'SEARCH_CATALOGUE_SUCCESS',
  'ERROR'
);

export default catalogueConstants;
