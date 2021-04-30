import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import './FilterButton.css';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #ddd',
    minWidth: '280px',
    padding: '5px 10px',
    borderRadius: '10px'
  },
})((props) => (
  <Menu
    className="filter-menu-container"
    elevation={10}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const GreenRadio = withStyles({
  root: {
    color: '#000',
    '&$checked': {
      color: '#000',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);



class FilterButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      sort: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }

  handleClick(event) {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleChange(event) {
     this.setState({
       sort: event.target.value
     });
   }

 handleSubmit(event) {
   event.preventDefault();

   if (this.state.sort === "ascending") {
      this.props.businesses.sort((a,b) => (a.rating - b.rating))
      this.props.sortPlaces(this.props.businesses);
    }
    if (this.state.sort === "descending") {
      this.props.businesses.sort((a,b) => (b.rating - a.rating))
       this.props.sortPlaces(this.props.businesses);
    }
 }


 handleClose() {
   this.setState({
     anchorEl: null
   });
 };


  render() {
    return (
      <div className="filter">
        <Button
          className="filter-button"
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={this.handleClick}
        >
          Filter
        </Button>
        <StyledMenu
          id="filter-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <RadioGroup id="radio-list" aria-label="quiz" name="quiz" value={this.state.sort} onChange={this.handleChange}>
            <FormControlLabel value="descending" control={<GreenRadio checkedIcon={<CheckCircleIcon />} />}  className="filter-label-text" label="Ratings High to Low" />
            <FormControlLabel value="ascending" control={<GreenRadio checkedIcon={<CheckCircleIcon />} />}  className="filter-label-text" label="Ratings Low to High" />
          </RadioGroup>
          <div className="apply-button-container">
            <Button type="submit" className="apply-button" onClick={this.handleSubmit}>Apply</Button>
          </div>
        </StyledMenu>
      </div>
    );
  }
}

export default FilterButton;
