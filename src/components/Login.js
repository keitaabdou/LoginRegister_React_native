import React from 'react'
import { StyleSheet,CheckBox,TouchableOpacity, View,Image, TextInput, Button, Text} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {container} from '../styles'

const Login = ({navigation}) =>{
    return ( 
      <View style={styles.container}>
        <Image style={styles.tinyLogo}
          source={require('../assets/images/jetstream-r.png')}
        />
        <View style={styles.bloc_form}>
        <View style={{ marginTop: -15}}>
          <Text style={styles.champ_name}>Email</Text>
          <TextInput style={styles.textinput}/>
        </View>
        <View style={{ marginTop: -15}}>
          <Text style={styles.champ_name}>Password</Text>
          <TextInput style={styles.textinput}/>
        </View>
        
        <TouchableOpacity onPress={this.onPress} style={{alignItems: 'flex-end', marginTop:10,marginRight: 25 }}>
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
        <View style={styles.already}>
            <Text style={styles.underline}>Forgot you Password?</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.underline_1}>
            <Text  style={styles.underline}>Click here to sign up</Text>
        </TouchableOpacity>
        </View>
      </View>

    )
 
}

const styles = StyleSheet.create({
  tinyLogo:{
    height:50,
    width: 50,   
    marginTop: 50
  },
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f3f4f6"
  },
  bloc_form:{
    marginTop:15,
    backgroundColor: "#fff",
    borderRadius: 18,
    height:300,
    marginRight: 10,
    marginLeft:10,
    width:300,
    shadowOpacity: 15
    
  },
  champ_name:{
    padding: 20,
    color: "#777e89",

  },
  textinput:{
    height: 40,
    borderWidth: 2,
    borderColor: "#eeeff1",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    marginTop: -15,
    marginBottom: 20
  },
  
  btn:{
    backgroundColor: "#1f2937", 
    borderRadius: 10,
    color: "#fff", 
    height:40, 
    padding: 10,
    
    
  },
  already:{
    alignItems: "center",
    marginTop: -30,
    marginRight: 40,
  },
  underline: {
    textDecorationLine: 'underline'
  },
  underline_1: {
    textDecorationLine: 'underline',
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },

})

export default Login