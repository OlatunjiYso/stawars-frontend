import { gql } from '@apollo/client';

export const QUERY_PEOPLE = gql`
query($pageNo: Int!)   {
    people(pageNo: $pageNo) {
      people {
        name,
        mass,
        gender,
        height,
        homeworld
      },
      count,
      page,
      success,
      errorMsg
    }
  }
`;