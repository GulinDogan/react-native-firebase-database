import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import { AsyncStorage } from '@react-native-community/async-storage'
import firebase from 'firebase'

class Profile extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      Age: "",
      Sex: "",
      Height: "",
      Weight: "",
      Job: ""
    };
    }


  addStore = async () => {
    try{    
      let db = await firebase.database().ref("Demographic/") 
      console.log("Db: ", db)
      
      db.push({
        Age: this.state.Age,
        Sex: this.state.Sex,
        Height: this.state.Height,
        Weight: this.state.Weight,
        Job: this.state.Job
      }) 
      alert("The survey has been successfully saved")
    }
    catch(err) {
      console.log('Error getting documents', err);
    }
  
  }


  render() {
    
    return (
      <ScrollView style={styles.container}>
        <View>
        
        <Text>1. Age:</Text>
            <TextInput
               placeholder="Age" 
               value={this.state.Age}
               onChangeText={ Age => this.setState({Age})}
            />

            

            <Text>2. Sex:</Text>
            <TextInput 
               placeholder="Sex" 
                value={this.state.Sex}
                onChangeText={Sex => this.setState({Sex})}
            />

            <Text>3. Height:</Text>
            <TextInput
               placeholder="Height" 
               value={this.state.Height}
               onChangeText={ Height => this.setState({Height})}
           />

            <Text>4. Weight:</Text>
            <TextInput
               placeholder="Weight"
               value={this.state.Weight}
               onChangeText={ Weight => this.setState({Weight})}
            />
            
            <Text>5. Job:</Text>
            <TextInput
               placeholder="Job" 
               value={this.state.Job}
               onChangeText={ Job => this.setState({Job})}
            />
        
            <TouchableOpacity style={ styles.buttonContainer }
            onPress={() => this.addStore()}
            title="Submit">
                <Text style= {styles.buttonText}>
                Submit
            </Text>
            </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer:{
    backgroundColor:'#3B3B98',
    padding:10,
    marginBottom:30,
    marginLeft:20,
    marginRight:20,
    borderRadius:10,
    
},
buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:20

}
})


export default Profile;