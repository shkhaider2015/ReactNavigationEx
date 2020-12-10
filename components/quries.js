import { gql } from "@apollo/client";
// import { gql } from "@apollo/react-hoc";

export const user = gql`query($id : ID!) {
  user(id: $id) {
    id
    username
    email
    address {
      geo {
        lat
        lng
      }
    }
  }
}`

export const userPost = gql`query($id : ID!) {
  user(id: $id) {
    posts {
      data {
        id
        title
      }
    }
  }
}`

export const createUser = gql`mutation ($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    body
  }
}
`