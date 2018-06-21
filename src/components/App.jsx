import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'angeloramos25',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }

  //Get user info from Github
  getUserInfo() {
    $.ajax({
      url: 'https://api.github.com/users/'+ this.state.username + '?client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          userData: data
        });
      }.bind(this),
      error: function(request, status, error) {
        this.setState({
          username: null
        });
        alert(err);
      }.bind(this)
    });
  }

  getRepos() {
    $.ajax({
      url: 'https://api.github.com/users/'+ this.state.username + '/repos?per_page=' + this.state.perPage + '&client_id=' + this.props.clientId + '&client_secret=' + this.props.clientSecret + '&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          userRepos: data
        });
      }.bind(this),
      error: function(request, status, error) {
        this.setState({
          username: null
        });
        alert(err);
      }.bind(this)
    });
  }

  searchGithub(username) {
    this.setState({username: username}, () => {
      this.getUserInfo();
      this.getRepos();
    });
  }

  componentDidMount() {
    this.getUserInfo();
    this.getRepos();
  }

  render () {
    return(
      <div>
        <Search search={this.searchGithub.bind(this)}/>
        <Profile {...this.state} />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: '09967f8b0eea7dd77b50',
  clientSecret: 'b247fa43306270529f0a2adc69ee70a2a8584cd8'
}

export default App
