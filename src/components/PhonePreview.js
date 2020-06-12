import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Card, Icon, Image, Segment } from "semantic-ui-react";

class PhonePreview extends Component {
  handleClick() {
    console.log("lo: ", this.props.condition);
  }

  render() {
    return (
      <div className="PhonePreview" onClick={this.handleClick.bind(this)}>
        <div className="category-name">{this.props.name}</div>
        <div className="contest-name">{this.props.contestName}</div>
      </div>
    );
  }
}

const CardExampleCard = ({ name, condition, price, size }) => (
  <Segment>
    <Card fluid>
      <Image src={detectImage(name)} wrapped ui={false} />
      <Card.Content>
        <Card.Header>${price}</Card.Header>
        <Card.Meta>
          <span className="date">{size}</span>
        </Card.Meta>
        <Card.Description>{name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {condition}
        </a>
      </Card.Content>
    </Card>
  </Segment>
);

const detectImage = (phoneVersion) => {
  let url;
  switch (phoneVersion) {
    case "iPhone XS Max":
      url = "assets/images/iphones/iphone_xs_max.png";
      break;
    case "iPhone XS":
      url = "assets/images/iphones/iphone_xs.png";
      break;
    case "iPhone XR":
      url = "assets/images/iphones/iphone_xr.png";
      break;
    case "iPhone X":
      url = "assets/images/iphones/X.png";
      break;
    case "iPhone 8 PLUS":
      url = "assets/images/iphones/iphone_8_plus.png";
      break;
    case "iPhone 8":
      url = "assets/images/iphones/iphone_8.png";
      break;
    case "iPhone 7 Plus":
      url = "assets/images/iphones/iphone_7_plus.png";
      break;
    case "iPhone 7":
      url = "assets/images/iphones/iphone_7.png";
      break;
    case "iPhone 6S Plus":
      url = "assets/images/iphones/iphone_6s_plus.png";
      break;
    case "iPhone 6S":
      url = "assets/images/iphones/iphone_6s.png";
      break;
    case "iPhone 6 Plus":
      url = "assets/images/iphones/iphone_6_plus.png";
      break;
    case "iPhone 6":
      url = "assets/images/iphones/iphone_6.png";
      break;
    case "iPhone SE":
      url = "assets/images/iphones/iphone_se.png";
      break;
    default:
      break;
  }
  return url;
};

export default CardExampleCard;

PhonePreview.propTypes = {
  contestName: PropTypes.string,
  categoryName: PropTypes.string,
};

// export default PhonePreview;
