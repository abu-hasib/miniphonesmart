import React from "react";
import { PropTypes } from "prop-types";
import { Grid, GridColumn } from "semantic-ui-react";
import PhonePreview from "./PhonePreview";
import CardExampleCard from "./PhonePreview";

const PhoneList = ({ phones }) => {
  return (
    <div>
      <Grid columns={3} doubling stackable>
        {phones.map((phone) => (
          <Grid.Column key={phone._id}>
            <CardExampleCard key={phone._id} {...phone} />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
};

PhoneList.propTypes = {
  contests: PropTypes.array,
};
{
  /* <PhonePreview key={contest.id} {...contest} /> */
}
export default PhoneList;
