import React from 'react';
import OriqlContext from '../context';

const OriqlProvider = ({ children, Context = OriqlContext, client = {} }) => (
  <Context.Provider value={client}>{children}</Context.Provider>
);

OriqlProvider.displayName = 'OriqlProvider';

export default OriqlProvider;
