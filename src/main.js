import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "primeflex/primeflex.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-green/theme.css";

import Button from "primevue/button";
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import ProgressBar from "primevue/progressbar";
import { firebase } from '@firebase/app'


const app = createApp(App)
  .use(store)
  .use(router);

app.config.globalProperties.$primevue = { ripple: true };

app.component("Button", Button);
app.component("Menubar", Menubar);
app.component("InputText", InputText);
app.component("ProgressBar", ProgressBar);

app.mount("#app");
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEHH-6ks8kusNL4mTiAWXZexz4rHab9nU",
  authDomain: "wordrace-sarah.firebaseapp.com",
  projectId: "wordrace-sarah",
  storageBucket: "wordrace-sarah.appspot.com",
  messagingSenderId: "680501442683",
  appId: "1:680501442683:web:be75e759dadf423d32cade",
  measurementId: "G-H2EJ6WNKJ8",
};
firebase.initializeApp(firebaseConfig);


// Initialize Firebase
