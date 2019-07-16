import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';

import { Test } from './Test';
import { Todo, fetchTodos, deleteTodo } from '../actions';

interface AppProps {
  color: string;
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  counter: number;
  fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      counter: 0,
      fetching: false
    };
  }

  componentDidMount() {
    // this.props.fetchTodos();
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({
        fetching: false
      });
    }
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDrecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  buttonClick = (): void => {
    this.props.fetchTodos();
    this.setState({
      fetching: true
    });
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div>{todo.title}</div>;
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDrecrement}>Drecrement</button>
        <button onClick={this.buttonClick}>Fetch</button>
        {/* <p>{this.state.counter}</p> */}
        <Test color={this.props.color} />
        {this.state.fetching ? 'Loading...' : this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  };
};

// const mapDispatchToProps =
export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
