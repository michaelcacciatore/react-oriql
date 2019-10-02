const regExp = /\(([^)]+)\)/;

export default name => {
  const result = regExp.exec(name);

  return result[1] || 'Anonymous';
};
