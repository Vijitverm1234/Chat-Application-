import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHUmGhd4MVol-2j1D0RbLss3wQmHB1pbU",
  authDomain: "chat-app-cec8f.firebaseapp.com",
  projectId: "chat-app-cec8f",
  storageBucket: "chat-app-cec8f.appspot.com", // Corrected URL
  messagingSenderId: "547838348718",
  appId: "1:547838348718:web:8af707b9a88e639c048c3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    // Add user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: "",
      avatar: "",
      bio: "",
      lastSeen: Date.now()
    });

    // Initialize user's chat data
    await setDoc(doc(db, "chats", user.uid), {
      chatData: []
    });

    toast.success("Signup successful!");
  } catch (error) {
    console.error(error);

    // Display user-friendly error messages
    switch (error.code) {
      case "auth/email-already-in-use":
        toast.error("This email is already in use.");
        break;
      case "auth/invalid-email":
        toast.error("Please enter a valid email.");
        break;
      case "auth/weak-password":
        toast.error("Password should be at least 6 characters.");
        break;
      default:
        toast.error("An error occurred. Please try again.");
    }
  }
};
const logout=async()=>{
    try {
        await signOut(auth)
    } catch (error) {
        toast.error("some error occured")
    }
   
}
const login = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
  
      // Optionally handle post-login actions here
      console.log("Login successful:", user);
      toast.success("Logged in successfully!");
    } catch (error) {
      console.error(error);
  
      // Map Firebase errors to user-friendly messages
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("No account found with this email.");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password. Please try again.");
          break;
        case "auth/invalid-email":
          toast.error("Please enter a valid email address.");
          break;
        default:
          toast.error("An error occurred. Please try again.");
      }
    }
  };
export { signup ,login,logout,auth,db};
