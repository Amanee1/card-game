import React, { Component } from 'react';

export default class CharacterCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    activate = () => {
        if(!this.state.active){
            this.props.activationHandler(this.props.value)
            this.setState({active: true});
        }
    }

    ComponentDidUpdate(prevProp){
        if(prevProp.attemp !== this.props.attemp{
            this.setState({active:false})
        }
    }

    render(){
        let className = `card ${this.state.active ? 'activeCard': ''}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}