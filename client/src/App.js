import React from 'react';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

class App extends Component {

  state = { todos: [] }

  componentDidMount() {
    // TODO will make a call to the rails end to grab all the todo items
    // TODO set state of todo to the ones we have in database
  }

  addItem = (incomingTodo) => {
    // TODO add the new todo to rails end
    // TODO update state in front end
  }

  updateTodo = (id) => {
    // TODO update the todo with id in the db
    // TODO update the todo with the id in the state
  }

  deleteTodo = (id) => {
    // TODO make api call to delete item with id in db
    // TODO delete item with id in state
  }

  render() {
    return (
      <Container>

      </Container>
    )
  }
}

export default App;
