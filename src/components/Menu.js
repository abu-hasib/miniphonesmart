import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import PropTypes from "prop-types";
import SearchBar from "./Search";

export default class MenuExampleStackable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick() {}

  handleSetState() {
    this.props.methods.childSetState(true);
  }

  render() {
    console.log("PRops: ", this.props);

    const { activeItem } = this.state;
    const cloneProps = Object.assign({}, this.props);

    const transport = Object.assign({}, this.props);
    console.log("TRqaasnn: ", transport);

    return (
      <Menu stackable inverted size="small">
        <Menu.Item>
          <img src="assets/images/logo/gray_logo.svg" />
        </Menu.Item>

        <Menu.Item name="features" active={activeItem === "features"}>
          Features
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item name="testimonials" active={activeItem === "testimonials"}>
            Testimonials
          </Menu.Item>

          <Menu.Item
            name="sign-in"
            active={activeItem === "sign-in"}
            // onClick={this.handleItemClick.bind(this)}
          >
            <SearchBar
              {...transport}
              // handleSetState={this.handleSetState.bind(this)}
            ></SearchBar>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

MenuExampleStackable.propTypes = {
  childSetState: PropTypes.func,
};
