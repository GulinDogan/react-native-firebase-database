import React, { Component } from 'react'
import {View, StyleSheet, ImageBackground, Text} from 'react-native'
import firebase from 'firebase'
import BG from '../../../images/bg5.jpg'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class UserInfo extends Component {

    constructor(props){
        
        super(props)
        this.state ={
            userData:{
                UserName:"",
                Age:"",
                Sex:"",
                Heigth:"",
                Weigth:"",
                Job:""
            },
            warr:""
        }
    }


    changeUserInfo = (data) =>{
        
        userData = this.state.userData
        userData["UserName"] = data.UserName
        userData["Age"] = data.Age
        userData["Sex"] = data.Sex
        userData["Heigth"] = data.Height
        userData["Weigth"] = data.Weight
        userData["Job"] = data.Job
        this.setState({userData:userData})

    }

    warrInfo = (data)=>{
        if(data ==  'Anonymous')
            this.setState({
                
                warr: "Your Profile Information Is Not Available. Please Firstly Enter Your Profile Information"
        })
        else{
            this.setState({
                warr:"Your Profile Information is Available on the System. You can continue with the Experience Section"
            })
        }
    }

    myfunc = async () => {

        let user = firebase.auth().currentUser
        console.log(user)
        
        firebase.database().ref('Demographic/'+user.uid).once('value').then((snapshot)=>{
            
            snapshot.forEach((childSnapshot)=>{
                let data =  childSnapshot.val() || 'Anonymous';
                console.log("data: ",data)
                this.changeUserInfo(data)
                this.warrInfo(data)
                
                })
        
        })

        .catch((err) => {
        
            console.log(err)
        })
        
    }
       


    componentDidMount (){
        this.myfunc()
    }
 

    render() {
        return (
        <ImageBackground source = {BG} style={styles.container}>

        <View style = {styles.iconContainer}>
            <Icon name="hand-o-right" color="black" size={30} />                    
        </View>
      
            <Text style = {styles.head}>Welcome {this.state.userData["UserName"]} </Text>
        <Text style = {styles.txt}> {this.state.warr}</Text>
        
        </ImageBackground>            
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 50
    },
    head:{
        paddingTop: 150,
        textAlign:'center',
        fontSize: 20
    },
    txt:{
        paddingTop: 50,
        fontSize:16,
        textAlign: 'justify'
    }
})