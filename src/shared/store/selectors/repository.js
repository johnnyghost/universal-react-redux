import { createSelector } from 'reselect';

/**
 * Get the list of repositories
 *
 * @param {Object} state The current state
 * @return {Array} of repositories
 */
const getRepos = (state:Object):?Array => state.repository.list || [];

/**
 * Map repos name.
 *
 * @param {Array<Object>} repos Array of repos
 * @return {Array} of the repositories names
 */
const mapReposToName = (repos:?Array<Object>):?string[] => repos.map((repo:Object):string => repo.name);

export const getReposName = createSelector(getRepos, mapReposToName);
