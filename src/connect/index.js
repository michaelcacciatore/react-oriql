import React from 'react';
import Context from '../context';

import constructQuery from '../utils/constructQuery';
import getDisplayName from '../utils/getDisplayName';

const connect = ({ instance, getQueryAsString } = {}) => Component => {
  const ConnectedComponent = props => (
    <Context.Consumer>
      {({ instances, queries }) => (
        <Component
          oriql={{
            query: constructQuery(
              instances[instance] || getDisplayName(Component.displayName),
              queries,
              getQueryAsString,
            ),
            component: instances[instance] || getDisplayName(Component.displayName),
          }}
          {...props}
        />
      )}
    </Context.Consumer>
  );

  ConnectedComponent.displayName = `Oriql(${getDisplayName(Component.displayName)})`;

  return ConnectedComponent;
};

export default connect;
