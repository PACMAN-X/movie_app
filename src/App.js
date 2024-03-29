import React from 'react'

class App extends React.Component {
  state = {
    isLoading: true
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 6000);
  }
  render() {
    const { isLoading } = this.state
    return <div><h1>{isLoading ? "Loading...." : "We are Ready!"}</h1></div>
  }
}

export default App