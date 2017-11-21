import React from 'react';
import { Link } from 'react-router';
import GithubUser from './GithubUser';

class Following extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            followers: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(newProps){
        if(newProps.params.username !== this.props.params.username){
            console.log("changing");
            this.fetchData();
        }
    }

    fetchData(){

         fetch(`https://api.github.com/users/${this.props.params.username}/following`)
        .then(response => response.json())
        .then(
            users => { 
            console.log(users) ;           
                this.setState({
                    followers: users
                });
            }
        );
    }


    render() {
        return (
            <div className="followers-page">
                <h3>Followed by {this.props.params.username}</h3> 
                {   
                    this.state.followers.map((follower,index) => {
                        return (
                            <GithubUser key={index} follower={follower}/>
                        )
                    })
                }             
            </div>
        );
    }
};

export default Following;
