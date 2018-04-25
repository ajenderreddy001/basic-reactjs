import React from "react";

export class Home extends React.Component {
	constructor(props){
        super();
        this.state={
            age:props.age,
            status:0
        };
    }
    onMakeOlder(){
	    this.setState({
           age:this.state.age+3
        });
	    this.age+=3;
	    console.log(this.age);
    }

    onChangeLink(){
	    this.props.changeLink("Ajay")
    }

    render() {
    	console.log(this.props);
        return (
            <div>
                <p>In a new Component!</p>
                <p>your name is {this.props.name} your age is <i>{ this.state.age}</i></p>
                <p>status is {this.state.status}</p>
                <button onClick={this.props.greet} className="btn btn-danger">Alert</button>
                <hr/>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">make me older!</button><br/><br/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link!</button>
            </div>
        );
    }
}