import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  collection  = {}
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
    this.resto.getList().subscribe((data)=>{
      console.warn(data);
      this.collection = data;
    })
  }

}
