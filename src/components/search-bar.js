import React from 'react'


const SearchBar = React.createClass({
  getInitialState: function() {
    return {
      term: ''
    }
  },
  render: function() {
    return (
      <div className="search-bar">
        <input
          placeholder={'Search Youtube!'}
          onChange={this.onChangeHandler}
          value={this.state.term} />
      </div>
    )
  },
  onChangeHandler: function(event) {
    this.setState({term: event.target.value})
  }
})

export default SearchBar;
