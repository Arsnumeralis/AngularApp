import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  slApiUrl = "http://localhost:3000/shoppingList";
  aiApiUrl = "http://localhost:3000/availableItems"

  private shoppingList : Array<string>
  = [

  ];

  private availableItems : Array<string>
  = [

  ]

  constructor() { }



  async getShoppingList () {
    const response = await fetch(this.slApiUrl);
    const shoppingList = await response.json();
    this.shoppingList = shoppingList;
    return shoppingList;
  }
  
  async getAvailableItems () {
    const response = await fetch(this.aiApiUrl);
    const availableItems = await response.json();
    this.availableItems = availableItems;
    return availableItems;
  }
  
  addItemShoppingList (item:string): Promise<{id:number,item:string}> {
    return fetch(this.slApiUrl, {
      method: "post",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({item})
    }).then(response => response.json());
  }
//huh
}
