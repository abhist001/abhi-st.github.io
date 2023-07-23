// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
var ref = new Firebase('https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js');

const firebaseConfig = {
  apiKey: "AIzaSyBHZjHLYHQ8Y1ReMPeVxMSFp1EUotGJ2u0",
  authDomain: "contacrform-portfolio.firebaseapp.com",
  projectId: "contacrform-portfolio",
  storageBucket: "contacrform-portfolio.appspot.com",
  messagingSenderId: "883473833673",
  appId: "1:883473833673:web:6f02311ea0dd5dfa17f718",
  measurementId: "G-XX5489YV2K"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//message collection

var messageRef = firebase.database().ref('messages');



//submit form
document.getElementById('contactform').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    var name= getInputValue('firstname');
    var company=getInputValue('company');
    var  email= getInputValue('email');
    var message=getInputValue('message');

    saveMessage(name, company, email, message)
}

function getInputValue(id){
    return document.getElementById(id).value
}


//saving messages

function saveMessage(name, company, email, message){
    var newmessageRef = messageRef.push();
    newmessageRef.set({
        name: name,
        company: company,
        email: email,
        message: message
    });
}