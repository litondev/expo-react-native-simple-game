import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import { Icon } from 'react-native-elements';

export default class Start extends React.Component{
	chooseSection = (amount) => {	

		let queue  = [];
				
		for(let i=0;i<amount;i++){
			queue.push(this.props.images[this.props.game.slug][i])				
		}

		this.props.setGame({
			section : this.props.game.section,
			slug : this.props.game.slug,
			amount : amount,
			queue : queue,			
			point : 0,
			time : 0,
			wrong : 0,
			current : 0
		});

		this.props.navigation.push("Game");
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
							onPress={() =>  this.props.navigation.push('Start')}>
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
							onPress={() =>  this.chooseSection(5)}>
							<View 	
								style={{flexDirection : 'row',backgroundColor : 'white',borderRadius : 10,padding : 10,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
									<Text style={{fontSize : 18,color : 'black',fontWeight: 'bold'}}>
										5 Gambar
									</Text>
							</View>
						</TouchableOpacity>	
					</View>		

					<View style={{marginTop : 10,marginBottom : 10,marginLeft : 10}}> 						
						<TouchableOpacity 
							onPress={() =>  this.chooseSection(10)}>
							<View 	
								style={{flexDirection : 'row',backgroundColor : 'white',borderRadius : 10,padding : 10,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
									<Text style={{fontSize : 18,color : 'black',fontWeight: 'bold'}}>
									10 Gambar
									</Text>
							</View>
						</TouchableOpacity>	
					</View>		

					<View style={{marginTop : 10,marginBottom : 10,marginLeft : 10}}> 						
						<TouchableOpacity> 
							<View 	
								style={{flexDirection : 'row',backgroundColor : 'black',borderRadius : 10,padding : 10,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
									<Text style={{fontSize : 18,color : 'white',fontWeight: 'bold'}}>
									15 Gambar
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
										20 Gambar
									</Text>
							</View>
						</TouchableOpacity>	
					</View>		
				</View>	
			</View>
		)
	}
}