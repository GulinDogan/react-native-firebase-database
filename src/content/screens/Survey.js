import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground} from 'react-native'
import { NavigationContext } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import firebase from 'firebase'
import BG from '../../../images/bg5.jpg'


class Survey extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    
    super(props);
    this.state = {
      A1: "",
      A2: "",
      A3: "",
      A4: "",
      A5: "",
      A6: "",
      A7: "",
      DateTime: "",
      error: ""
    }
    }


    setTime (){
        // Create date object from datetime string
      var date = new Date();
      
      // Coverting to local datetime 
      console.log(date.toString());
      

      this.setState({
        DateTime: date.toString()
      })
    }

  addStore = async () => {
    
    try{    
      const navigation = this.context;

      const user = firebase.auth().currentUser
      if (user) {
        await this.setTime()
        let db = await firebase.database().ref("Survey/"+user.uid) 
        console.log("Db: ", db)
        
        db.push({
          A1: this.state.A1,
          A2: this.state.A2,
          A3: this.state.A3,
          A4: this.state.A4,
          A5: this.state.A5,
          A6: this.state.A6,
          A7: this.state.A7,
          DateTime: this.state.DateTime
        }) 
        navigation.navigate('Photo')
      }
    }
    catch(err) {
      console.log('Error getting documents', err);
      await this.getErr(err)
      
    }
  
  }

  getErr(err){
    this.setState({
      error: 'Please enter all your information'
    })
  }

  render() {
    const placeholder = {
      label: 'Select a item...',
      value: null,
      color: 'black',
    };
    return (

      <ScrollView>
        <ImageBackground style={styles.container} source = {BG}>
        <View >

        <Text style = {styles.txt}>1. What are you doing now? </Text>

        <Picker 
            selectedValue={this.state.A1}
            style={{fontSize:14, height: 50, width: 320}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({A1: itemValue})
          }>
          <Picker.Item label = "Select a item..." value = "Select a item..." />
          <Picker.Item label = "Work" value = "Work" />
          <Picker.Item label = "Study" value = "Study" />
          <Picker.Item label= "Cook" value = "Cook" />
          <Picker.Item label= "Rest" value = "Rest" />
          <Picker.Item label= "Hygiene" value = "Hygiene" />
          <Picker.Item label =  "Eating / Drinking" value = "Eating / Drinking" />
          <Picker.Item label = "Leisure" value = "Leisureg" />
          <Picker.Item  label = "Other" value= "Other" />
        </Picker>

            <Text style = {styles.txt}>2. How are you feeling right now and score between 1-10? </Text>
              
            <Picker 
           
            selectedValue={this.state.A2}
            style={{ fontSize:14, height: 50, width: 320}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({A2: itemValue})
          }>
          <Picker.Item label = "Select a item..." value = "Select a item..." />
          <Picker.Item label = "Cheerful" value = "Cheerful" />
          <Picker.Item label = "Relaxed" value = "Relaxed" />
          <Picker.Item label= "Annoyed" value = "Annoyed" />
          <Picker.Item label= "Satisfied" value = "Satisfied" />
          <Picker.Item label= "Lonely" value = "Lonely" />
          <Picker.Item label =  "Worried" value = "Worried" />
          <Picker.Item label = "Guilty" value = "Guilty" />
          <Picker.Item  label = "Angry" value= "Angry" />
          <Picker.Item label= "Happy" value = "Happy" />
          <Picker.Item label =  "Unhappy" value = "Unhappy" />
          <Picker.Item label = "Neutral" value = "Neutral" />
          <Picker.Item  label = "Sad" value= "Sad" />
          <Picker.Item label = "Scared" value = "Scared" />
          <Picker.Item  label = "Other" value= "Other" />
        </Picker>
         

            <Text style = {styles.txt}>3. Who is with you right now? How do you feel about him? </Text>
            <Picker 
                
                selectedValue={this.state.A3}
                style={{fontSize:14, height: 50, width: 320}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({A3: itemValue})
              }>
              <Picker.Item label = "Select a item..." value = "Select a item..." />
              <Picker.Item label = "Partner" value = "Partner" />
              <Picker.Item label = "Manager" value = "Manager" />
              <Picker.Item label= "Company owner" value = "Company owner" />
              <Picker.Item label= "Family membe" value = "Family membe" />
              <Picker.Item label= "Friend" value = "Friend" />
              <Picker.Item label =  "Colleague" value = "Colleague" />
              <Picker.Item label = "Acquaintance" value = "Acquaintance" />
              <Picker.Item  label = "Stranger" value= "Stranger" />
              <Picker.Item label= "No one" value = "No one" />
            
            </Picker>
                 
            <Text style = {styles.txt}>4. Is there any event or person in your work environment that currently disturbs you? </Text>
            <Picker 
              
                selectedValue={this.state.A4}
                style={{fontSize:14, height: 50, width: 320}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({A4: itemValue})
              }>
              <Picker.Item label = "Select a item..." value = "Select a item..." />
              <Picker.Item label = "Yes" value = "Yes" />
              <Picker.Item label = "No" value = "No" />
              <Picker.Item label= "I don't know" value = "I don't know" />
      
            </Picker>
      
            
            <Text style = {styles.txt}>5. Would you like to be somewhere else now?</Text>
            <Picker 
                
                selectedValue={this.state.A5}
                style={{fontSize:14, height: 50, width: 320}}
                onValueChange={(itemValue, itemInde) =>
                  this.setState({A5: itemValue})
              }>
              <Picker.Item label = "Select a item..." value = "Select a item..." />
              <Picker.Item label = "Yes" value = "Yes" />
              <Picker.Item label = "No" value = "No" />
              <Picker.Item label= "I don't know" value = "I don't know" />
      
            </Picker>
            
            <Text style = {styles.txt}>6. What was the most important event that happened after writing your last experience?</Text>
            <TextInput
            
               placeholder="Answer 6" 
               value={this.state.A6}
               onChangeText={ A6 => this.setState({A6})}
            />
            
            <Text style = {styles.txt}>7. Are you feeling energetic to do another job today?</Text>
            <Picker 
                
                selectedValue={this.state.A7}
                style={{fontSize:14, height: 50, width: 320}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({A7: itemValue})
              }>
              <Picker.Item label = "Select a item..." value = "Select a item..." />
              <Picker.Item label = "Yes" value = "Yes" />
              <Picker.Item label = "No" value = "No" />
              <Picker.Item label= "I don't know" value = "I don't know" />
      
            </Picker>
        
            <Text style={styles.errorText} >
                    {this.state.error}
            </Text>

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
    padding:20
  },
  buttonContainer:{
    backgroundColor:'#3B3B98',
    padding:10,
    borderRadius:10,
    
},
buttonText:{
    textAlign:'center',
    color:'#fff',
    fontWeight:'bold',
    fontSize:18

},
errorText:{
  color: "red",
  textAlign: "center",
  fontSize:16,
  marginBottom:10
},
txt:{
  paddingTop:10,
  fontSize:16
}
})


export default Survey;