import React from "react";
import Routes from "./Routes.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
 lang : state.lang,
 language : state.language,
 ranks : state.ranks,
 game : state.game,
 images : state.images
});

const mapDispatchToProps = (dispatch) => ({
  setLanguage : (data) => {
    dispatch({
      type : "SET_LANGUAGE",
      data : data
    })
  }, 
  setRanks : (data) => {
    dispatch({
      type : 'SET_RANKS',
      data : data
    })
  },
  setGame : (data) => {
    dispatch({
      type : 'SET_GAME',
      data : data
    })
  }
});

const Stack = createStackNavigator();

class Navigation extends React.Component{
  componentDidMount(){
    AsyncStorage.getItem('@LANG').then((lang) => {      
      if(lang){
        this.props.setLanguage(lang);
      }else{
        this.props.setLanguage('en');      
      }
    })

    AsyncStorage.getItem('@RANKS').then((ranks) => {
      if(ranks){
        this.props.setRanks(ranks);
      }
    })
  }

	render(){
		return(
			<NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>          
            {
              Routes.map((item,index) => 
              	<Stack.Screen 
                  name={item.name} 
                  key={index}>
              		  {props => <item.component {...props} {...this.props} /> }
              	</Stack.Screen>
              )
            }        
          </Stack.Navigator>
      </NavigationContainer> 
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);