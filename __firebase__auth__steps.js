/**
 * 1.Create projects in Firebase website and go to docs and find upper 'Go to Console'
 * 2. go to create firebase projects, then name your created project name (as same)
 * 3. then npm i firebase in ur projects
 * 4. create a file firebase.init.js and copy the npm code below npm install firebase
 * 5. now go to doc => web => in web modular api copy 'import { getAuth } from "firebase/auth" in firebase.init.js;
 * 6. copy const auth = getAuth(app);
 * 7. export the const auth = getAuth(app);
 * 8. For google authentication go to firebase projects => click on Build => Authentication => get started => in sign method tab => google => give ur mail => then save.
 * 9. For google log in first create a button for google login.
 * 10. Then go to firebase home page => Build => Authentication => view docs => in left menu select web => sign in with google
 * 11. now from section 1 copy and paste the import GoogleAuthProvider from web modular api.
 * 12. use the GoogleAuthProvider.
 * 13. now from section 5 call the function signInWithPopup with then and catch method  with the parameter auth & provider which will automatically import.
 * Now follow the flow from 1.0 in LogIn.jsx to show the user data in ui after login and how to logout
 * todo: Pending github authentication module 49.6 to 49.7.

 */
