import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions, TextInput, Button, TouchableOpacity, ScrollView } from 'react-native';


const wallpaper = require('./wallpaper.jpg');

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.state = { password: '' };
  }

  render() {
    return (

      <ImageBackground source={wallpaper} style={{ width: null, justifyContent: 'center', alignItems: 'center', flex: 1 }} >

        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center', width: win.width }}>
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>SIGN IN</Text>
            </View>
            <TextInput
              style={{height: win.width/7, borderColor: 'white', borderWidth: 1, width: win.width/1.3, padding: 10, color: 'white'}}
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              placeholderTextColor={'white'}
              placeholder={'email'}
              keyboardType={'email-address'}
              autoCapitalize={'none'}
            />

            <TextInput
              style={{height: win.width/7, borderColor: 'white', borderWidth: 1, width: win.width/1.3, padding: 10, color: 'white', marginTop: 20}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              placeholderTextColor={'white'}
              placeholder={'password'}
              secureTextEntry={true}
            />
            <TouchableOpacity>
              <View style={{ height: win.width/7, width: win.width/1.3, backgroundColor: '#0094FF', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>SIGN IN</Text>
              </View>
            </TouchableOpacity>


            <View style={styles.registerView}>
              <TouchableOpacity>
                <Text style={{ color: 'white', textDecorationLine: 'underline' }}>{'Not Registered?'}</Text>
              </TouchableOpacity>
            </View>


        </View>

      </ImageBackground>

    );
  }
}

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    height: win.width/7,
    width: win.width/3,
    borderColor: '#0094FF',
    borderWidth: 1,
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 150,
  },
  titleText: {
    color: 'white',
    fontSize: 20,


  },
  registerView: {
    position: 'absolute',
    bottom: 10,
  }
});
