import { getAuth, onAuthStateChanged } from "firebase/auth";

import { useEffect } from "react";

export const Profile = () => {
  const name = "";
  const surName = "";
  const email = "";
  const avatar = "";

  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    console.log(user);
  }
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      const token = await user?.getIdToken();
      console.log(token);
      // const user = make request to get profile info
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
      } else {
        // then user hasn't created his profile redirect to create profile page or make request to create profile with existing data
        // ...
      }
    });
  }, []);
  return <div>sfkv sfvm</div>;
};
