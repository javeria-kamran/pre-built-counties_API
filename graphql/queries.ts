
export const FETCH_COUNTRIES_LIST = `
  query GetCountriesList {
    countries {
      code
      name
      emoji
    }
  }
`;

export const FETCH_COUNTRY_INFO = `
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
