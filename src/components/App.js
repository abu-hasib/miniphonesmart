import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContestPreview from "./ContestPreview";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: "Naming contest",
      contests: [],
    };
  }

  componentDidMount() {
    Axios.get("/api/contests")
      .then((payload) => {
        console.log(payload);

        this.setState({ contests: payload.data.contests });
      })
      .catch((error) => console.log(error));
    // this.setState({ contests: data.contests });
  }

  componentWillUnmount() {}

  /**
   * to write "state" this way a plugin is needed
   */

  // state = {
  //     testValue: 42
  // }

  render() {
    return (
      <div>
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map((contest) => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>

        <Footer footerMessage="copyright" />
      </div>
    );
  }
}

export default App;
