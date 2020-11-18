import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, TouchableHighlightBase} from 'react-native'
import BG from '../../../images/bg5.jpg'
import firebase from 'firebase'


class Profile extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        UserName: "",
        Age: "",
        Sex: "",
        Height: "",
        Weight: "",
        Job: "",
        error: ""
      },
    }
    };


    
    addStore = async () => {
    try{    
      const user = firebase.auth().currentUser
      if (user) {
        console.log('User uid: ', user.uid)
      
        DemographicDB = firebase.database().ref("Demographic").child(user.uid)
        DemographicDB.push({
          UserName: this.state.UserName,
          Age: this.state.Age,
          Sex: this.state.Sex ,
          Height: this.state.Height,
          Weight: this.state.Weight,
          Job: this.state.Job 
          
        }) 
        alert("The survey has been successfully saved")
        this.getErr("")
      }
    }
    catch(err) {
      console.log('Error getting documents', err);
      this.getErr(err)
    }
  }

  getErr(err){
    if(err){
      this.setState(prevState => {
        let userData = Object.assign({}, prevState.userData);  // creating copy of state variable userData
        userData.error = 'Please enter all your information'; // update the name property, assign a new error                 
        return { userData };                                 // return new object userData object
      })
    }
    else{
      this.setState(prevState => {
        let userData = Object.assign({}, prevState.userData);  // creating copy of state variable userData
        userData.error = ''; // update the name property, assign a new error                 
        return { userData };                                 // return new object userData object
      })
    }

  }

  render() {

    return (
      <ScrollView>
        <ImageBackground source={BG} style={styles.container}>
    
        <Text style={styles.errorText}>{this.state.userData.warring}</Text>
        <View style = {styles.inputGroup}>  
        <Text>User Name</Text>
            <TextInput
              placeholder="User Name" 
              value={this.state.UserName}
               onChangeText={UserName => this.setState({UserName})} 
               />  

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

            <Text>Height (cm)</Text>
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
            <Text style={styles.errorText} >
                    {this.state.userData.error}
            </Text>
  
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

      
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  errorText:{
    fontSize:14,
    color:'red',
    alignSelf:'center',
    marginTop:15
},
  inputGroup: {
    paddingTop:50,
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