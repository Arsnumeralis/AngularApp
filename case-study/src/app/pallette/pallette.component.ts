import { Component, OnInit, Output , EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-pallette',
  templateUrl: './pallette.component.html',
  styleUrls: ['./pallette.component.css']
})
export class PalletteComponent implements OnInit {

  @Input() availableItems: Array<string> = [];

  @Output("itemAdded") itemAddedEventEmitter: EventEmitter<string> = new EventEmitter<string>();

  handleAddItem(item:string) {
    this.itemAddedEventEmitter.emit(item);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
