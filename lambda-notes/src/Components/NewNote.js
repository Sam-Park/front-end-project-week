import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return (
            <div> HELLO I AM THE STUPID NEWNOTE PAGE 
            </div>
            
        )
    }
}


const mapStateToProps = state => {
    console.log("NavBarState2", state.notes);
    return {
      notes: state.notes
    };
  };

export default withRouter(connect(mapStateToProps)(NewNote));