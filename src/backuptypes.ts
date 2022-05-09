import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type PeopleQueryResponse = {
  __typename?: 'PeopleQueryResponse';
  count: Scalars['Int'];
  errorMsg?: Maybe<Scalars['String']>;
  page: Scalars['Int'];
  people: Array<Maybe<Person>>;
  success: Scalars['Boolean'];
};

export type Person = {
  __typename?: 'Person';
  gender: Scalars['String'];
  height: Scalars['String'];
  homeworld: Scalars['String'];
  mass: Scalars['String'];
  name: Scalars['String'];
};

export type PersonQueryResponse = {
  __typename?: 'PersonQueryResponse';
  errorMsg?: Maybe<Scalars['String']>;
  person?: Maybe<Person>;
  success: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  people?: Maybe<PeopleQueryResponse>;
  person?: Maybe<PersonQueryResponse>;
};


export type QueryPeopleArgs = {
  pageNo: Scalars['Int'];
};


export type QueryPersonArgs = {
  name: Scalars['String'];
};

export type PeopleQueryVariables = Exact<{
  pageNo: Scalars['Int'];
}>;


export type PeopleQuery = { __typename?: 'Query', people?: { __typename?: 'PeopleQueryResponse', count: number, page: number, success: boolean, errorMsg?: string | null, people: Array<{ __typename?: 'Person', name: string, mass: string, gender: string, height: string, homeworld: string } | null> } | null };

export type PersonQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type PersonQuery = { __typename?: 'Query', person?: { __typename?: 'PersonQueryResponse', success: boolean, errorMsg?: string | null, person?: { __typename?: 'Person', name: string, mass: string, gender: string, height: string, homeworld: string } | null } | null };


export const Document = gql`
    query ($pageNo: Int!) {
  people(pageNo: $pageNo) {
    people {
      name
      mass
      gender
      height
      homeworld
    }
    count
    page
    success
    errorMsg
  }
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *      pageNo: // value for 'pageNo'
 *   },
 * });
 */
export function usePeopleQuery(baseOptions: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(Document, options);
      }
export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(Document, options);
        }
export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;
export const PersonDocument = gql`
    query Person($name: String!) {
  person(name: $name) {
    person {
      name
      mass
      gender
      height
      homeworld
    }
    success
    errorMsg
  }
}
    `;

/**
 * __usePersonQuery__
 *
 * To run a query within a React component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePersonQuery(baseOptions: Apollo.QueryHookOptions<PersonQuery, PersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
      }
export function usePersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
        }
export type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export type PersonQueryResult = Apollo.QueryResult<PersonQuery, PersonQueryVariables>;