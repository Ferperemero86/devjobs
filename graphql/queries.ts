import gql from 'graphql-tag';

export const CHARACTERS_QUERY = gql`
  query getUser {
    getUser {
      id
    }
  }
`;
