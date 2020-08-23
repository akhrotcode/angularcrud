import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginform = new FormGroup({
    username : new FormControl('afif'),
    password : new FormControl('123')
  })

  collectData(){
    console.warn(this.loginform.value);
  }
}
