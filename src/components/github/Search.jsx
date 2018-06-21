import React, {Component} from 'react';

class Search extends Component {
  onSubmit(event) {
    event.preventDefault();
    let username = this.refs.username.value.trim();
    if (!username) {
      alert('Username must not be empty.');
      return;
    }
    this.props.search(username);
    this.refs.username.value = '';
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Search:</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    )
  }
}

export default Search
