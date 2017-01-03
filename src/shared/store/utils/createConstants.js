/**
 * Create a constant object.
 *
 * @method createConstants
 * @public
 *
 * @param  {String} constants The constants to be converted.
 * @return {Object} an key/value constant object
 */
export default function (...constants:Object):Object {
  return constants.reduce((accumulator:Object, constant:string):Object => {
    accumulator[constant] = constant;
    return accumulator;
  }, {});
}
