import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BioService {

  private bio = {
    name: "Dave",
    employed: false,
    languages: ["C#", "Python", "Java"]
  }
  //how to cache


  // a subject is a type of observable as is event emitter
  // it differs insofar as it multicasts and it can be used to emit post creation.
  // in redux this type of obs is called an action
  private subject: Subject<{type:string, payload?:any}> = new Subject<{type:string, payload?:any}>();

  constructor() {
  }

  getObservable(): Observable<{type:string, payload?:any}> {
    // components/other services should not be able to emit on this stream
    // give them a ref to an observable not to a subject
    return this.subject.asObservable();
  }

  getMessage() {
    // each time something happens in which n other parties are interested
    // we use the subject to emit a new object on the stream
    // every subscriber is notified and component subscribers can rerender themseves
    this.subject.next({type:"MESSAGE_FETCHED"});
    return "Hello World!";
  }
  // ideally the service will provide copies of the data to prevent undersirable changes
  // the only way to change the bio should be to call a method on the service
  getBio(): Promise<any> {
    if (this.bio) {
      this.subject.next({type: "BIO_FETCHED_FROM_CACHE", payload:this.bio});
      return Promise.resolve(this.bio);
    }
    return fetch("http://localhost:3000/bio")
      .then(response => response.json())
      .then(bio => {
        this.bio = bio // caching the bio locally in the service so that we don't need to access the db every time.
        this.subject.next({type: "BIO_FETCHED_FROM_API", payload:this.bio});
        return Promise.resolve(bio);
    }); //response.json() deserialises the data and returns a promise
  }

  //an async fn is one that returns a promise no matter what
  async getBio2 () {
    if (this.bio) {
      this.subject.next({type: "BIO_FETCHED_FROM_CACHE", payload:this.bio});
      return Promise.resolve(this.bio);
    }
    const response = await fetch("http://localhost:3000/bio");
    const bio = await response.json();
    this.bio = bio;
    this.subject.next({type: "BIO_FETCHED_FROM_API", payload:this.bio});
    return bio;
  }

}
