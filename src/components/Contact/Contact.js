import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                Your Contact Details Are below
                <hr />
                <h1>
                    {this.props.storedResult}
                </h1>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log("TEST",state.res.result)
    return {
        // ctr: state.ctr.counter,
        // storedResult : state.res.result
        storedResult: state.contact_data.contact_value

    }
}

export default connect(mapStateToProps)(Contact)