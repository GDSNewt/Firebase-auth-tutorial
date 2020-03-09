import Vue from 'vue';
import App from './App.vue';
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyAZkAvEaQC91IMqVRF32-nMOV9YTCKyhW0",
  authDomain: "vue-firebase-auth-639fe.firebaseapp.com",
  databaseURL: "https://vue-firebase-auth-639fe.firebaseio.com",
  projectId: "vue-firebase-auth-639fe",
  storageBucket: "vue-firebase-auth-639fe.appspot.com",
  messagingSenderId: "562258247440",
  appId: "1:562258247440:web:512c558302a7f15442af95"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
