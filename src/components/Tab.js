import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import PhoneList from "./PhoneList";

export default class Tabs extends Component {
  render() {
    const panes = [
      {
        menuItem: "Tab 1",
        render: () => (
          <Tab.Pane>
            <PhoneList {...this.props}></PhoneList>
          </Tab.Pane>
        ),
      },
      { menuItem: "Tab 2", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: "Tab 3", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    ];
    console.log(this.props);

    return <Tab panes={panes} />;
  }
}

// const Tabs = (props) => ;

// export default Tabs;
