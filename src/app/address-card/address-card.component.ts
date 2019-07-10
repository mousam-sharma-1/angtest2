import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

obj : any;
@Input('name') userName : string;
isCollaps : boolean =true;
  constructor() {
   }
toggleCollapse(){
  this.isCollaps = !this.isCollaps
}
  ngOnInit() {
    this.obj = {
      name: this.userName,
      mob:[9893333745,7000944479]
    }; 
  }
}
