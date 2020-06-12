import _ from "lodash";
import faker from "faker";
import { PropTypes } from "prop-types";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";

const initialState = { isLoading: false, results: [], value: "" };

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, "$"),
}));

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  handleResultSelect(e, { result }) {
    this.setState({ value: result.title });
  }
  handleSearchChange(e, { value }) {
    // console.log("Props at search: ", this.props);
    // console.log("Input  value: ", value);
    const searches = value.split(",");
    console.log("Searches: ", searches);

    const searchQuery = {};

    for (let i = 0; i < searches.length; i++) {
      console.log(`${i}: `, searches[i]);

      if (String(searches[i]).toLowerCase().includes("iphone")) {
        searchQuery.name = searches[i];
      }
      if (String(searches[i]).toLowerCase().includes("gb")) {
        searchQuery.size = searches[i].trim();
      }
    }

    console.log("Searches Query: ", searchQuery);

    this.props.methods(true, [], value);

    setTimeout(() => {
      // console.log("Source,", source);
      // console.log("Length: ", this.props.state.value.length);

      if (this.props.state.value.length < 1) {
        // console.log("treyinf to set see me!");

        return this.props.methods(false, [], "");
      }

      const re = new RegExp(_.escapeRegExp(this.props.state.value), "i");
      const isMatch = (result) => re.test(result.name);

      this.props.methods(
        false,
        _.filter(this.props.state.phones, {
          name: searchQuery.name,
          size: searchQuery.size,
        }),
        value
      );
    }, 300);
  }

  render() {
    const { isLoading, value, results, phones } = this.props.state;
    // console.log("OK", this.props);
    console.log({
      value,
      results,
      phones,
      isLoading,
    });

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(
              this.handleSearchChange.bind(this),
              500,
              {
                leading: true,
              }
            )}
            showNoResults={false}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

SearchBar.propTypes = {
  handleSetState: PropTypes.func,
};
