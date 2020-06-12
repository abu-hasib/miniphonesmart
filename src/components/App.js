import React from "react";
import { Button, Container } from "semantic-ui-react";

import Axios from "axios";
import PhoneList from "./PhoneList";
import MenuExampleStackable from "./Menu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Naming contest",
      phones: this.props.initData,
      isLoading: false,
      results: [],
      value: "",
    };
  }

  componentDidMount() {
    Axios.get("api/phones/buy")
      .then((payload) => {
        console.log(payload);
        const phones = shuffle(payload.data.results.phones);
        this.setState({ phones: phones });
      })
      .catch((error) => console.log(error));
    // this.setState({ phones: data.phones });
  }

  componentWillUnmount() {}

  /**
   * to write "state" this way a plugin is needed
   */

  // state = {
  //     testValue: 42
  // }

  childSetState(isLoading, results = [], value) {
    this.setState({ isLoading, results, value });
  }

  render() {
    const transport = {};
    transport.state = this.state;
    transport.methods = this.childSetState.bind(this);
    return (
      <div>
        <MenuExampleStackable {...transport} />
        <Container>
          <Button primary>Load iphones</Button>
          <PhoneList
            phones={
              this.state.results.length > 0
                ? this.state.results
                : this.state.phones
            }
          />
        </Container>
      </div>
    );
  }
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default App;
