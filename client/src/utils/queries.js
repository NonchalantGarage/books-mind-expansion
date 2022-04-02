import { gql } from "@apollo/client";

export const QUERY_BOOKS = gql`
  query Book($bookId: String) {
    thoughts(username: $username) {
      _id
      thoughtText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;