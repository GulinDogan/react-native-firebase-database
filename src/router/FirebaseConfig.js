import React, {Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'
import LoginForm from '../authentication/LoginForm'
import DrawerNav from './DrawerNav'
import Loading from './Loading'
import firebase from 'firebase'

class App extends Component {

  state = {
    loggedIn: null
  }
  
  componentDidMount(){

    const config = {
        apiKey: "AIzaSyAnBDaDLvCPdhdbLaRNM1nfdVz8rg5AuZM",
        authDomain: "experiencesampling-a0ecd.firebaseapp.com",
        databaseURL: "https://experiencesampling-a0ecd.firebaseio.com",
        projectId: "experiencesampling-a0ecd",
        storageBucket: "experiencesampling-a0ecd.appspot.com",
        messagingSenderId: "822571808990",
        appId: "1:822571808990:web:ecf53a6ee79f2bb5baaa4f"
      };
      
      if (!firebase.apps.length) {
        // Initialize Firebase
        firebase.initializeApp(config)

    }

    firebase.auth().onAuthStateChanged(user => {
      if(user){
          this.setState({
            loggedIn:true
          })
      }else{
        this.setState({
          loggedIn:false
        })
      }
    })
  
}

renderContent = () => {
          
  switch (this.state.loggedIn) {
      case false:
        return <LoginForm/>  
        
        case true:
          return <DrawerNav/>

          default:
          return  <Loading/>
    }
  }
  
  render() {

    return (
      <View style = {styles.container}>

        {this.renderContent()}
     
    </View>
    )   
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
    }
})

export default App;