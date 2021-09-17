import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/services/bio.service';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-bio-listener',
  templateUrl: './bio-listener.component.html',
  styleUrls: ['./bio-listener.component.css']
})
export class BioListenerComponent implements OnInit {

  constructor(private bioService: BioService) { 
    this.bioService.getObservable().subscribe(data => console.log(`BioListener: ${JSON.stringify(data)}`));
    this.bioService.getObservable().subscribe(data => console.log(data));
    this.bioService.getObservable().pipe(
      filter(action => action.type === "MESSAGE_FETCHED")
    ).subscribe(data => console.log(`BioListener2 ${JSON.stringify(data)}`));
   }

  ngOnInit(): void {
  }

}
