import React from 'react'
import { StyleSheet,TouchableOpacity, View,Image, TextInput, Button, Text} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


class Register extends React.Component {
  render() {
    return (
      
      <View style={styles.container}>
        <Image style={styles.tinyLogo}
          source={require('../assets/images/jetstream-r.png')}
        />
        <View style={styles.bloc_form}>
          <Text style={styles.champ_name}>Name</Text>
          <TextInput style={styles.textinput}/>
        <View style={{ marginTop: -15}}>
          <Text style={styles.champ_name}>FirstName</Text>
          <TextInput style={styles.textinput}/>
        </View>
        <View style={{ marginTop: -15}}>
          <Text style={styles.champ_name}>Email</Text>
          <TextInput style={styles.textinput}/>
        </View>
        <View style={{ marginTop: -15}}>
          <Text style={styles.champ_name}>Password</Text>
          <TextInput style={styles.textinput}/>
        </View>
        <View style={{ marginTop: -15}}>
          <Text style={styles.champ_name}>Confirm Password</Text>
          <TextInput style={styles.textinput}/>
        </View>
        <TouchableOpacity onPress={this.onPress} style={{alignItems: 'flex-end', marginTop:10,marginRight: 25 }}>
          <Text style={styles.btn}>REGISTER</Text>
        </TouchableOpacity>
        <View style={styles.already}>
        <Text style={styles.underline}>Already Register?</Text>
        </View>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    
  },
  tinyLogo:{
    height:50,
    width: 50,   
    marginTop: 5
  },
  bloc_form:{
    marginTop:15,
    backgroundColor: "#fff",
    borderRadius: 18,
    height:550,
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
    marginTop: -15
  },
  textinput_1:{
    height: 40,
    borderWidth: 2,
    borderColor: "#eeeff1",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    marginTop: -20
  },
  btn:{
    backgroundColor: "#1f2937", 
    borderRadius: 10,color: "#fff", 
    height:40, 
    padding: 10
    
  },
  already:{
    alignItems: "center",
    marginTop: -30,
    marginRight: 40,
  },
  underline: {
    textDecorationLine: 'underline'
  }



  
})

export default Register