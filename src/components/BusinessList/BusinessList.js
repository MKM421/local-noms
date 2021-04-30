import React from 'react';
import Button from '@material-ui/core/Button';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import Skeleton from '@material-ui/lab/Skeleton';
import './BusinessList.css';
import Business from '../Business/Business';



class BusinessList extends React.Component {
  render() {
    return (
      <div id="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
        <div className="mobile-switch-container">
          <Button
            id="map-button"
            variant="contained"
            color="primary"
            onClick={() => {
              document.getElementById("map-container").style.display = "block";
              document.getElementById("list-button").style.display = "block";
              document.getElementById("BusinessList").style.display = "none";
              document.getElementById("map-button").style.display = "none";
            }}
          >
            <RoomOutlinedIcon className="mobile-switch-icon"/> Map
          </Button>
        </div>
      </div>

    );
  }
}

export default BusinessList;
