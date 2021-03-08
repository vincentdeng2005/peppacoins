 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAanZKk1t0ktz9n4k4h4fNviTKar6-lDYM",
    authDomain: "peppacoin-28b2b.firebaseapp.com",
    projectId: "peppacoin-28b2b",
    storageBucket: "peppacoin-28b2b.appspot.com",
    messagingSenderId: "603140205573",
    appId: "1:603140205573:web:a9ae0785444927bc82406c",
    measurementId: "G-2FE3CDKYJ5"
  };
  
src="https://code.jquery.com/jquery-3.5.1.min.js"

function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });

  var isMining = false;  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = firebase.firestore();
  var Auth  = firebase.auth();
  var empty = "";
    window.onload = function() {
        firebase.auth().onAuthStateChanged(user => {
        if(user)
        {
            isMining = false;
            if(window.location.href.indexOf("wallet") > -1)
            {
                InitializeWallet(user);
            }
            else if(window.location.href.indexOf("faucet") > -1)
            {
                InitializeFaucet(user);
            }
            else if(window.location.href.indexOf("referrals") > -1)
            {
                InitializeReferrals();
            }
            else if(window.location.href.indexOf("trade") > -1)
            {
                InitializeTrade();
                $(document).ready(function(){
                    var btn = document.getElementById("AmazonBtn");
                    var div = document.getElementById("amazon");
                    var div2 = document.getElementById("itunes");
                    var div3 = document.getElementById("microsoft");
                    var div4 = document.getElementById("starbucks");
                    btn.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                                var data = doc.data();
                                var TenGc= document.getElementById("10AGC");
                                var cost = document.getElementById("AmazonCost1");
                    
                                div.style.display="block";
                                div2.style.display="none";
                                div3.style.display="none";
                                div4.style.display="none";
                                TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                                cost.innerHTML="10$"
                                itemDisplay.innerHTML="10$ Amazon Gift Card"
                            }
                        })
                    }
                    var btn1 = document.getElementById("AmazonBtn1");
                    btn1.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((25/Number(data.PeppaValue) + (25/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="25$"
                            itemDisplay.innerHTML="25$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn2 = document.getElementById("AmazonBtn2");
                    btn2.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((50/Number(data.PeppaValue) + (50/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="50$"
                            itemDisplay.innerHTML="50$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn0 = document.getElementById("AmazonBtn0");
                    btn0.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="10$"
                            itemDisplay.innerHTML="10$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn3 = document.getElementById("AmazonBtn3");
                    btn3.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((100/Number(data.PeppaValue) + (100/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="100$"
                            itemDisplay.innerHTML="100$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn4 = document.getElementById("AmazonBtn4");
                    btn4.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((250/Number(data.PeppaValue) + (250/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="250$"
                            itemDisplay.innerHTML="250$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn5 = document.getElementById("AmazonBtn5");
                    btn5.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((500/Number(data.PeppaValue) + (500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="500$"
                            itemDisplay.innerHTML="500$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn6 = document.getElementById("AmazonBtn6");
                    btn6.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((1000/Number(data.PeppaValue) + (1000/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="1000$"
                            itemDisplay.innerHTML="1000$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }
                    var btn7 = document.getElementById("AmazonBtn7");
                    btn7.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10AGC");
                            var cost = document.getElementById("AmazonCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((2500/Number(data.PeppaValue) + (2500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="2500$"
                            itemDisplay.innerHTML="2500$ Amazon Gift Card"
                            document.getElementById("myDropdown").classList.toggle("show");
                        }
                        })
                    }


                    var btn = document.getElementById("ItunesBtn");
                    btn.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                                var data = doc.data();
                                var TenGc= document.getElementById("10IGC");
                                var cost = document.getElementById("ItunesCost1");
                    
                                div2.style.display="block";
                                div.style.display="none";
                                div3.style.display="none";
                                div4.style.display="none";
                                TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                                cost.innerHTML="10$"
                                itemDisplay1.innerHTML="10$ Itunes Gift Card"
                            }
                        })
                    }
                    var ibtn1 = document.getElementById("ItunesBtn1");
                    ibtn1.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((25/Number(data.PeppaValue) + (25/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="25$"
                            itemDisplay1.innerHTML="25$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn2 = document.getElementById("ItunesBtn2");
                    ibtn2.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((50/Number(data.PeppaValue) + (50/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="50$"
                            itemDisplay1.innerHTML="50$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn0 = document.getElementById("ItunesBtn0");
                    ibtn0.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="10$"
                            itemDisplay1.innerHTML="10$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn3 = document.getElementById("ItunesBtn3");
                    ibtn3.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((100/Number(data.PeppaValue) + (100/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="100$"
                            itemDisplay1.innerHTML="100$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn4 = document.getElementById("ItunesBtn4");
                    ibtn4.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((250/Number(data.PeppaValue) + (250/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="250$"
                            itemDisplay1.innerHTML="250$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn5 = document.getElementById("ItunesBtn5");
                    ibtn5.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((500/Number(data.PeppaValue) + (500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="500$"
                            itemDisplay1.innerHTML="500$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn6 = document.getElementById("ItunesBtn6");
                    ibtn6.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((1000/Number(data.PeppaValue) + (1000/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="1000$"
                            itemDisplay1.innerHTML="1000$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var ibtn7 = document.getElementById("ItunesBtn7");
                    ibtn7.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10IGC");
                            var cost = document.getElementById("ItunesCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((2500/Number(data.PeppaValue) + (2500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="2500$"
                            itemDisplay1.innerHTML="2500$ Itunes Gift Card"
                            document.getElementById("myDropdown1").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn = document.getElementById("MicrosoftBtn");
                    Mbtn.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                                var data = doc.data();
                                var TenGc= document.getElementById("10MGC");
                                var cost = document.getElementById("MicrosoftCost1");
                    
                                div2.style.display="none";
                                div3.style.display="block";
                                div.style.display="none";
                                div4.style.display="none";
                                TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                                cost.innerHTML="10$"
                                itemDisplay2.innerHTML="10$ Microsoft Gift Card"
                            }
                        })
                    }
                    var Mbtn1 = document.getElementById("MicrosoftBtn1");
                    Mbtn1.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((25/Number(data.PeppaValue) + (25/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="25$"
                            itemDisplay2.innerHTML="25$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn2 = document.getElementById("MicrosoftBtn2");
                    Mbtn2.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((50/Number(data.PeppaValue) + (50/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="50$"
                            itemDisplay2.innerHTML="50$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn0 = document.getElementById("MicrosoftBtn0");
                    Mbtn0.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="10$"
                            itemDisplay2.innerHTML="10$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn3 = document.getElementById("MicrosoftBtn3");
                    Mbtn3.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((100/Number(data.PeppaValue) + (100/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="100$"
                            itemDisplay2.innerHTML="100$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn4 = document.getElementById("MicrosoftBtn4");
                    Mbtn4.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((250/Number(data.PeppaValue) + (250/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="250$"
                            itemDisplay2.innerHTML="250$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn5 = document.getElementById("MicrosoftBtn5");
                    Mbtn5.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((500/Number(data.PeppaValue) + (500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="500$"
                            itemDisplay2.innerHTML="500$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn6 = document.getElementById("MicrosoftBtn6");
                    Mbtn6.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((1000/Number(data.PeppaValue) + (1000/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="1000$"
                            itemDisplay2.innerHTML="1000$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Mbtn7 = document.getElementById("MicrosoftBtn7");
                    Mbtn7.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10MGC");
                            var cost = document.getElementById("MicrosoftCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((2500/Number(data.PeppaValue) + (2500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="2500$"
                            itemDisplay2.innerHTML="2500$ Microsoft Gift Card"
                            document.getElementById("myDropdown2").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn = document.getElementById("StarbucksBtn");
                    Sbtn.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                                var data = doc.data();
                                var TenGc= document.getElementById("10SGC");
                                var cost = document.getElementById("StarbucksCost1");
                    
                                div2.style.display="none";
                                div3.style.display="none";
                                div.style.display="none";
                                div4.style.display="block";
                                TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                                cost.innerHTML="10$"
                                itemDisplay3.innerHTML="10$ Starbucks Gift Card"
                            }
                        })
                    }
                    var Sbtn1 = document.getElementById("StarbucksBtn1");
                    Sbtn1.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((25/Number(data.PeppaValue) + (25/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="25$"
                            itemDisplay3.innerHTML="25$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn2 = document.getElementById("StarbucksBtn2");
                    Sbtn2.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((50/Number(data.PeppaValue) + (50/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="50$"
                            itemDisplay3.innerHTML="50$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn0 = document.getElementById("StarbucksBtn0");
                    Sbtn0.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((10/Number(data.PeppaValue) + (10/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="10$"
                            itemDisplay3.innerHTML="10$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn3 = document.getElementById("StarbucksBtn3");
                    Sbtn3.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((100/Number(data.PeppaValue) + (100/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="100$"
                            itemDisplay3.innerHTML="100$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn4 = document.getElementById("StarbucksBtn4");
                    Sbtn4.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((250/Number(data.PeppaValue) + (250/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="250$"
                            itemDisplay3.innerHTML="250$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn5 = document.getElementById("StarbucksBtn5");
                    Sbtn5.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((500/Number(data.PeppaValue) + (500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="500$"
                            itemDisplay3.innerHTML="500$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn6 = document.getElementById("StarbucksBtn6");
                    Sbtn6.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((1000/Number(data.PeppaValue) + (1000/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="1000$"
                            itemDisplay3.innerHTML="1000$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                    var Sbtn7 = document.getElementById("StarbucksBtn7");
                    Sbtn7.onclick = function() {
                        var docRef = db.collection("data").doc("data");
                        docRef.get().then((doc) => {
                            if(doc.exists)
                            {
                            var data = doc.data();
                            var TenGc= document.getElementById("10SGC");
                            var cost = document.getElementById("StarbucksCost1");
                
                
                            TenGc.value ="Cost After Fees: "  + ((2500/Number(data.PeppaValue) + (2500/Number(data.PeppaValue) * 0.075)).toFixed(4)).toString() + " PEPPAS";
                            cost.innerHTML="2500$"
                            itemDisplay3.innerHTML="2500$ Starbucks Gift Card"
                            document.getElementById("myDropdown3").classList.toggle("show");
                        }
                        })
                    }
                })
            }
            if(!window.location.href.indexOf("index") > -1)
            {
                var price = document.getElementById("PeppaPrice");
                var docRef = db.collection("data").doc("data");
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        var data = doc.data();
                        price.innerHTML = "1 PEPPA = " + data.PeppaValue + "USD";
                    }
                })
            
            }
        }else{
            
            if(window.location.href.indexOf("index") > -1){
            var price = document.getElementById("PeppaPrice");
            var docRef = db.collection("data").doc("data");
            docRef.get().then((doc) => {
                if (doc.exists) {
                    var data = doc.data();
                    price.innerHTML = "1 PEPPA = " + data.PeppaValue + "USD";
                }
            })
        }
    }
        })
    }

    //document.addEventListener('contextmenu', function(e) {
      //  e.preventDefault();
      //});

    function InitializeReferrals()
    {
        let html = '';
        firebase.auth().onAuthStateChanged(user => {
            var docRef = db.collection("users").doc(user.uid);
            docRef.get().then((doc) => {
                var data = doc.data();
                var referrals = data.Referrals;
                arrayLength = referrals.length;
                document.getElementById("MultiplierValue").innerHTML = "Multiplier: " + data.Multiplier.toFixed(2) + "x";
                var j = 0;
                for (var i = arrayLength - 1; i >= 0; i--) {
                    var list = document.getElementById('referralsList');
                    j++;
                    if (j <= 20)
                    {
                    var docRef1 = db.collection("users").doc(referrals[i]);
                    docRef1.get().then((doc1) => {
                    const li = `
                    <li>
                    <div style="background-color:pink;width:600px;border:15px solid red;padding:40px;margin:20px;">
                    <h2 id="ReferralIndex">Referral Number ${(i+2).toString()}</h2>
                    <h4 id="ReferralWallet">Referral Wallet: ${doc1.data().Address}</h3>
                    <h3 id="ReferralsBlockMine">Blocks Mined by referral: ${doc1.data().BlocksMined} PEPPA</h3> 
                    </div>'
                    </li>
                    `;
                    html += li;
                    list.innerHTML = html;
                        })
                    }
                }
            })
        })
    }

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }
        
    function signUp(){
            
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        var referral = document.getElementById("referral");

        if(referral.value == "" || referral.value == null)
        {
            
        Auth.createUserWithEmailAndPassword(email.value, password.value).then(function (){

            var user = Auth.currentUser;

            var randomString = "Peppa_" + makeid(44);
            var referralcode = makeid(7);
            var docData = {
                Coins: 0.0,
                BlocksMined: 0,
                Address: randomString,
                Transactions: [],
                newFaucetTime: new Date(),
                ReferralCode: referralcode,
                Referrals: [],
                Referrer: empty,
                Multiplier: 1,
                PreviousTransactions: 0
            }

            db.collection("users").doc(user.uid).set(docData).then(() => {
                console.log("Document written with ID: ", user.uid);
                var docRef1 = db.collection("data").doc("data");
                docRef1.get().then((doc1) => {
                    var data = doc1.data();
                    var Users = data.users;
                    Users += 1;
                    var tempData1= {
                        BitcoinValue: data.BitcoinValue,
                        BlocksMined: data.BlocksMined,
                        MiningRewards: data.MiningRewards,
                        PeppaValue: data.PeppaValue,
                        PeppasTransacted: data.PeppasTransacted,
                        TotalSupply: data.TotalSupply,
                        TransactionsMade: data.TransactionsMade,
                        miningDifficulty: data.miningDifficulty,
                        users: Users
                    }
                    db.collection("data").doc("data").set(tempData1).then(()=>{
                        window.location.href = "wallet.html";
                    })
                })
            })
            .catch((error) => {
                console.log(error);
            });    
        }).catch((error) => {
            alert(error);
        })
    }
    else{
        db.collection("users").where("ReferralCode", "==", referral.value)
        .get()
        .then((querySnapshot) => {
        if(!querySnapshot.empty)
            {
        querySnapshot.forEach((doc) => {
            if(doc.exists)
            {
                Auth.createUserWithEmailAndPassword(email.value, password.value).then(function (){

                    var user = Auth.currentUser;
        
                    var randomString = "Peppa_" + makeid(44);
                    var referralcode = makeid(7);

        
                    var docData = {
                        Coins: 0.0,
                        BlocksMined: 0,
                        Address: randomString,
                        Transactions: [],
                        newFaucetTime: new Date(),
                        ReferralCode: referralcode,
                        Referrals: [],
                        Referrer: doc.id,
                        Multiplier: 1,
                        PreviousTransactions: 0
                    }
                    var data = doc.data();
                    
                    var tempData = {
                        Coins: data.Coins,
                        BlocksMined: data.BlocksMined,
                        Address: data.Address,
                        Transactions: data.Transactions,
                        newFaucetTime: data.newFaucetTime,
                        ReferralCode: data.ReferralCode,
                        Referrals: data.Referrals,
                        Referrer: data.Referrer,
                        Multiplier: data.Multiplier,
                        PreviousTransactions: data.PreviousTransactions
                    }
                    
        
                    db.collection("users").doc(user.uid).set(docData).then(() => {
                        tempData.Referrals.push(user.uid);
                        tempData.Multiplier += 0.05;
                        db.collection("users").doc(doc.id).set(tempData).then(() => {
                            var docRef1 = db.collection("data").doc("data");
                            docRef1.get().then((doc1) => {
                                var data = doc1.data();
                                var User = data.users;
                                var Users = User + 1;
                                var tempData1= {
                                    BitcoinValue: data.BitcoinValue,
                                    BlocksMined: data.BlocksMined,
                                    MiningRewards: data.MiningRewards,
                                    PeppaValue: data.PeppaValue,
                                    PeppasTransacted: data.PeppasTransacted,
                                    TotalSupply: data.TotalSupply,
                                    TransactionsMade: data.TransactionsMade,
                                    miningDifficulty: data.miningDifficulty,
                                    users: Users
                                }
                                db.collection("data").doc("data").set(tempData1).then(() =>{
                                    window.location.href = "wallet.html";
                                })
                            })
                        })
                    })    
                }).catch((error) => {
                    alert(error);
                })
            }
        });
    }
    else{
        alert("The referral code you entered is invalid");
    }
    })
    .catch((error) => {
        console.log("error");
    });
    }
    }

        
    function SendPeppa(){
        var receiverAddress = document.getElementById("receiverAddress");
        var TransactionAmount = document.getElementById("amount");
        var modal = document.getElementById("sendModal");
        modal.style.display = "none";
        var NetworkFee = (Number(TransactionAmount.value) * 0.01).toFixed(4);
        db.collection("users").where("Address", "==", receiverAddress.value)
        .get()
        .then((querySnapshot) => {
            if(!querySnapshot.empty)
            {
            querySnapshot.forEach((doc) => {
                if(doc.id != Auth.currentUser.uid)
                {
                    var docRef = db.collection("users").doc(Auth.currentUser.uid);
                    docRef.get().then((Senddoc) => {
                        if (Senddoc.exists) {
                            var data = Senddoc.data();
                            var coins = data.Coins;
                            if (coins >= Number(TransactionAmount.value) + Number(NetworkFee)){
                                var tempCoin = Number((coins - (Number(TransactionAmount.value) + Number(NetworkFee))).toFixed(4));  
                                
                                var TransactionObj = {
                                    ReceiverAddress: receiverAddress.value,
                                    SenderAddress: data.Address,
                                    TransactionDate: new Date(),
                                    Amount: Number(TransactionAmount.value).toFixed(4),
                                    NetworkFee: Number(NetworkFee).toFixed(4),
                                    send: true
                                }


                                var tempData = {
                                    Coins: tempCoin,
                                    BlocksMined: data.BlocksMined,
                                    Address: data.Address,
                                    Transactions: data.Transactions,
                                    newFaucetTime: data.newFaucetTime,
                                    ReferralCode: data.ReferralCode,
                                    Referrals: data.Referrals,
                                    Referrer: data.Referrer,
                                    Multiplier: data.Multiplier,
                                    PreviousTransactions: data.PreviousTransactions
                                }
                                tempData.Transactions.push(TransactionObj);

                                db.collection("users").doc(Auth.currentUser.uid).set(tempData).then(() => {
                                    alert("You sent " + Number(TransactionAmount.value).toFixed(4) + " PeppaCoins with a Network fee cost of " + Number(NetworkFee).toFixed(4).toString() +  " PEPPAS to the address " + receiverAddress.value + " successfully!")
                                    InitializeWallet(Auth.currentUser);
                                })

                                var docRef = db.collection("users").doc(doc.id);
                                docRef.get().then((Receivedoc) => {
                                    if (Receivedoc.exists) {
                                        var Rdata = Receivedoc.data();
                                        var Rcoins = Rdata.Coins;
                                        var ReceivetempCoin = Number(Number(Rcoins) + Number(TransactionAmount.value)); 
                                        var tempReceiveData = {
                                            Coins: ReceivetempCoin,
                                            BlocksMined: Rdata.BlocksMined,
                                            Address: Rdata.Address,
                                            Transactions: Rdata.Transactions,
                                            newFaucetTime: Rdata.newFaucetTime,
                                            ReferralCode: Rdata.ReferralCode,
                                            Referrals: Rdata.Referrals,
                                            Referrer: Rdata.Referrer,
                                            Multiplier: Rdata.Multiplier,
                                            PreviousTransactions: Rdata.PreviousTransactions
                                        }

                                        var ReceiveTransactionObj = {
                                            ReceiverAddress: receiverAddress.value,
                                            SenderAddress: data.Address,
                                            TransactionDate: new Date(),
                                            Amount: Number(TransactionAmount.value).toFixed(4),
                                            send: false
                                        }
                                        tempReceiveData.Transactions.push(ReceiveTransactionObj);
                                        db.collection("users").doc(doc.id).set(tempReceiveData).then(() => {
                                            console.log("user received successfuly");
                                                var docRef1 = db.collection("data").doc("data");
                                                docRef1.get().then((doc1) => {
                                                    var data = doc1.data();
                                                    var peppasTransacted = data.PeppasTransacted + Number(TransactionAmount.value);
                                                    var transactionsmade = data.TransactionsMade + 1
                                                    var tempData1= {
                                                        BitcoinValue: data.BitcoinValue,
                                                        BlocksMined: data.BlocksMined,
                                                        MiningRewards: data.MiningRewards,
                                                        PeppaValue: data.PeppaValue,
                                                        PeppasTransacted: peppasTransacted,
                                                        TotalSupply: data.TotalSupply,
                                                        TransactionsMade: transactionsmade,
                                                        miningDifficulty: data.miningDifficulty,
                                                        users: data.users
                                                    }
                                                    db.collection("data").doc("data").set(tempData1).then(() =>{
                                                        console.log("success");
                                                    })
                                                })
                                        })
                                    }
                                })
                                
                                .catch((error) => {
                                    alert("there was unfortunately a transaction error...")
                                    console.error("Error adding document: ", error);
                                }); 
                            }
                            else{
                                alert("Your balance cannot cover the transaction amount!")
                            }                            
                        }
                    })
                }
                else{
                    alert("You cant send peppacoins to yourself...");
                }
            });
        }
        else{
            alert("Please input a valid PeppaCoin Address");
        }
        })
        .catch(() => {
            alert("The address you inputed is not tied to an account!");
        });
    }
      

    function signIn(){
            
        var email = document.getElementById("email1");
        var password = document.getElementById("password1");
            
        const promise = Auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message)); 

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
        .then(() => {
            firebase.auth().onAuthStateChanged(user => {
                if(user)
                {
                    window.location.href = "wallet.html";
                }
        })
            return firebase.auth().signInWithEmailAndPassword(email, password);
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
  });
}

    function Mining(){
        if(!isMining)
        {
            isMining = true;

        var docRef = db.collection("users").doc(Auth.currentUser.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                var data = doc.data();
                var blocksMined = data.BlocksMined;
                var RewardSpeed = 20 + Math.floor(Math.random() * 1000);
                var Reward =  ((Math.random() * 15)/2 * data.Multiplier).toFixed(4);
                move(RewardSpeed, Reward);
                alert("You have started mining block #" + Number(blocksMined + 1));
                document.getElementById("mining").innerHTML = "Stop Mining";
            }
        })
        }
    }

    var progress = 0;
    function move(speed, reward) {
        if (progress == 0) {
          progress = 1;
          var elem = document.getElementById("myBar");
          var width = 0;
          var id = setInterval(frame, speed);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
              progress = 0;
              var docRef = db.collection("users").doc(Auth.currentUser.uid);
              docRef.get().then((doc) => {
                  if (doc.exists) {
                      var data = doc.data();
                      var docData = {
                        Coins: Number(Number(data.Coins) + Number(reward)).toFixed(4),
                        BlocksMined: Number(data.BlocksMined) + Number(1),
                        Address: data.Address,
                        Transactions: data.Transactions,
                        newFaucetTime: data.newFaucetTime,
                        ReferralCode: data.ReferralCode,
                        Referrals: data.Referrals,
                        Referrer: data.Referrer,
                        Multiplier: data.Multiplier,
                        PreviousTransactions: data.PreviousTransactions
                        }
                        
                    
                        var ReceiveTransactionObj = {
                            ReceiverAddress: docData.Address,
                            SenderAddress: "Mining Reward",
                            TransactionDate: new Date(),
                            Amount: Number(reward).toFixed(4),
                            send: false
                        }
                        docData.Transactions.push(ReceiveTransactionObj);
                        db.collection("users").doc(Auth.currentUser.uid).set(docData).then(() => {
                                var docRef1 = db.collection("data").doc("data");
                                docRef1.get().then((doc1) => {
                                    var data = doc1.data();
                                    var blocksmined = data.BlocksMined + 1;
                                    var supply = Number(data.TotalSupply - Number(reward)).toFixed(4);
                                    var tempData1= {
                                        BitcoinValue: data.BitcoinValue,
                                        BlocksMined: blocksmined,
                                        MiningRewards: data.MiningRewards,
                                        PeppaValue: data.PeppaValue,
                                        PeppasTransacted: data.PeppasTransacted,
                                        TotalSupply: supply,
                                        TransactionsMade: data.TransactionsMade,
                                        miningDifficulty: data.miningDifficulty,
                                        users: data.users
                                    }
                                    db.collection("data").doc("data").set(tempData1).then(() =>{
                                        isMining = false;
                                        alert("You finished mining and gained " + Number(reward).toFixed(4).toString() + " PEPPAS");
                                        InitializeWallet(Auth.currentUser);
                                        document.getElementById("mining").innerHTML = "Start Mining";
                                        width = 0;     
                                        elem.style.width = width + "%";
                                        elem.innerHTML = width + "%";            
                                    })
                                })
                        })

                    }
                })

            } else {
              width++;
              elem.style.width = width + "%";
              elem.innerHTML = width + "%";
            }
          }
        }
      }

    function InitializeFaucet(auth){
        var docRef = db.collection("users").doc(auth.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                var data = doc.data();
        var date1 = new Date();
        var date2 = data.newFaucetTime.toDate();
        if(Date.parse(date1) > Date.parse(date2)){
            document.getElementById("faucetStatus").innerHTML = "Faucet Ready";
        }
        else{
            document.getElementById("faucetStatus").innerHTML = "Not Ready... Next claim is at: " + date2;
        }
    }
})
    }
        

    function InitializeWallet(auth){
        let html = '';
        var docRef = db.collection("users").doc(auth.uid);
        docRef.get().then((doc) => {
            if (doc.exists) {
                var data = doc.data();
                var coins = data.Coins;
                var address = data.Address;
                var blocksMined = data.BlocksMined;
                var transactions = data.Transactions;
                document.getElementById("Coins").innerHTML = Number(coins).toFixed(4) + " PEPPAS";
                document.getElementById("Coins2").innerHTML = Number(coins).toFixed(4) + " PEPPAS";
                document.getElementById("UserAddress").innerHTML =  address;
                document.getElementById("UserAddress2").innerHTML =  address;
                document.getElementById("UserAddress3").innerHTML = address;
                document.getElementById("BlocksMined").innerHTML = "Blocks Mined: " + blocksMined.toString();
                document.getElementById("MultiplierValue").innerHTML = "Multiplier: " + data.Multiplier.toFixed(2) + "x";
                var docRef = db.collection("data").doc("data");
                docRef.get().then((Datadoc) => {
                    if (Datadoc.exists) {
                        var data1 = Datadoc.data();
                        document.getElementById("USDValue").innerHTML = "$" + (Number(Number(coins) * Number(data1.PeppaValue))).toFixed(4);
                        document.getElementById("USDValue2").innerHTML = "$" + (Number(Number(coins) * Number(data1.PeppaValue))).toFixed(4);
                        document.getElementById("USDValue3").innerHTML = "$" + (Number(Number(coins) * Number(data1.PeppaValue))).toFixed(4);
                    }
                

                arrayLength = transactions.length;
                var j = 0;
                var tempData = {
                    Coins: data.Coins,
                    BlocksMined: data.BlocksMined,
                    Address: data.Address,
                    Transactions: transactions,
                    newFaucetTime: data.newFaucetTime,
                    ReferralCode: data.ReferralCode,
                    Referrals: data.Referrals,
                    Referrer: data.Referrer,
                    Multiplier: data.Multiplier,
                    PreviousTransactions: Number(data.PreviousTransactions)
                }
                for (var i = arrayLength - 1; i >= 0; i--) {
                    j++;
                    if (j <= 20)
                    {
                    var list = document.getElementById('transactionList');
                    if(transactions[i].send == true)
                    {
                        const li = `
                        <li>
                        <button style="border-radius:10px;"class="accordion">Transaction Number ${(Number((i+1)) + Number(data.PreviousTransactions)).toString()} <br> -${Number(transactions[i].Amount).toFixed(4).toString()} PEPPA (-$${(Number(transactions[i].Amount) *  Number(data1.PeppaValue)).toFixed(4).toString()})</button>
                        <div style="border-radius:10px;"class="panel">
                        <h2 style="text-align:center">Receiver Address: </h2>
                        <button onclick="copyToClipboard('#address${[i]}')"class="btnTransparent pink" style="z-index: 2;    display: block;
                        width: 30em;
                        line-height: 3em;
                        padding: 0.2em;
                        margin:0.3em;	
                        border: 1px solid  #ccc ;  
                        border-radius: 8px;
                        -webkit-appearance:normal;
                        font-size: 1em;
                        word-wrap: break-word;margin-left:14.5%"><h2 id="address${[i]}" style="text-align:center;">${transactions[i].ReceiverAddress}</h2></button>
                        <h5 style="text-align:center;">TransactionTime: ${transactions[i].TransactionDate.toDate()}</h5>
                        </div>
                        </li>
                        `;
                        html += li;
                    }
                    else{
                        const li = `
                        <li>
                        
                        <button style="border-radius:10px;" class="accordion">Transaction Number ${(Number((i+1)) + Number(data.PreviousTransactions)).toString()} <br> +${Number(transactions[i].Amount).toFixed(4).toString()} PEPPA (+$${(Number(transactions[i].Amount) *  Number(data1.PeppaValue)).toFixed(4).toString()})</button>
                        <div style="border-radius:10px;"class="panel">
                        <h2 style="text-align:center">Sender Address: </h2>
                        <button onclick="copyToClipboard('#address${[i]}')"class="btnTransparent pink" style="z-index: 2;    display: block;
                        width: 30em;
                        line-height: 3em;
                        padding: 0.2em;
                        margin:0.3em;	
                        border: 1px solid  #ccc ;  
                        border-radius: 8px;
                        -webkit-appearance:normal;
                        font-size: 1em;
                        word-wrap: break-word;margin-left:14.5%"><h2 id="address${[i]}" style="text-align:center;">${transactions[i].SenderAddress}</h2></button>
                        <h5 style="text-align:center;">TransactionTime: ${transactions[i].TransactionDate.toDate()}</h5>
                        </div>
                        </li>
                        `;
                        html += li;
                    }
                    
                    list.innerHTML = html;

                   
                    var acc = document.getElementsByClassName("accordion");
                    var p;
                    
                    for (p = 0; p < acc.length; p++) {
                      acc[p].addEventListener("click", function() {
                        this.classList.toggle("active");
                        var panel = this.nextElementSibling;
                        if (panel.style.maxHeight) {
                          panel.style.maxHeight = null;
                        } else {
                          panel.style.maxHeight = panel.scrollHeight + "px";
                        } 
                      });
                    }
                } 
                else{
                    transactions.splice(transactions[i], 1);   
                    tempData.PreviousTransactions = tempData.PreviousTransactions+1;
                    console.log(tempData.PreviousTransactions);
                } 
                db.collection("users").doc(Auth.currentUser.uid).set(tempData)


            }                
        })

                } else {
                console.log("No such document!");
                var randomString = "Peppa_" + makeid(44);
               
                var docData = {
                    Coins: 0.0,
                    BlocksMined: 0,
                    Address: randomString,
                    Transactions: [],
                    newFaucetTime: new Date(),
                    ReferralCode: makeid(8),
                    Referrals: [],
                    Referrer: empty,
                    Multiplier: 1,
                    PreviousTransactions: 0
                }
    
                db.collection("users").doc(Auth.currentUser.uid).set(docData).then(() => {
                    console.log("Document written with ID: ", user.uid);
                    InitializeWallet(Auth.currentUser);
                })
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    function signOut(){
            
        Auth.signOut();
        window.location.href = "index.html";  
    }
        
    function Navigate(navigation){
        switch(navigation){
            case "wallet":
                window.location.href = "wallet.html";
                break;
            case "faucet":
                window.location.href = "faucet.html";
                break;
            case "gambling":
                window.location.href = "gambling.html";
                break;
            case "trade":
                window.location.href = "trade.html";
                break;
            case "referrals":
                window.location.href = "referrals.html";
                break;
        }
        
    }    

    function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes*60000);
    }

    function FaucetSendPeppa(){
        var receiverAddress = document.getElementById("FaucetreceiverAddress");
        db.collection("users").where("Address", "==", receiverAddress.value)
        .get()
        .then((querySnapshot) => {
            if(!querySnapshot.empty)
            {
            querySnapshot.forEach((doc) => {
                var docRef = db.collection("users").doc(doc.id);
                                docRef.get().then((Receivedoc) => {
                                    if (Receivedoc.exists) {
                                        var Rdata = Receivedoc.data();
                                        var Rcoins = Rdata.Coins;
                                        var date1 = new Date();
                                        var date2 = Rdata.newFaucetTime.toDate();
                                        var transactionAmount = ((Math.random() * 5)/2 * Rdata.Multiplier).toFixed(4);
                                        if(Date.parse(date1) > Date.parse(date2)){
                                        var ReceivetempCoin = Number(Rcoins) + Number(transactionAmount);  
                                        var newTime = addMinutes(new Date(), 1440);
                                        var tempReceiveData = {
                                            Coins: ReceivetempCoin,
                                            BlocksMined: Rdata.BlocksMined,
                                            Address: Rdata.Address,
                                            Transactions: Rdata.Transactions,
                                            newFaucetTime: newTime,
                                            ReferralCode: Rdata.ReferralCode,
                                            Referrals: Rdata.Referrals,
                                            Referrer: Rdata.Referrer,
                                            Multiplier: Rdata.Multiplier,
                                            PreviousTransactions: Rdata.PreviousTransactions
                                        }
                                        var ReceiveTransactionObj = {
                                            ReceiverAddress: receiverAddress.value,
                                            SenderAddress: "Faucet Reward",
                                            TransactionDate: new Date(),
                                            Amount: Number(transactionAmount).toFixed(4),
                                            send: false
                                        }
                                        tempReceiveData.Transactions.push(ReceiveTransactionObj);
                                        db.collection("users").doc(doc.id).set(tempReceiveData).then(() => {
                                            var docRef1 = db.collection("data").doc("data");
                                            docRef1.get().then((doc1) => {
                                                var data = doc1.data();
                                                var supply = Number(data.TotalSupply - Number(transactionAmount)).toFixed(4);
                                                var tempData1= {
                                                    BitcoinValue: data.BitcoinValue,
                                                    BlocksMined: data.BlocksMined,
                                                    MiningRewards: data.MiningRewards,
                                                    PeppaValue: data.PeppaValue,
                                                    PeppasTransacted: data.PeppasTransacted,
                                                    TotalSupply: supply,
                                                    TransactionsMade: data.TransactionsMade,
                                                    miningDifficulty: data.miningDifficulty,
                                                    users: data.users
                                                }
                                                db.collection("data").doc("data").set(tempData1).then(() =>{
                                                    alert("You have received " + transactionAmount.toString() + " PEPPAS for free!");
                                                    InitializeFaucet(Auth.currentUser);
                                                    })
                                            })
                                        })
                                    }
                                    else
                                    {
                                       alert("Cannot claim Daily faucet yet! Your next claim time is at: " + date2);
                                    }
                                    }
                                    else{
                                        alert("Please input a valid peppacoin address to receive the faucet");
                                    }
                                })
            })
        }
        else{
            alert("Please input a valid PeppaCoin Address");
        }

    }).catch(() => {
        alert("The address you inputed is not tied to an account!");
    });



    
}


firebase.auth().onAuthStateChanged((user) =>{
    if(user){
        console.log(user.email);
    }else{
        console.log("not in");
    }
});
function InitializeTrade()
{
    var BitcoinPrice = document.getElementById("BitcoinPrice");
    var BitcoinPeppa = document.getElementById("BitcoinPeppa");
    var docRef = db.collection("data").doc("data");
    docRef.get().then((doc) => {
        if (doc.exists) {
            var data = doc.data();
            var value = data.BitcoinValue.toFixed(4);
            BitcoinPrice.innerHTML = "Bitcoin Price: " + value.toString() + "USD";
            var peppaToBTC = value / data.PeppaValue;
            BitcoinPeppa.innerHTML = "1 Bitcoin ≈ " + peppaToBTC + "PEPPA";
        }
    })
}

function ClaimGiftCard(giftCardType, GiftCardAmount)
{   
    if(giftCardType == "Amazon")
    {
    var regex = /[\d|,|.|\+]+/g;
    GiftCardAmount = Number((document.getElementById("AmazonCost1").innerHTML).match(regex));
    }
    else if(giftCardType =="Itunes")
    {
        var regex = /[\d|,|.|\+]+/g;
        GiftCardAmount = Number((document.getElementById("ItunesCost1").innerHTML).match(regex));
    }
    else if(giftCardType=="Microsoft")
    {
        var regex = /[\d|,|.|\+]+/g;
        GiftCardAmount = Number((document.getElementById("MicrosoftCost1").innerHTML).match(regex));  
    }
    var docRef = db.collection("data").doc("redeemdata");
    docRef.get().then((doc) => {
        if(doc.exists)
        {
            var docRef3 = db.collection("data").doc("data");
            docRef3.get().then((doc2) => {
                if (doc2.exists) {
            var docRef2 = db.collection("users").doc(Auth.currentUser.uid);
            docRef2.get().then((Senddoc) => {
                if (Senddoc.exists) {
                    var data = Senddoc.data();
                    var coins = data.Coins;
                    var data1 = doc2.data();
                    var data2 = doc.data();
                    cost = (Number(Number(Number(GiftCardAmount)/Number(data1.PeppaValue))+ Number((GiftCardAmount/Number(data1.PeppaValue) * 0.075))).toFixed(4));
                    console.log(cost);
                    console.log(coins);
                    if (coins >= Number(cost)){
                        
                        var tempArrayOBJ= {
                        emailAddress: Auth.currentUser.email,
                        PeppaBeforeTransaction: coins,
                        USERpeppaCoinsTransacted: cost,
                        GiftCardAmount: GiftCardAmount,
                        GiftCardType:giftCardType,
                        USERPeppaAfterTransaction: (Number(coins) - Number(cost)),
                        TransactionDate: new Date()
                    }
                     var tempOBJ = {
                        redeems: data2.redeems
                    }
                    tempOBJ.redeems.push(tempArrayOBJ);

                    var TransactionObj = {
                        ReceiverAddress: "PeppaCoins Exchange",
                        SenderAddress: data.Address,
                        TransactionDate: new Date(),
                        Amount: Number(cost),
                        NetworkFee: "0",
                        send: true
                    }
                    
                    var tempData = {
                        Coins: (data.Coins) - cost,
                        BlocksMined: data.BlocksMined,
                        Address: data.Address,
                        Transactions: data.Transactions,
                        newFaucetTime: data.newFaucetTime,
                        ReferralCode: data.ReferralCode,
                        Referrals: data.Referrals,
                        Referrer: data.Referrer,
                        Multiplier: data.Multiplier,
                        PreviousTransactions: data.PreviousTransactions
                    }
                    tempData.Transactions.push(TransactionObj);
                    db.collection("users").doc(Auth.currentUser.uid).set(tempData).then(() => {
                        db.collection("data").doc("redeemdata").set(tempOBJ).then(() => {
                            alert("You have redeemed a " + GiftCardAmount + " dollar " + giftCardType + " Gift Card for " + cost + " PEPPAS! The gift code will be sent to your registered email address. You will be notified when your transaction has been approved or denied. Thank you for your purchase!");
                            InitializeTrade();
                        })    
                    }) 

                }else{
                    alert("Your balance cannot cover the transaction costs!")
                }
            }
        })
    }
})
    }
})
}


function Redeem(giftType)
{
    switch(giftType){
        case "bitcoin":
            var amountbtc = document.getElementById("BTCPEPPAmount");
            var peppaoutput = document.getElementById("BitcoinPeppaOutput");
            var BitcoinAddress = document.getElementById("BTCADDRESS");
            var BitcoinPrice = document.getElementById("BitcoinPrice");
            var amountAfterFees = document.getElementById("BitcoinPeppaOutputAfterFees");
            var docRef = db.collection("data").doc("redeemdata");
            docRef.get().then((doc) => {
                if(doc.exists)
                {
                    var regex = /[\d|,|.|\+]+/g;
                    var matches = peppaoutput.textContent.match(regex);  
                    var matches1 = amountAfterFees.textContent.match(regex);  
                    var matches2 = BitcoinPrice.textContent.match(regex);  

                    var data = doc.data();
                    var tempArrayOBJ= {
                        BTCaddress: BitcoinAddress.value,
                        BTCRECEIVEamountBeforeFees: matches,
                        USERpeppaCoinsTransacted: amountbtc.value,
                        BTCamountAfterFees: matches1,
                        TradeTimeBTCPrice: matches2,
                        TransactionDate: new Date()
                    }
                    var tempOBJ = {
                        redeems: data.redeems
                    }
                    tempOBJ.redeems.push(tempArrayOBJ);


                    var docRef2 = db.collection("users").doc(Auth.currentUser.uid);
                    docRef2.get().then((Senddoc) => {
                        if (Senddoc.exists) {
                            var data1 = Senddoc.data();
                            var coins = data1.Coins;
                            if(BitcoinAddress.value != "")
                            {
                            if (coins >= Number(amountbtc.value)){
                                var tempCoin = coins - Number(amountbtc.value);  
                                
                                var TransactionObj = {
                                    ReceiverAddress: "Peppa_Xh79XCvDGS2NmO9sKAtzBBZyjldTsroS36sdHXNb4ta7",
                                    SenderAddress: data1.Address,
                                    TransactionDate: new Date(),
                                    Amount: Number(amountbtc.value),
                                    NetworkFee: "0",
                                    send: true
                                }


                                var tempData = {
                                    Coins: tempCoin,
                                    BlocksMined: data1.BlocksMined,
                                    Address: data1.Address,
                                    Transactions: data1.Transactions,
                                    newFaucetTime: data1.newFaucetTime,
                                    ReferralCode: data1.ReferralCode,
                                    Referrals: data1.Referrals,
                                    Referrer: data1.Referrer,
                                    Multiplier: data1.Multiplier,
                                    PreviousTransactions: data1.PreviousTransactions
                                }
                                console.log(tempData);
                                tempData.Transactions.push(TransactionObj);

                                db.collection("users").doc(Auth.currentUser.uid).set(tempData).then(() => {
                                    db.collection("data").doc("redeemdata").set(tempOBJ).then(() => {
                                        alert("You have redeemed " + matches1 + " BTC for " + amountbtc.value + " PEPPAS with the transaction fee of 0.0004 BTC to the BTC address: " +BitcoinAddress.value + ". Your BTC transaction is being processed. You will be notified once the transaction has been completed or denied. Thank you for your purchase!");
                                        InitializeTrade();
                                    })    
                                }) 
                            }
                            else{
                                alert("Your balance cannot cover the transaction costs!")
                            }
                        }
                        else{
                            alert("You need a withdrawal btc address in order you to claim your bitcoin!")
                        }
                    }
                    })         
                }
            })
        break;
    }
}