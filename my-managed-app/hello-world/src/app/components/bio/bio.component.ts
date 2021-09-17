import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BioService } from 'src/app/services/bio.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit{

  message = "";
  employed = true;
  languages = ["JS", "Python"]
  family = {
    wife: "none",
    son: "none",
    daughter: "none"
  };

  bio : {
    name:string,
    employed:boolean,
    languages:Array<string>
  } | null = null;

  // @Input() name: string = ""; //ts type is inferred
  // @Output("madeUnemployed") madeUnemployedEventEmitter = new EventEmitter<string>();

  // by marking the param as private the prop is create automatically
  // constructor should only be used for declaring dependencies
  constructor(private bioService: BioService) {
    // generally you won't do stuff here because @Input has not been initialised
  }

  ngDoCheck() {
    console.log("Change detection run");
  }

  // handleMakeUnemployed() {
  //   this.employed = false;
  //   this.madeUnemployedEventEmitter.emit(this.name);
  // }

  // handleDivorce() {
  //   this.family.wife = "divorced lmao";
  // }

  ngOnInit() {
    //this method is called once all inbound data props have been set/initialised
    this.message = this.bioService.getMessage();
    this.bioService.getBio2().then(bio => this.bio = bio);
    console.log(this.bioService.getBio());
  }

}
