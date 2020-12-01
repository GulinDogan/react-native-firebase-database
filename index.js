import {AppRegistry, LogBox } from 'react-native';
import App from './src/router/StackNav'
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";
import firebase from 'firebase'

LogBox.ignoreAllLogs();//Ignore all log notifications

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

PushNotification.localNotificationSchedule({
  
  //channelId: "experiencesampling-a0ecd", 
  title: "Experience Sampling",
  message: "Don't forget to share your experiences with us",
  largeIconUrl: "https://blog.twmg.com.au/wp-content/uploads/2015/11/facebook-notify-logo.jpg", // (optional) default: "ic_launcher". Use "" for no large icon.
  //foreground: true,
  color: '#034f84',
  //vibrate: 300,
  date: new Date(Date.now() + 18000000), // 5 saat = 18000000 milis.
})

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
      
      let db = firebase.database().ref("Tokens") 
      console.log("Db: ", db)
      
      db.push({
        Token: token
      }) 

    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);

    },
    
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,
    requestPermissions: true,
  });

AppRegistry.registerComponent(appName, () => App);
