import React from 'react';
import { Link } from 'react-router';

class GithubUser extends React.Component {
  render() {
    return ( 
      <Link to={"/user/" + this.props.follower.login}>
        <div className="user-page">
          <div className="user-info">
            <img className="user-info__avatar" src={this.props.follower.avatar_url} alt={`${this.props.follower.login} avatar`}/>
          </div>
          <h4>{this.props.follower.login}</h4>
        </div>
      </Link>
    );
  }
};

export default GithubUser;
