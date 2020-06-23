import React, { Component } from 'react';
import LoginTemplate from './LoginTemplate';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <LoginTemplate logindata={this.state}/>
            </div>
        )
    }

}

export default Login