import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {

  products:string[] = ["abc","def","ghi"];
  logoUrl:string = "assets/Scan.jpg"
  constructor() { }
  username:string = "Achin"
  ngOnInit() {
  }

  change(){
    this.username = "Achin after event"
    this.logoUrl = "assets/Scan1.jpg"
  }
}
