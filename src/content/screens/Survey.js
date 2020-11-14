import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from 'react-native'
import { AsyncStorage } from '@react-native-community/async-storage'
import firebase from 'firebase'

class Survey extends Component {
  
    constructor(props) {
      
      super(props);
      this.state = {
        A1: "",
        A2: "",
        A3: "",
        A4: "",
        A5: "",
        A6: "",
        A7: ""
  
      };
      }
  
  
    addStore = async () => {
      try{    
        
        const user = firebase.auth().currentUser

          if (user) {
            console.log('User uid: ', user.uid)
            await this.changeHandler(user.uid)
            console.log("This state uid: ", this.state.UID)  
            
            let db = await firebase.database().ref("Survey").child(this.state.UID)
            console.log("Db: ", db)
        
            db.push({
              A1: this.state.A1,
              A2: this.state.A2,
              A3: this.state.A3,
              A4: this.state.A4,
              A5: this.state.A5,
              A6: this.state.A6,
              A7: this.state.A7
            }) 
            alert("The survey has been successfully saved")
            this.props.navigation.navigate('Photo')
          }
        }
        catch(err) {
          console.log('Error getting documents', err);
        }
      }

    async changeHandler(event) {
        await this.setState({ UID: event });
  }
  
    render() {
      return (
         
      <ScrollView>   
          <View style = {styles.container}>
          
          <Text>1. What are you doing now? (Rest, work or study, hygiene, eating / drinking, leisure, other)</Text>
              <TextInput
                 placeholder="Answer 1" 
                 value={this.state.A1}
                 onChangeText={ A1 => this.setState({A1})}
              />
  
              <Text>2. How are you feeling right now and score between 1-10? (Cheerful, Insecure, Relaxed, Annoyed,
                Satisfied, Lonely, Worried, Guilty, Angry, Happy, Unhappy, Neutral, Sad, Scared, Other) </Text>
              <TextInput 
                 placeholder="Answer 2" 
                  value={this.state.A2}
                  onChangeText={A2 => this.setState({A2})}
              />
  
              <Text>3. Who is with you right now? How do you feel about him? (Partner, manager, company owner, family member, 
                friend (s), colleague (s), acquaintance (s), stranger (s) / others, no one)</Text>
              <TextInput
                 placeholder="Answer 3" 
                 value={this.state.A3}
                 onChangeText={ A3 => this.setState({A3})}
             />
  
              <Text>4. Is there any event or person in your work environment that currently disturbs you? (Yeah, no, I don't know)</Text>
              <TextInput
                 placeholder="Answer 4"
                 value={this.state.A4}
                 onChangeText={ A4 => this.setState({A4})}
              />
              
              <Text>5. Would you like to be somewhere else now? (Yeah, no, I don't know)</Text>
              <TextInput
                 placeholder="Answer 5" 
                 value={this.state.A5}
                 onChangeText={ A5 => this.setState({A5})}
              />
              
              <Text>6. What was the most important event that happened after writing your last experience?</Text>
              <TextInput
                 placeholder="Answer 6" 
                 value={this.state.A6}
                 onChangeText={ A6 => this.setState({A6})}
              />
              
              <Text >7. Are you feeling energetic to do another job today? (Yeah, no, I don't know)</Text>
              <TextInput
                 placeholder="Answer 7"  
                 value={this.state.A7}
                 onChangeText={ A7 => this.setState({A7})}
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
      padding: 30,
      //backgroundColor: '#ffffff'
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
  
  
  export default Survey;