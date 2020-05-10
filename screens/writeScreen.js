import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class WriteScreen extends React.Component {
  constructor(){
    super()
    this.state={
      text: ' ',
    }
  }
  displayAlert(){
    alert('THANKS FOR YOUR STORY')
  }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <TextInput
          style={{height: 500,width:500, borderColor: 'black', borderWidth: 1}}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity style={{backgroundColor: '#2196F3', padding: 10, margin: 10}}onPress= {this.displayAlert}>
        <Text style={{fontSize:20}}>SUBMIT</Text>
        </TouchableOpacity>
          <Text>WRITE A STORY</Text>
        </View>
      );
    }
  }