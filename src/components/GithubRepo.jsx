import React from 'react';
import { Link } from 'react-router';

class GithubUser extends React.Component {

  render() {


    if(this.props.follower.fork==false ){
      return (
          <div className="user-page">
            <a href ={this.props.follower.html_url}>
              
                <h3>
                
                
                {this.props.follower.name}
       
                </h3>
                        
              </a>
              <h5>
              Forks : {this.props.follower.forks_count} </h5>
        </div>

      );

    } else{
        return (null);
    }
  
}

};

export default GithubUser;
