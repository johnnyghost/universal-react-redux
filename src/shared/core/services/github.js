import request from 'core/request';
import { github } from 'config';

/**
 * The github token
 */
const { TOKEN } = github;

/**
 * Github service.
 * Abstraction of the github API.
 */
const githubService = {

  /**
   * Get all the repos from the github.
   *
   * @method getRepos
   *
   * @return {Promise<Array>} An array of repositories
   */
  getRepos():Promise {
    return request.get(`https://api.github.com/user/repos?access_token=${TOKEN}`);
  },

  /**
   * Search User.
   *
   * @method searchUser
   *
   * @param {String} user The user to search for
   * @return {Promise<Array>} An array of github users
   */
  searchUser (user:?string):Promise {
    return request.get(`https://api.github.com/search/users?q=${user}&access_token=${TOKEN}`);
  }
}

export default githubService;
