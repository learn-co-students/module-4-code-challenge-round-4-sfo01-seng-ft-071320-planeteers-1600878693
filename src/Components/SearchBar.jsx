import React from 'react';

class SearchBar extends React.Component {
  



  render() {


    //I ran out of time trying to get this (3rd deliverable) to work :(
    return (
      <div className="search">
        <form onSubmit={this.props.updateSelectedOption}>Search By Name
          <input type='text'  value={this.props.selectedInput} onChange={this.props.updateSelectedOption}/>
          <input type='submit' value='submit' />
        </form>

        <form onSubmit={this.props.updateSelectedOption}>Search By Bio
          <input type='text' value={this.props.selectedInput} onChange={this.props.updateSelectedOption}/>
          <input type='submit' value='submit' />
        </form>

      </div>
    );
  }

}

export default SearchBar;
