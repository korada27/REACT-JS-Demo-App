import React, { Component } from 'react';
import Header from './Header';
import {  Switch, Route } from 'react-router-dom';
import About from '../About/About';
import News from '../News/News';
import Contact from '../Contact/Contact';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '' }
    }

    componentDidMount(){
        console.log("Component did mount");
    }

    render() {
        return (
            <div>
                <Header dashboarddata={this.state,this.props}/>
                <Switch>
                    {/* <Route path="/" component={About} /> */}
                    <Route exact path="/dashboard/about" component={About} />
                    <Route exact path="/dashboard/news" component={News} />
                    <Route exact path="/dashboard/contact" component={Contact} />
                </Switch>
            </div>
        )
    }

}

export default Login