import React, { Component } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import * as inputContactActions from "../../actions/index"
import { connect } from 'react-redux';


class About extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            contact_value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChange(e){
        e.preventDefault();
        // this.inputBoxValue(this.state.contact_value)
        // console.log(e.target.value);
        this.setState({
            contact_value: e.target.value
        })
       
    }
    handleSubmit(e){
        // console.log(e)
        e.preventDefault();
       
        console.log("CONTACT DETAILS:",this.state.contact_value);
        this.props.inputBoxValue(this.state.contact_value)
    }

    render() {
        return (
            <div>
                <h1>
                    About
                </h1>
                <form  >

                Enter Contact Details : 
                <input type = "text" onChange={this.handleChange}/>

                <button type="submit" onClick={this.handleSubmit}>Submit</button>


                </form>
                
               
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        contact_value : state.res
    }
}
const mapDispatchToProps = (dispatch)=>{
        return {
            inputBoxValue: (v) => dispatch(inputContactActions.inputContact(v))
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(About)