import gql from "graphql-tag";

export const detailsViewQuery = gql`
  query {
    devMode @client
    nodes {
      id
      type
      name
      pose {
        position {
          lat
          lon
        }
        orientation {
          heading
          source
        }
      }
      telemetry {
        groundSpeed
        temp
        batt
      }
    }
  }
`;
