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
          onChange={this.onInputChange}
          value={this.state.term} />
      </div>
    )
  },
  onInputChange: function(event) {
    const term = event.target.value
    this.setState({term: term})
    this.props.onSearchTermChange(term)
  }
})

export default SearchBar;
