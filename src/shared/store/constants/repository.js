import { createConstants } from 'store/utils';

const githubConstants = createConstants(
  'FETCH_REPOS_REQUEST',
  'FETCH_REPOS_SUCCESS',
  'ERROR'
);

export default githubConstants;
