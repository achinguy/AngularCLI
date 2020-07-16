import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  abouts:any[]= [
    // {id:1, name:"laptop", quantity:3, price:"$654"},
    // {id:2, name:"computer", quantity:4, price:"$96"},
    // {id:3, name:"mouse", quantity:10, price:"$2"},
    // {id:4, name:"keyboard", quantity:1, price:"$43"}
  ]
  pageTtile:string = "This is contact us page and we are using attribute directive";
  constructor(private user:UserService) { }

  ngOnInit() {
  }

}
