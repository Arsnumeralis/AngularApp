import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actual-list',
  templateUrl: './actual-list.component.html',
  styleUrls: ['./actual-list.component.css']
})
export class ActualListComponent implements OnInit {

  @Input() shoppingList: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
