import React from "react";
import {View,Text,Image,Button,TouchableOpacity,TextInput} from "react-native";
import { Icon } from 'react-native-elements';
import GameTimer from "../components/GameTimer.js";
import ModalReward from "../components/ModalReward.js";
import ModalDone from "../components/ModalDone.js";

export default class Game extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			point : 0,
			time : 0,
			indexQueue : null,
			queue : null,
			answer : '',
			modalRewardVisible : false,
			modalDoneVisible : false
		}

 		this.gameTimer = React.createRef();
	}

	setPoint = () => {
		this.setState(prevState => Object.assign({},prevState,{
			point : Math.floor(Math.random() * 10) + 1
		}))
	}

	setQueue = () => {
		var question = this.props.game.queue.map((item,index) => {
			return {
				index : index,
				item : item
			}
		});		
		var questionQueue = question.filter(filterQueue => filterQueue.item.isAnswer == false);					
		var index =  Math.floor(Math.random() * Math.floor(questionQueue.length));	
		var queue  = this.props.game.queue[questionQueue[index].index];
		this.setState(prevState => Object.assign({},prevState,{
			queue : queue,
			indexQueue : questionQueue[index].index
		}));
	
	}

	onChangeText = (text) => {
		this.setState(prevState => Object.assign({},prevState,{
			answer : text
		}));
	}

	onDone = () => {
		var propGame  = Object.assign({},this.props.game);	
		propGame.queue[this.state.indexQueue].isAnswer = true
		this.props.setGame(propGame);			

		if(this.props.game.queue.filter(filterQueue => filterQueue.isAnswer == false).length){			
			this.gameTimer.current.stop();

			this.setState(prevState => Object.assign({},prevState,{
				modalRewardVisible : true
			}));		
		}else{			
			console.log(this.gameTimer.current.state.time);
			this.gameTimer.current.stop();

			this.setState(prevState => Object.assign({},prevState,{
				modalDoneVisible : true
			}));
		}
	}

	onHideModalReward = () => {
		this.setState(prevState => Object.assign({},prevState,{
			modalRewardVisible : false
		}));		
		this.setPoint();
		this.setQueue();
		this.gameTimer.current.start();
	}

	onHideModalDone = () => {
		this.setState(prevState => Object.assign({},prevState,{
			modalDoneVisible : false
		}));

		for(let i=0;i<this.props.game.queue.length;i++){
			this.props.game.queue[i].isAnswer = false;
		}

		this.props.setGame({
    		section : null,
    		slug : null,
    		total : 0,
    		queue : [],    	
    		point : 0,
    		time : 0,
    		wrong : 0,
    		current : 0  
		});

		this.props.navigation.push('Rank');
	}

	componentDidMount(){
		this.setPoint();
		this.setQueue();
	}

	render(){		
		return(
			<View style={{flex :1,justifyContent: 'center',alignItems : 'center',backgroundColor: 'rgba(63,106,255,255)'}}>		
				<ModalReward 
					modalRewardVisible={this.state.modalRewardVisible}
					onHideModalReward={this.onHideModalReward} />

				<ModalDone 
					modalDoneVisible={this.state.modalDoneVisible}
					onHideModalDone={this.onHideModalDone} />

				<View style={{marginTop : 10,marginBottom : 10,flexDirection : 'row',width : 300}}>
					<View style={{  flex: 1,justifyContent: 'flex-start',paddingLeft : 10}}>
						<Text style={{fontSize : 15,color : 'white'}}>
							{this.props.language[this.props.lang]['screens']['game'].image} {this.state.indexQueue}
						</Text>
					</View>

					<View style={{ flex: 1,justifyContent: 'flex-end',textAlign : 'right',paddingRight : 10}}>				
							<Text style={{fontSize : 10,color : 'white'}}>
								Point : {this.state.point}
							</Text>						
							<Text style={{fontSize : 10,color : 'white'}}>
								<GameTimer ref={this.gameTimer} />
							</Text>				
					</View>
				</View>
		
				{this.state.queue && 
					<View>
						<View style={{backgroundColor: 'white',borderRadius : 10,padding : 10}}>
							<Image source={this.state.queue.image} 
								style={{width : 300,height : 300}}/>
						</View>

						<View style={{marginTop : 10}}>
							<TextInput    
								style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,backgroundColor : 'white',borderRadius : 10,padding : 10}}
      							onChangeText={text => this.onChangeText(text)}
      							placeholder={this.props.language[this.props.lang]['screens']['game'].answer} 
      							value={this.state.answer}/>
      					</View>
						
						<View style={{marginTop : 10}}>
							<Button title={this.props.language[this.props.lang]['screens']['game'].submit} onPress={() => this.onDone()} />
						</View>
					</View>
				}
			</View>
		)
	}
}