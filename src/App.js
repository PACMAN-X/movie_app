import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("constructed!")
  }
  state = { count: 0 }
  componentDidMount() {
    console.log("didMount!")
  }
  componentDidUpdate() {
    console.log("didUpdate!")
  }
  add = () => this.setState(current => ({ count: current.count + 1 }))
  minus = () => this.setState(current => ({ count: current.count - 1 }))
  render() {
    console.log("render!")
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add} >Add</button>
      <button onClick={this.minus}>Minus</button>
    </div >
  }
}

export default App;
