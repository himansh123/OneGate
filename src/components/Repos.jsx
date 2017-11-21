import React from 'react';
import { Link } from 'react-router';
import GithubRepo from './GithubRepo';

class Repos extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
     
        this.fetchCode();
    
    }

    
    

    fetchCode(){

        fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
        .then(response => response.json())
        .then(
            users => {             
                this.setState({
                    followers: users
                    
                }, 

                );
            }
        );
    }

   


    render() {
        return (
            <div className="followers-page">

                

                <h3>Repositories Created (Not Forked !):</h3> 
                { 

                    this.state.followers.map((follower,index) => {
                        return (

                            <GithubRepo key={index} follower={follower}/>
                        )
                    })
                }             
            </div>
        );
    }
};

export default Repos;
