import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAk9mucItUIFNmtQs2t60diuzb7Et0rL6c',
  authDomain: 'crwn-clothing-db-44d2a.firebaseapp.com',
  projectId: 'crwn-clothing-db-44d2a',
  storageBucket: 'crwn-clothing-db-44d2a.firebasestorage.app',
  messagingSenderId: '423041206821',
  appId: '1:423041206821:web:b29d199b0e1b478e040dcc',
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, { displayName, email, createdAt })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }
  return userDocRef
}
