import React, {Component} from 'react';
import RepoList from './RepoList.jsx'

class Profile extends Component {
  render() {
    return(
      <div className="card">
        <div className="card-header">
          Profile
        </div>
        <div className="card-body">
          <h3 className="card-title">{this.props.userData.name}</h3>
          <div className="row">
            <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                <span className="badge badge-light">{this.props.userData.public_repos} Public Repos</span>
                <span className="badge badge-secondary">{this.props.userData.public_gists} Public Gists</span>
                <span className="badge badge-dark">{this.props.userData.followers} Followers</span>
                <span className="badge badge-primary">{this.props.userData.following} Following</span>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Username:</strong> {this.props.userData.login}</li>
                    <li className="list-group-item"><strong>Bio:</strong> {this.props.userData.bio}</li>
                    <li className="list-group-item"><strong>Location:</strong> {this.props.userData.location}</li>
                    <li className="list-group-item"><strong>Email:</strong> {this.props.userData.email}</li>
                  </ul>
                </div>
              </div>
              <a href={this.props.userData.html_url} className="btn btn-dark">View Profile</a>
            </div>
          </div>

          <hr />

          <h3>Repositories</h3>
          <RepoList userRepos={this.props.userRepos} />
        </div>
      </div>
    )
  }
}

export default Profile
