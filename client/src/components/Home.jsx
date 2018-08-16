import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_TODOS } from '../data/queries';

class Home extends Component {

  render() {

    return (
      <Query query={GET_ALL_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return 'Error!\n' + error.message;

          return (
            <div>
              <ul>
                {data.todos.map(todo => (
                  <li key={todo.id}>
                    <p>Id: {todo.id}</p>
                    <p>Title: {todo.title}</p>
                    <p>UserId: {todo.userId}</p>
                    <p>Completed: {todo.completed}</p>
                    <br/>
                  </li>
                ))}
              </ul>
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Home;
