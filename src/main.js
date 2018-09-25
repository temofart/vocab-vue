import Vue from 'vue'
import App from './App.vue'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
firebase.initializeApp({
 projectId: 'vocabulary-85ea8', 
 databaseURL: 'https://vocabulary-85ea8.firebaseio.com'
})
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
  firestore.settings(settings);
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
