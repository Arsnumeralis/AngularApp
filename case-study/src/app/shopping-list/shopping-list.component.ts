import { Component, DoCheck, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  // shoppingList : Array<{id:number,item:string}> = [];

  shoppingList : Array<string> = [];

  availableItems : Array<string> = [];

  constructor(private itemService: ItemService) { };

  
 
  handleAddingItem(item:string) {
    this.shoppingList.push(item)
  }

  ngOnInit() {
    //this method is called once all inbound data props have been set/initialised
    this.itemService.getShoppingList().then(shoppingList => this.shoppingList = shoppingList);
    console.log(this.itemService.getShoppingList());
    this.itemService.getAvailableItems().then(availableItems => this.availableItems = availableItems);
    console.log(this.itemService.getAvailableItems());
  };
// how can i make this work
  handleItemAdded(item:string) {
    this.itemService.addItemShoppingList(item)
    .then(itemWithId => this.shoppingList.push(itemWithId));
  }
  }
