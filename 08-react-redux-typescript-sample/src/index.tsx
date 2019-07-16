import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { counter: 0 };
  }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };

  onDrecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDrecrement}>Drecrement</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

ReactDOM.render(<App color='red' />, document.querySelector('#root'));
