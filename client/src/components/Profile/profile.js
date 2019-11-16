// Feeling not needed, might delete later
// import API from "../../utils/API";

import React, { Component } from "react";

import { setCurrentUser, logoutUser } from '../../actions/authActions';
import store from '../../store';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

if(localStorage.jwtToken){
    const token = localStorage.jwtToken;
    setAuthToken(token);

    const decoded = jwt_decode(token);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if(decoded.exp < currentTime){
        store.dispatch(logoutUser());
        window.location.href = "./login";
    }
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searches : []
        }
      }

    render() {
      
        return (
            <div>

                <h1> Austin, TX</h1>
                <h1> Boston, MA</h1>
                <h1> Tampa, FL</h1>
               <h4>Profile Page under construction...</h4> 
      {/* <Account></Account> */}
        </div>
    
        );

        
    );
}



