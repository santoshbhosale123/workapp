import { Component,OnInit } from '@angular/core';
import* as firebase from'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'wrkapp';

  ngOnInit(){

  var config = {
    apiKey: "AIzaSyBJliryzq0Ul9aUpCtPfmxPsLEj5LHvbXM",
    authDomain: "angularworkapp.firebaseapp.com",
    databaseURL: "https://angularworkapp.firebaseio.com",
    projectId: "angularworkapp",
    storageBucket: "angularworkapp.appspot.com",
    messagingSenderId: "766172950644"
  };
  firebase.initializeApp(config);
  }
}
