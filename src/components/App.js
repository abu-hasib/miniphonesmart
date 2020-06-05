import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            testValue: 42,
        };
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {
       
    }

  // state = {
  //     testValue: 42
  // }

  render() {
    return (
      <div>
        <Header message="This is the header" />
        <div>{this.state.testValue}</div>
        <Footer footerMessage="copyright" />
      </div>
    );
  }
}

export default App