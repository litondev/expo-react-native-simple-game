import React from "react";
import {View,Text} from "react-native";

export default class GameTimer extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			x : '',				
			milisec : 0,
			sec : 0,
			min : 0,
			hour : 0,
			time : ''
		}
	}

    start = () => {   
    	var x = setInterval(this.timer,10);

    	this.setState(prevState => Object.assign({},prevState,{
    		x : x
    	}))
    }

    stop = () => {    	
    	clearInterval(this.state.x)
    }

    timer = () => {
    	var miliSecOut = this.checkTime(this.state.milisec);
  		var secOut = this.checkTime(this.state.sec);
  		var minOut = this.checkTime(this.state.min);
  		var hourOut = this.checkTime(this.state.hour);

  		this.setState(prevState => Object.assign({},prevState,{
  			milisec :  ++prevState.milisec
  		}));  	

  		if(this.state.milisec === 100){
  			this.setState(prevState => Object.assign({},prevState,{
  				milisec : 0,
  				sec : ++prevState.sec
  			}));
  		}

  		if(this.state.sec == 60){
  			this.setState(prevState => Object.assign({},prevState,{
  				min : ++prevState.min,
  				sec : 0
  			}))
  		}

  		if(this.state.min == 60){
  			this.setState(prevState => Object.assign({},prevState,{
  				min : 0,
  				hour : ++prevState.hour
  			}))
  		}

  		this.setState(prevState => Object.assign({},prevState,{
  			time  : hourOut + ':' + minOut + ':' + secOut + ':' + miliSecOut
  		}));  		
    }

	checkTime = (i) => {
	  	if (i < 10) {
	    	i = "0" + i;
  		}

  		return i;
	}	

	componentDidMount(){
		this.start();
	}

	render(){
		return(
			<View>
				<Text style={{fontSize : 10,color : 'white'}}>
          {this.state.time}
        </Text>
			</View>
		)
	}
}
