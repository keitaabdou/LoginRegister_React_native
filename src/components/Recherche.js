import React from 'react'
import { StyleSheet,TouchableOpacity, View, TextInput, Button, Text} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'


class Recherche extends React.Component {
  render() {
    return (
      
        <View style={styles.container}>
        <TextInput style={styles.textinput} placeholder="Rechercher l'image"/>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={{ color: "#fff", fontSize: 15, }}>Recherche</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: "#F3F4F6"
      },
      button: {
        alignItems: "center",
        backgroundColor: "#1f2937",
        padding: 10,
        borderRadius: 10,
        marginRight: 20,
        marginLeft: 20,
    
      },
      textinput:{
          borderWidth: 1,
          marginBottom: 20,
          opacity: 0.5,
          borderRadius: 10,
          textAlign: "center"
      }

  
})

export default Recherche