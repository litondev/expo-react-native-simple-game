import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements';

export default class Start extends React.Component{
	chooseSection = (section,slug) => {
		this.props.setGame({
			section : section,
			slug : slug,
			amount : 0,
			queue : [],		
			point : 0,
			time : 0,
			wrong : 0,
			current : 0
		});

		this.props.navigation.push("Amount");
	}

	render(){
		return(
			<View style={{flex :1,backgroundColor: 'rgba(63,106,255,255)'}}>		
				<View style={{marginTop : 30,flexDirection : 'row'}}>
					<View style={{  flex: 1,justifyContent: 'flex-start',paddingLeft : 10}}>
						<Text style={{fontSize : 20,color : 'white',paddingTop : 15}}>
							{this.props.language[this.props.lang]['choose-section']}
						</Text>
					</View>

					<View style={{ flex: 1,justifyContent: 'flex-end',paddingRight : 10}}>
						<TouchableOpacity
							onPress={() =>  this.props.navigation.push('Home')}>
							<View style={{backgroundColor : 'white',borderRadius : 15,alignSelf : 'flex-end',flexDirection : 'row',padding : 7,paddingLeft : 15,paddingRight : 20,marginTop : 10,alignItems : 'center',marginBottom : 10}}>
								<Icon name="arrow-back" 
							 		color='rgba(63,106,255,255)'/> 
								<Text style={{marginLeft : 10,fontWeight : 'bold'}}>
									{this.props.language[this.props.lang].back}
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{marginTop : 25,flexDirection : 'row'}}>
					<View style={{marginTop : 10,marginBottom : 10,marginLeft : 10}}> 						
						<TouchableOpacity 
							onPress={() =>  this.chooseSection(this.props.language[this.props.lang]['screens']['start']['animal-images'],'animal')}>
							<View 	
								style={{flexDirection : 'row',backgroundColor : 'white',borderRadius : 10,padding : 10,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
									<Text style={{fontSize : 18,color : 'black',fontWeight: 'bold'}}>
										{this.props.language[this.props.lang]['screens']['start']['animal-images']}
									</Text>
							</View>
						</TouchableOpacity>	
					</View>		

					<View style={{marginTop : 10,marginBottom : 10,marginLeft : 10}}> 						
						<TouchableOpacity 
							onPress={() =>  this.chooseSection(this.props.language[this.props.lang]['screens']['start']['plant-images'],'plant')}>
							<View 	
								style={{flexDirection : 'row',backgroundColor : 'white',borderRadius : 10,padding : 10,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
									<Text style={{fontSize : 18,color : 'black',fontWeight: 'bold'}}>
										{this.props.language[this.props.lang]['screens']['start']['plant-images']}
									</Text>
							</View>
						</TouchableOpacity>	
					</View>		
				</View>			

				<View style={{marginTop : 10,flexDirection : 'row'}}>
					<View style={{marginTop : 10,marginBottom : 10,marginLeft : 10}}> 						
						<TouchableOpacity> 
							<View 	
								style={{flexDirection : 'row',backgroundColor : 'black',borderRadius : 10,padding : 10,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
									<Text style={{fontSize : 18,color : 'white',fontWeight: 'bold'}}>
										{this.props.language[this.props.lang]['screens']['start']['planet-images']}
									</Text>
							</View>
						</TouchableOpacity>	
					</View>						
				</View>					
			</View>
		)
	}
}