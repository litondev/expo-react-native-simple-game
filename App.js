import React from "react";
import Navigation from './src/Navigation.js';
import store from "./src/Store.js";
import {View,Text} from "react-native";
import {Provider} from "react-redux";

export default class App extends React.Component{	
	render(){
		return(
			<Provider store={store}> 
				<View style={{flex: 1}}>
			   		<Navigation />
				</View>
			</Provider>
		)
	}
}
