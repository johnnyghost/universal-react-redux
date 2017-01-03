/**
 * Default HTTP options.
 * @type {Object}
 */
const HTTPDefaultValues = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

/**
 * An HTTP wrapper using fetch lib.
 * The available operations are:
 *  - get
 *  - post
 *  - put
 *  - delete
 *
 * You can check more info on the fetch page
 * @see https://developer.mozilla.org/en/docs/Web/API/Fetch_API
 */
const HTTPRequest = {

/**
  * Performs a get call through http-request.
  *
  * @method HTTPRequest.get
  * @public
  *
  * @param {String} url                The server URL that will be used for the request
  * @param {Object} [options]          Additional (non-endpoint-specific) parameters
  * @param {Object} [options.baseURL]  Will be prepended to url unless 'url' is absolute
  * @param {Object} [options.headers]  Custom Headers to be sent
  * @param {Number} [options.timeout]  Specifies the number in milliseconds before the request times out
  * @param {Object} [options.params]   URL parameters to be sent with the request
  * @param {Object} [options.auth]     Indicate that HTTP basic should be used
  * @return {Promise} A resolved promise with the service response or reject with an HTTP error
  */
  get(url:string, options:?Object):Promise {
    return makeRequest(url, 'GET', options);
  },

  /**
   * Performs a post call through http-request.
   *
   * @method HTTPRequest.post
   * @public
   *
   * @param {String} url                The server URL that will be used for the request
   * @param {Object} [options]          Additional (non-endpoint-specific) parameters
   * @param {String} [options.baseURL]  Will be prepended to url unless 'url' is absolute
   * @param {Object} [options.headers]  Custom Headers to be sent
   * @param {Number} [options.timeout]  Specifies the number in milliseconds before the request times out
   * @param {Object} [options.params]   URL parameters to be sent with the request
   * @param {Object} [options.data]     Is the data to be sent as the request body
   * @param {Object} [options.auth]     Indicate that HTTP basic should be used
   * @returns {Promise} A resolved promise with the service response
   *                                         or reject with an HTTP error
   */
  post(url:string, options:?Object):Promise {
    return makeRequest(url, 'POST', options);
  },

  /**
   * Performs a put call through http-request.
   *
   * @method HTTPRequest.put
   * @public
   *
   * @param {String} url                The server URL that will be used for the request
   * @param {Object} [options]          Additional (non-endpoint-specific) parameters
   * @param {String} [options.baseURL]  Will be prepended to url unless 'url' is absolute
   * @param {Object} [options.headers]  Custom Headers to be sent
   * @param {Number} [options.timeout]  Specifies the number in milliseconds before the request times out
   * @param {Object} [options.params]   URL parameters to be sent with the request
   * @param {Object} [options.data]     Is the data to be sent as the request body
   * @param {Object} [options.auth]     Indicate that HTTP basic should be used
   * @returns {Promise} A resolved promise with the service response
   *                                         or reject with an HTTP error
   */
  put(url:string, options:?Object):Promise {
    return makeRequest(url, 'PUT', options);
  },

  /**
   * Performs a delete call through http-request.
   *
   * @method HTTPRequest.delete
   * @public
   *
   * @param {String} url                The server URL that will be used for the request
   * @param {Object} [options]          Additional (non-endpoint-specific) parameters
   * @param {Object} [options.baseURL]  Will be prepended to url unless 'url' is absolute
   * @param {Object} [options.headers]  Custom Headers to be sent
   * @param {Number} [options.timeout]  Specifies the number in milliseconds before the request times out
   * @param {Object} [options.params]   URL parameters to be sent with the request
   * @param {Object} [options.auth]     Indicate that HTTP basic should be used
   * @return {Promise} A resolved promise with the service response
   *                                         or reject with an HTTP error
   */
  delete(url:string, options:?Object):Promise {
    return makeRequest(url, 'DELETE', options);
  }
}

/**
 * Make a request.
 *
 * @param {String} url The url
 * @param {String} method The method to be used.
 * @param {Object} options The request options.
 *
 * @return {Promise}
 */
const makeRequest = (url:string, method:string, options:?Object={}):Promise => {

  const httpOptions = Object.assign({ method }, options, HTTPDefaultValues);
  url = options.data ? buildURLWithQueryParameters(url, options.data) : url;

  return fetch(url, httpOptions)
    .then(successResponseHandler)
    .catch(errorResponseHandler)
}

/**
 * Success response handler.
 *
 * @param {Object} response The response Object
 * @return {Object}
 */
const successResponseHandler = ((response:Object):Object => response.json());

/**
 * Throw a reponse error.
 *
 * @method errorResponseHandler
 *
 * @param  {Object} error The error
 * @throw {Error}
 */
const errorResponseHandler = ((error:Object) => {
  throw new Error(error);
});

/**
 * Build the url with queryParameters.
 *
 * @method buildURLWithQueryParameters
 *
 * @param  {String} url The url to append the query parameters
 * @param  {Object} queryParameters The query parameters
 * @return {String} An url with query parameters
 */
const buildURLWithQueryParameters = (url:string, queryParameters:Object):string => {

  url = new URL(url);
  Object.keys(queryParameters).forEach((key:string) => { url.searchParams.append(key, queryParameters[key]) });

  return url.href;
}

export default HTTPRequest;
