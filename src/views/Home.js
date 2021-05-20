import React from "react";
import {View,TouchableOpacity,Text} from "react-native";
import Menu from "../components/Menu.js";
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';

export default class Home extends React.Component{	
	bannerError = (err) => {
		console.log(err);
	}

	render(){
		return(
			<View style={{flex :1,justifyContent: 'center',alignItems : 'center',backgroundColor: 'rgba(63,106,255,255)'}}>		
				 <View style={{width : 300}}>
				 	<View>
				 		<AdMobBanner
							bannerSize="largeBanner"
							adUnitID="ca-app-pub-3757051050194542/9179349852" // Test ID, Replace with your-admob-unit-id
							servePersonalizedAds={true} // true or false
							onDidFailToReceiveAdWithError={this.bannerError} />
				 	</View>

					<View style={{alignItems : 'center',marginBottom : 20}}>
						<Text style={{color : 'white',fontSize : 25,fontStyle : 'italic'}}> 
							Hayo Tebak ?
						</Text>
					</View>				
	
					<Menu {...this.props} 
						goingTo="Start"				 
						menuName={this.props.language[this.props.lang].start}
						iconName="play-arrow" />

					<Menu {...this.props}
						goingTo="Rank"
						menuName={this.props.language[this.props.lang].rank}
						iconName="trending-up" />

					<Menu {...this.props}
						goingTo="Setting"
						menuName={this.props.language[this.props.lang].setting}
						iconName="settings" />									

					<Menu {...this.props}
						goingTo="Exit"
						menuName={this.props.language[this.props.lang].exit}
						iconName="exit-to-app" />

				</View> 
			</View>
		)
	}
}