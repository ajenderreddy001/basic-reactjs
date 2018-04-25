import React from "react"
import { render } from "react-dom"

import { Header } from "./components/header";
import { Home } from "./components/home";

class App extends React.Component{
    constructor(){
        super();
        this.state={
            homeLink:"home"
        };
    }
	onGreet(){
		alert("Hello from child component");
	}

	onChangeLink(newname){
        this.setState(
            {
                homeLink:newname
            }
        );
    }
	render(){
		return(
			<div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home
                            name={"Max"}
                            age={27}
                            greet={this.onGreet}
                            changeLink={this.onChangeLink.bind(this)}>
                        <p> this is passed from parent</p>
                        </Home>
                    </div>
                </div>
            </div>
			);
	}
}

render(<App/>,window.document.getElementById("reactapp"));