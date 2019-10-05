const regExp = /\(([^)]+)\)/;

/**
 * Strips out the actual display name from a component assuming it is wrapped in parentheses as is common
 * in libraries such as redux where the displayName is `ConnectedComponent(ActualComponentName)`
 * @param {string} name The displayName of the component
 * @returns {string} The actual displayName of the component
 */
export default name => {
  const result = regExp.exec(name) || [null, name];

  return result[1] || 'Anonymous';
};
