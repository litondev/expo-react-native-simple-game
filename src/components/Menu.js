import React from "react";
import {Text,View,TouchableOpacity,BackHandler} from "react-native";
import { Icon } from 'react-native-elements'

export default class Menu extends React.Component{
	goingTo = (goingTo) => {
		if(goingTo == "Exit"){
      		BackHandler.exitApp();
		}else{
			this.props.navigation.push(goingTo);
		}
	}

	render(){
		return(			
			<View style={{marginTop : 10,marginBottom : 10}}> 						
				<TouchableOpacity 
					onPress={() =>  this.goingTo(this.props.goingTo)}>
					<View 	
						style={{flexDirection : 'row',backgroundColor : 'white',borderRadius : 10,padding : 10,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
							<Icon name={this.props.iconName} color='rgba(63,106,255,255)'/> 

							<Text style={{fontSize : 18,color : 'black',fontWeight: 'bold',marginLeft : 10}}>
							 	{this.props.menuName}
							</Text>
					</View>
				</TouchableOpacity>	
			</View>		
		)
	}
}