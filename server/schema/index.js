import { readFileSync } from 'fs';
import { makeExecutableSchema } from 'graphql-tools';
import { find, filter } from 'lodash';
import axios from 'axios';

const typeDefs = readFileSync(__dirname + '/schema.graphql', 'utf8');
const resolvers = {
  Query: {
    todos: () => axios.get('http://localhost:3001/todos').then(res => res.data),

    todo: (_, { id }) => axios.get('http://localhost:3001/todos')
      .then(res => res.data.find(
        todo => todo.id === id
      )),

    users: () => axios.get('http://localhost:3001/users').then(res => res.data),

    user: (_, { id }) => axios.get('http://localhost:3001/users')
      .then(res => res.data.find(
        user => user.id === id
      )),

    todosByUser: (_, { user }) => axios.get('http://localhost:3001/todos')
      .then(res => res.data.filter(
        todo => todo.userId == user.id)
      )
  }
}

const executableSchema = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
});

export default executableSchema;
