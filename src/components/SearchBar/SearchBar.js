import React from 'react';
import './SearchBar.css';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleSearch(event) {
    this.props.searchPlaces(this.state.term);
    event.preventDefault();
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      this.props.searchPlaces(this.state.term);
      event.preventDefault();
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-fields">
          <input data-testid="test-search" id="search-input" type="text" placeholder="Search for a restaurant" onChange={this.handleTermChange} onKeyDown={this.handleKeyDown}/>
        </div>
        <div className="SearchBar-submit">
          <SearchIcon className="search-icon" onClick={this.handleSearch}/>
        </div>
      </div>
    );
  }
}

export default SearchBar;
