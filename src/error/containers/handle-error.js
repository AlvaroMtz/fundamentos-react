import React, { Component } from 'react';
import RegularError from '../components/regular-error'

class HandleError extends Component {
    state = {
        handleError: false,
    }
    componentDidCatch(error, info){
        //envía este error a un servicio como Sentry
        this.setState({
            handleError: true,
        })
    }
    render () {
        if(this.state.handleError){
            return (
                <RegularError />
            ) 
        }
        return this.props.children
    }
}

export default HandleError