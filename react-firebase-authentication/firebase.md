<!--
 * @Author: Jinqi Li
 * @Date: 2021-07-30 16:34:15
 * @LastEditors: Jinqi Li
 * @LastEditTime: 2021-07-30 16:34:15
 * @FilePath: \educativeProjects\react-firebase-authentication\firebase.md
-->

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB9k9SWTWR43K1ask8rIX9AsgnkFxxSvUA",
    authDomain: "react-firebase-authentic-9e8dd.firebaseapp.com",
    projectId: "react-firebase-authentic-9e8dd",
    storageBucket: "react-firebase-authentic-9e8dd.appspot.com",
    messagingSenderId: "770756049659",
    appId: "1:770756049659:web:00df67a28d38438c5c8e5e",
    measurementId: "G-R5LZ7MYLFX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>