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