import {AppRegistry} from 'react-native';
import App from './src/router/StackNav'
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification";

PushNotification.localNotificationSchedule({
  //channelId: "experiencesampling-a0ecd", 
  title: "Experience Sampling",
  message: "Don't forget to share your experiences with us",
  largeIconUrl: "https://blog.twmg.com.au/wp-content/uploads/2015/11/facebook-notify-logo.jpg", // (optional) default: "ic_launcher". Use "" for no large icon.
  // foreground: true,
  color: '#034f84',
  vibrate: 300,
  date : new Date(Date.now() + 5*1000 )  // 5 sn.  =  5*1000
})

// Must be outside of any component LifeCycle (such as `componentDidMount`).
PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
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
