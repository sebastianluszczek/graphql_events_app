import gql from "graphql-tag";

export const LOGIN_USER_QUERY = gql`
  query LoginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

export const EVENTS_QUERY = gql`
  query {
    events {
      _id
      title
      description
      date
      creator {
        email
      }
    }
  }
`;

export const BOOKINGS_QUERY = gql`
  query {
    bookings {
      _id
      createdAt
      user {
        email
        _id
      }
      event {
        title
        date
        _id
        price
        creator {
          email
        }
      }
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($userInput: UserInput!) {
    createUser(userInput: $userInput) {
      _id
      email
    }
  }
`;

export const BOOK_EVENT_MUTATION = gql`
  mutation BookEventMutation($eventID: ID!) {
    createUser(eventID: $eventID) {
      _id
    }
  }
`;
