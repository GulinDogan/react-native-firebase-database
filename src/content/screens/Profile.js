import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import { AsyncStorage } from '@react-native-community/async-storage'
import firebase from 'firebase'

class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        UID: "",
        Age: "",
        Sex: "",
        Height: "",
        Weight: "",
        Job: ""
      }
    }
    };
    
    addStore = async () => {
    try{    
      const user = firebase.auth().currentUser
      if (user) {
        console.log('User uid: ', user.uid)
        await this.changeHandler(user.uid)
        console.log("This state uid: ", this.state.userData["UID"])
      
        DemographicDB = firebase.database().ref("Demographic").child(this.state.userData.UID)
        DemographicDB.push({
          
          Age: this.state.Age,
          Sex: this.state.Sex,
          Height: this.state.Height,
          Weight: this.state.Weight,
          Job: this.state.Job
          
        }) 
        alert("The survey has been successfully saved")

      }
    }
    catch(err) {
      console.log('Error getting documents', err);
    }
  }
  
  async changeHandler (event) {
      userData = this.state.userData
      userData["UID"] = event
      this.setState({userData:userData})
}

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style = {styles.inputGroup}>
        
        <Text>Age</Text>
            <TextInput
              placeholder="Age" 
              value={this.state.Age}
               onChangeText={Age => this.setState({Age})} 
               />  
          
            <Text>Sex</Text>
            <TextInput 
               placeholder="Sex" 
               value={this.state.Sex}
                onChangeText={Sex => this.setState({Sex})}
            />

            <Text>Height</Text>
            <TextInput
               placeholder="Height" 
               value={this.state.Height}
               onChangeText={ Height => this.setState({Height})}
           />

            <Text>Weight</Text>
            <TextInput
               placeholder="Weight"
               value={this.state.Weight}
               onChangeText={ Weight => this.setState({Weight})}
            />
            
            <Text>Job</Text>
            <TextInput
               placeholder="Job" 
               value={this.state.Job}
               onChangeText={ Job => this.setState({Job})}
            />
  
        </View>
        <View>
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
    padding: 20
  },
  info:{
    color: 'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:16
  },
  inputGroup: {
    paddingTop:100,
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
    margin:20,
    borderRadius:10,
    
},
buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:16

}
})


export default Profile;