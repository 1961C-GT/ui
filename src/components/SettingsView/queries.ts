import gql from "graphql-tag";

export const settingsQuery = gql`
  {
    theme @client
    devMode @client
  }
`;
