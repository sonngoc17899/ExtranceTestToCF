window.onload = () =>{
    var firebaseConfig = {
        apiKey: "AIzaSyCT1VgVwOFNBd9W8lfRnkXcjvZmyliUepE",
        authDomain: "read-book-48061.firebaseapp.com",
        databaseURL: "https://read-book-48061.firebaseio.com",
        projectId: "read-book-48061",
        storageBucket: "read-book-48061.appspot.com",
        messagingSenderId: "547679358828",
        appId: "1:547679358828:web:b68fc67cbcb9b62f11ad49"
      };
    //   Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    view.setActiveScreen(`home`);
}