var os = require('os');
var networkInterfaces = os.networkInterfaces();
var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json"); // <----- Add the serviceAccountKey.json to the root folder


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://iprpi-870c2.firebaseio.com" // <----- Change the url
});

var db = admin.database();
var ref = db.ref("/piIKassen");  // <----- Give the device a name

// Saves the ip for the device to the firebase
for (var interface in networkInterfaces) {
    networkInterfaces[interface].forEach(function (details) {
        if (details.family == 'IPv4') {
            ref.child(interface).set({
                ip: details.address,
                time: admin.database.ServerValue.TIMESTAMP
            }).then(function (succes) {
                console.log("Firebase updated");
            });
        }
    });
}

// Stops the script after 5 seconds 
setTimeout(function () {
    process.exit(1)
}, 4000);
