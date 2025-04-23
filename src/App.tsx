import React from 'react';

export class App extends React.Component<{}, { key: string | null }> {
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  state = {
    key: null,
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key === null
            ? `Nothing was pressed yet`
            : `The last pressed key is [${this.state.key}]`}
        </p>
      </div>
    );
  }
}
