/**
 * Loads a route.
 *
 * @method loadRoute
 * @param  {Function} cb [description]
 * @return {[type]}      [description]
 */
const loadRoute = (cb:Function):Function => {
  return (module:Object):Function => cb(null, module.default);
}

/**
 * Error loading the view.
 *
 * @method errorLoading
 * @param {Object} error The error object
 */
const errorLoading = (error:Object) => {
  throw new Error(`loading the view --  ${error.message}`);
}

export {
  loadRoute,
  errorLoading
}
