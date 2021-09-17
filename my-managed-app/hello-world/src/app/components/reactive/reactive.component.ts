import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, of, Subscriber, timer } from 'rxjs';
import { delay, filter, flatMap, map, switchMap } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  // both promises and observables may be rendered directly using the async pipe
  promise = Promise.resolve("I am a promise");
  observable = of("I am an observable");
  observable2 = of("I am also an obsvervable, but delayed").pipe(delay(3000));
  ObjObs$ = of({name:"petras", age:31}).pipe(delay(2500));

  constructor() { }

  ngOnInit(): void {

    // an observable is an object that pushes data onto its subscribers
    // it differs from normal in that when you call an fn you pull data
    // conventional way to name observables with a trailing $
    // observables have various characteristics:
    // 1. unicast or multicast > unicast pushes the data again to each subscriber
    // 2. synchronous or asynchronous > what happens within the observable determines whether its sync or async
    // 3. hot or cold > hot produces data regardless of whether there are subs, cold one only produces data if there are subs

    const num$ = Observable.create((subscriber: Subscriber<number>) => {
      // an observable may push: 1. data, 2. error, 3. completion signals. Error and completion are terminal conditions.
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      subscriber.complete();
    });

    // the subscribe method accepts at most 3 function args - one for data, one for errors, and one for completion
    num$.subscribe((num:number) => console.log(`Subscriber 1: ${num}`));
    num$.subscribe((num:number) => console.log(`Subscriber 2: ${num}`));
    num$.subscribe(
      (num:number)  => console.log(`Subscriber 3: ${num}`),
      (err:any) => console.log(err),
      () => console.log("Signal Complete"));

      // ceational operators simplify creation of observables
      const word$ = of("I","think","therefore","I","am");
      word$.subscribe((word:string) => console.log(word));

      const click$ = fromEvent(document.body, "click");
      click$.subscribe(event => console.log(event));

      // the above is the same as below

      document.body.onclick = event => console.log(event);

      // transformational operatiors enable the subscriber to tranform the stream to access the data it wants
      // the pipe fn may be passed any number of transformation operators
      // it will chain them together (create a pipeline)
      // the result is a new stream

      word$.pipe(filter(word => !["I", "am"].includes(word))).subscribe(word => console.log(word));


      word$.pipe(map(word => word.length)).subscribe(lengthOfWord => console.log(lengthOfWord));

      
      word$.pipe(
        filter(word => !["I", "am"].includes(word)),
        map(word => word.length))
        .subscribe(lengthOfWords => console.log(lengthOfWords));
        
        // ajax function returns an observable
        // therefore if we use map we wind up with an observable of observables or a stream of streams
        // there exist various methods and function to flatten an Observable
        // switchmap will cancel the request and switch to the latest one if necessary
        of("http://localhost:3000/bio").pipe(
          switchMap(url => ajax.getJSON(url))
          ).subscribe(data => console.log(data));


        

  }

}
