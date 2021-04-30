import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import './Business.css';


const GreenCheckbox = withStyles({
  root: {
    color: '#428a13',
    '&$checked': {
      color: '#428a13',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const StyledRating = withStyles({
  iconFilled: {
    color: '#bbb',
  },
  iconEmpty: {
    color:'#fff'
  }
})(Rating);



class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt={this.props.business.name}/>
        </div>
        <div className="Business-information">
          <div className="title-row">
            <h2>{this.props.business.name}</h2>
            <FormControlLabel
              className="favorite-icon"
              control={<GreenCheckbox icon={<FavoriteBorder />}
              checkedIcon={<Favorite />} name="checkedH" />}
             />
          </div>
          <div className="Business-reviews">
            <Rating
              className="restaurant-rating"
              name="half-rating-read"
              precision={0.1}
              value={this.props.business.rating}
              readOnly
            />
            <span className="user-ratings-total">({this.props.business.reviewCount})</span>
          </div>
          <StyledRating
            className="price-level"
            defaultValue={0}
            value={this.props.business.priceLevel}
            precision={1}
            max={3}
            icon={<AttachMoneyIcon fontSize="inherit" />}
            readOnly
          />
        </div>
      </div>
    );
  }
}

export default Business;
