import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground} from 'react-native'
import BG from '../../../images/bg5.jpg'
import { NavigationContext } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';

import firebase from 'firebase'

class Survey extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    
    super(props);
    this.state = {
      A1: "Work",
      A2: "Cheerful",
      A3: "Partner",
      A4: "Yes",
      A5: "Yes",
      A6: "",
      A7: "Yes",
      DateTime: ""

    };
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
    }
  
  }


  render() {
    return (
      <ScrollView>
        <ImageBackground style={styles.container} source = {BG}>
        <View style = {styles.inputGroup}>
        
        <Text>1. What are you doing now? </Text>
        <RNPickerSelect 
                  
                  value={this.state.A1}
                  onValueChange={A1 => this.setState({A1})}
                  items={[
                      { label: 'Work', value: 'Work' },
                      { label: 'Study', value: 'Study' },
                      { label: 'Cook', value: 'Cook' },
                      { label: 'Rest', value: 'Rest' },
                      { label: 'Hygiene', value: 'Hygiene' },
                      { label: 'Eating / Drinking', value: 'Eating / Drinking' },
                      { label: 'Leisure', value: 'Leisureg' },
                      { label: 'Cther', value: 'Cther' },
                  ]}
              />

            <Text>2. How are you feeling right now and score between 1-10? </Text>
              <RNPickerSelect 
                  value={this.state.A2}
                  onValueChange={A2 => this.setState({A2})}
                  items={[
                      { label: 'Cheerful', value: 'Cheerful' },
                      { label: 'Insecure', value: 'Insecure' },
                      { label: 'Relaxed', value: 'Relaxed' },
                      { label: 'Annoyed', value: 'Annoyed' },
                      { label: 'Satisfied', value: 'Satisfied' },
                      { label: 'Lonely', value: 'Lonely' },
                      { label: 'Worried', value: 'Worried' },
                      { label: 'Guilty', value: 'Guilty' },
                      { label: 'Angry', value: 'Angry' },
                      { label: 'Happy', value: 'Happy' },
                      { label: 'Unhappy', value: 'Unhappy' },
                      { label: 'Neutral', value: 'Neutral' },
                      { label: 'Sad', value: 'Sad' },
                      { label: 'Scared', value: 'Scared' },
                      { label: 'Other', value: 'Other' },
                  ]}
              />

            <Text>3. Who is with you right now? How do you feel about him? </Text>
              <RNPickerSelect 
                  value={this.state.A3}
                  onValueChange={A3 => this.setState({A3})}
                  items={[
                      { label: 'Partner', value: 'Partner' },
                      { label: 'Manager', value: 'Manager' },
                      { label: 'Company owner', value: 'Company owner' },
                      { label: 'Family member', value: 'Family member' },
                      { label: 'Friend (s)', value: 'Friend (s)' },
                      { label: 'Colleague (s)', value: 'Colleague (s)' },
                      { label: 'Acquaintance (s)', value: 'Acquaintance (s)' },
                      { label: 'Stranger (s) / others', value: 'Stranger (s) / others' },
                      { label: 'No one', value: 'No one' },
                      
                  ]}
              />

            <Text>4. Is there any event or person in your work environment that currently disturbs you? </Text>
            <RNPickerSelect 
                  value={this.state.A4}
                  onValueChange={A4 => this.setState({A4})}
                  items={[
                      { label: 'Yes', value: 'Yes' },
                      { label: 'No', value: 'No' },
                      { label: "I don't know", value: "I don't know" },
                     
                  ]}
              />
            
            <Text>5. Would you like to be somewhere else now?</Text>
            <RNPickerSelect 
                  value={this.state.A5}
                  onValueChange={A5 => this.setState({A5})}
                  items={[
                      { label: 'Yes', value: 'Yes' },
                      { label: 'No', value: 'No' },
                      { label: "I don't know", value: "I don't know" },
                     
                  ]}
              />
            
            <Text>6. What was the most important event that happened after writing your last experience?</Text>
            <TextInput
               placeholder="Answer 6" 
               value={this.state.A6}
               onChangeText={ A6 => this.setState({A6})}
            />
            
            <Text >7. Are you feeling energetic to do another job today?</Text>
            <RNPickerSelect 
                  value={this.state.A7}
                  onValueChange={A7 => this.setState({A7})}
                  items={[
                      { label: 'Yes', value: 'Yes' },
                      { label: 'No', value: 'No' },
                      { label: "I don't know", value: "I don't know" },
                     
                  ]}
              />
        
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
    paddingTop:20

  },
  inputGroup: {
    padding:20,

  },
  buttonContainer:{
    backgroundColor:'#3B3B98',
    padding:10,
    marginBottom:20,
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


export default Survey;