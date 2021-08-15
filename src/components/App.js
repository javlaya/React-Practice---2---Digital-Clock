import React, {Component, useState} from "react";

function getCurrentTime(){
    const currentDate=new Date();
    return currentDate.toLocaleTimeString().toUpperCase();
}

class App extends Component {
    constructor(props){
        super(props);
      //  this.currentDate=new Date();
        this.state={
            time:getCurrentTime(),
        };

    }
    componentDidMount(){
        this.intevalId=setInterval(()=>{
            this.setState({time:getCurrentTime()});
        },1000);
    }
    componentWillUnmount(){
        clearInterval(this.intevalId);
    }

    render() {

        return(
            <div className="Clock">
                <h3 id="time">{this.state.time}</h3>
               
            </div>
        );
    }
}


export default App;
