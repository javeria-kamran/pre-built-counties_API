import { gql } from "@apollo/client";

export const FETCH_COUNTRIES_LIST = gql`
  query GetCountriesList {
    countries {
      code
      name
      emoji
    }
  }
`;

export const FETCH_COUNTRY_INFO = gql`
  query FetchCountryInfo($code: ID!) {
    country(code: $code) {
      name
      emoji
      capital
      currency
      languages {
        name
      }
    }
  }
`;
