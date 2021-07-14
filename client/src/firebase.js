import firebase from 'firebase/app';
import 'firebase/auth'


const app = firebase.initializeApp({
apiKey: 'AIzaSyCO42Caaehe6YVbV_cxWm-QtpN3-ZgnLUs',
authDomain: 'poop-ce50f.firebaseapp.com',
projectId: 'poop-ce50f',
storageBucket: 'poop-ce50f.appspot.com',
messagingSenderId: '786485328162',
appId: '1:786485328162:web:3cbc0880026658e3730d7ba',
measurementId: 'G-ZSCCDTZG9T'})

export const auth = app.auth()
export default app