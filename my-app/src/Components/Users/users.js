import React from "react";
import User from "../User/user"
import Spinner from 'react-bootstrap/Spinner';
import './users.css'

class Users extends React.Component {

    constructor() {
        super();

        this.state = { isLoading: true };
    }

    componentDidMount() {

        // API call
        //Get the data
        // update the user state

        fetch("https://dummyapi.io/data/v1/user/", 
        {
            headers: 
            {
                 "app-id": "62c1b1b65b25e6a595ee427b"
            }
        }).then(data => data.json())
            .then(data => {
                this.setState({ isLoading: false, usersData: data.data });
            })

    }

    spinnner() {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    showUsers() {
        return <div className="usersDiv">
            {
                this.state.usersData.map((user) => {
                    return <User data={user} />
                })
            }
        </div>
    }


    render() {
        return (
            <div>
                <p>
                    {
                        (this.state.isLoading) ? this.spinnner() : this.showUsers()
                    }
                </p>
            </div>
        )
    }

}


export default Users;



