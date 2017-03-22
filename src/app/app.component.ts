import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  userName:String;
  userPass:String;

  constructor() {  
    console.log("AppComponent:ctor")
    this.userName=""
    this.userPass=""
  }

  ngOnInit(){
    console.log("AppComponent:ngOnInit")
  }

  submitLogin(txtUserName,txtUserPass){
    console.log(txtUserName,txtUserPass)
  }

}
