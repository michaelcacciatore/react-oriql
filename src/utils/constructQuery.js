import gql from 'graphql-tag';

const getQuery = (instance, queries = {}) => queries[instance];

const constructQuery = (instance, queries = {}, getQueryAsString = false) => {
  const query = getQuery(instance, queries);

  if (query) {
    const constructedQuery = `query { ${query} }`;
    if (getQueryAsString) {
      return constructedQuery;
    }

    return gql(constructedQuery);
  }

  return query;
};

export default constructQuery;
