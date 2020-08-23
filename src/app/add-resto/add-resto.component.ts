import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  constructor(private rs: RestoService) { }

  ngOnInit(): void {
  }

  addresto = new FormGroup({
    name : new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })

  collectdata(){
    //console.warn(this.addresto.value);
    this.rs.saveData(this.addresto.value).subscribe((data)=>{
      console.warn(data);
    })
  }

}
