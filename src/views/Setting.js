import React from "react";
import {View,Text,TouchableOpacity} from "react-native";

export default class Setting extends React.Component{
	setLanguage = (lang) => {
		this.props.setLanguage(lang);
		this.props.navigation.push('Home');
	}

	render(){
		return(
			<View style={{flex :1,justifyContent: 'center',alignItems : 'center',backgroundColor: 'rgba(63,106,255,255)'}}>		
					<View style={{marginBottom : 10}}>
						<Text style={{color : 'white',fontSize : 18}}>
							{this.props.language[this.props.lang].['choose-language']}
						</Text>
					</View>

					<View 	
						style={{flexDirection : 'row'}}>
							<TouchableOpacity onPress={() => this.setLanguage('id')}>
								<Text style={{padding : 10,borderRadius : 10,fontSize : 18,color : 'black',backgroundColor : 'white',fontWeight: 'bold',marginLeft : 10,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
									Indonesia
								</Text>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => this.setLanguage('en')}>
								<Text style={{padding : 10,borderRadius : 10,fontSize : 18,color : 'black',backgroundColor : 'white',fontWeight: 'bold',marginLeft : 20,shadowColor: "orange",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5}}>						
									English
								</Text>
							</TouchableOpacity>					
					</View>				 	
			</View>
		)
	}
}