import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgetPass',
  templateUrl: './app.forgetPass.html',
  styleUrls: ['./app.component.css']
})

export class ForgetPassComponent implements OnInit {

  forgetPassText:String
  changePassText:String

  constructor() {
    console.log("FogetPass:ctor")
    this.forgetPassText="Forget Password"
    this.changePassText="Change Password"  
  }

  ngOnInit(){
    console.log("FogetPass:ngOnInit")
  }

  submitForgetPass(){
    this.forgetPassText+=":F"
  }

  submitChangePass(){
    this.changePassText+=":C"
  }

}
