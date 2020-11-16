import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground, TouchableHighlightBase} from 'react-native'
import BG from '../../../images/bg5.jpg'
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
        Job: "",
        error: "",
        warring: ""
      },
    }
    };


    
    addStore = async () => {
    try{    
      const user = firebase.auth().currentUser
      if (user) {
        console.log('User uid: ', user.uid)
        await this.changeHandler(user.uid)
        console.log("This state uid: ", this.state.userData["UID"])
      
        DemographicDB = firebase.database().ref("Demographic").child(this.state.userData["UID"])
        DemographicDB.push({
          
          Age: this.state.Age,
          Sex: this.state.Sex ,
          Height: this.state.Height,
          Weight: this.state.Weight,
          Job: this.state.Job 
          
        }) 
        alert("The survey has been successfully saved")

      }
    }
    catch(err) {
      console.log('Error getting documents', err);
      this.changeHandler2(err)
    }
  }
  
  changeHandler2 (err) {
    this.setState(prevState => {
      let userData = Object.assign({}, prevState.userData);  // creating copy of state variable userData
      userData.error = 'Please refresh the app and enter all your information'; // update the name property, assign a new error                 
      return { userData };                                 // return new object userData object
    })
}

  changeHandler (event) {
      userData = this.state.userData
      userData["UID"] = event
      this.setState({userData:userData})
}
/*
changeHandler3 () {
this.setState(prevState => {
  let userData = Object.assign({}, prevState.userData);  // creating copy of state variable userData
  userData.warring = 'Bu bilgi mevcut'; // update the name property, assign a new error                 
  return { userData }; 
})
}

getInfo = async () => {
  try{

    const user = firebase.auth().currentUser
      if (user) {         
        this.changeHandler(user.uid)           
        postRef= 'Demographic/'+postId
        let postId= this.state.userData["UID"]

        firebase.database().ref(postRef).on('value', function(snapshot) {
                      
          snapshot.forEach(function(snapshot1) {
              console.log("Second ID:",snapshot1.key)
              if (snapshot1.key)
                this.changeHandler3()
              else{

              }
               
          })
        })
      }
    }
catch(err){
  console.log(err)
}
}
*/

  render() {

    return (
      <ImageBackground source={BG} style={styles.container}>
      <ScrollView>
        
        <Text style={styles.errorText}>{this.state.userData.warring}</Text>
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

      </ScrollView>
      </ImageBackground>
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