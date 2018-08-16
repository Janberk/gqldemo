import { gql } from 'apollo-boost';

const GET_ALL_TODOS = gql`
{
  todos {
    id
    title
    userId
    completed
  }
}
`;

export { GET_ALL_TODOS };
