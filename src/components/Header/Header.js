import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import FilterButton from '../FilterButton/FilterButton';


class Header extends React.Component {
  render() {
    return (
      <div className="page-header">
        <div className="header-container">
          <div className="logo-container">
            <h1 className="logo-text">Find Noms</h1>
          </div>
          <div className="search-filter-container">
            <SearchBar searchPlaces={this.props.searchPlaces} />
            <FilterButton businesses={this.props.businesses} sortPlaces={this.props.sortPlaces}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
