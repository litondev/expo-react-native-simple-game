import React from "react";
import {Modal,View,Text,Button} from "react-native";
import { Icon } from 'react-native-elements'

export default class ModalReward extends React.Component{
  render(){    
    return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.modalRewardVisible}
        style={{flex : 1}}>
          <View style={{flexDirection: 'row',justifyContent : 'center',alignItems : 'center',backgroundColor : 'white'}}>
              <Text>Oke</Text>
              <Button onPress={() => this.props.onHideModalReward()} title="Selanjutnya"/>
          </View>
      </Modal>
    )
  }
}