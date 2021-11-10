import React from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default class HomeScreen extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }
  
  render() {
    const {email, password} = this.state
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <TextInput
          onChangeText={text => this.setState({ email: text })}
          value={email}
          placeholder="Email"
          placeholderTextColor="rgba(168, 218, 220, 1)"
          textContentType="emailAddress"
        />
        <TextInput
          onChangeText={text => this.setState({ password: text })}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="rgba(168, 218, 220, 1)"
          textContentType="password"
        />
        <Button title="Register" onPress = {() => this.props.navigation.push("Register", {
          email: this.state.email,
          password: this.state.password
        })}/>
      </View>
    )
  }
}