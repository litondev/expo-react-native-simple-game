import React from "react";
import {View,Text,TouchableOpacity,ScrollView} from "react-native";
import { Icon } from 'react-native-elements';

export default class Rank extends React.Component{
	render(){
		return(
			<View style={{flex :1,justifyContent: 'center',alignItems : 'center',backgroundColor: 'rgba(63,106,255,255)'}}>		
				{this.props.ranks.length > 0 &&
					<>
						<View style={{marginTop : 30,flexDirection : 'row'}}>
							<View style={{  flex: 1,justifyContent: 'flex-start',paddingLeft : 10}}>
								<Text style={{fontSize : 20,color : 'white',paddingTop : 15}}>
									{this.props.language[this.props.lang].rank}
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

						<ScrollView>									
							{this.props.ranks.map((item,index) => (
							<View style={{backgroundColor : 'white',flexDirection : 'row',flexWrap : 'wrap',marginLeft : 10,marginRight : 10,marginTop : 10,marginBottom : 10,borderRadius : 10}}
								key={index}>
								<View style={{flexDirection : 'row',padding : 10}}>					
									<Icon name="trending-up" 
									 	color='rgba(63,106,255,255)'/> 

									<Text style={{marginLeft :10,fontSize : 15}}>
										<Text> Point : </Text>
										<Text style={{fontWeight : 'bold'}}>
											{item.point}
										</Text>
									</Text>							
								</View>

								<View style={{flexDirection : 'row',padding : 10}}>					
									<Icon name="av-timer"
										color='rgba(63,106,255,255)'/> 
									<Text style={{marginLeft :10,fontSize : 15}}>
										<Text>{this.props.language[this.props.lang].time} : </Text>
										<Text style={{fontWeight : 'bold'}}>
											{item.time}
										</Text>
									</Text>						
								</View>

								<View style={{flexDirection : 'row',padding : 10}}>					
									<Icon name="close"
										color='rgba(63,106,255,255)'/> 
									<Text style={{marginLeft :10,fontSize : 15}}>
										<Text>{this.props.language[this.props.lang].wrong}  : </Text>
										<Text style={{fontWeight : 'bold'}}>
											{item.wrong}
										</Text>
									</Text>		
								</View>

								<View style={{flexDirection : 'row',padding : 10}}>					
									<Icon name="check"
										color='rgba(63,106,255,255)'/> 
									<Text style={{marginLeft :10,fontSize : 15}}>
										<Text>{this.props.language[this.props.lang].current}  : </Text>
										<Text style={{fontWeight : 'bold'}}>
											{item.current}
										</Text>
									</Text>	
								</View>

								<View style={{flexDirection : 'row',padding : 10}}>					
									<Icon name="apps"
										color='rgba(63,106,255,255)'/> 
									<Text style={{marginLeft :10,fontSize : 15}}>
										<Text>{this.props.language[this.props.lang].section}  : </Text>
										<Text style={{fontWeight : 'bold'}}>
											{item.section}
										</Text>
									</Text>
								</View>
							</View>					
							))}																								
						</ScrollView>						
					</>
				}				

				{this.props.ranks.length == 0 && 
					<View>
						<Text style={{color : 'white',fontSize : 15}}>
							{this.props.language[this.props.lang]['not-found']}
						</Text>

						<TouchableOpacity 
							onPress={() =>  this.props.navigation.push('Home')}>
							<View style={{backgroundColor : 'white',borderRadius : 15,flexDirection : 'row',padding : 7,paddingLeft : 15,paddingRight : 20,marginTop : 20,alignItems : 'center'}}>
								<Icon name="arrow-back" 
							 		color='rgba(63,106,255,255)'/> 
								<Text style={{marginLeft : 10,fontWeight : 'bold'}}>
									{this.props.language[this.props.lang].back}
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				}
			</View>
		)
	}
}