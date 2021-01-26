import { Injectable } from '@angular/core';
//import { resolve } from 'dns';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  getData(){
    return 'this is a service data'
  }

  getCallbackData(cb){
    setTimeout(() => {
      var username='liu jia yu'
     // return data;

     cb(username);
    }, 1000);
  }

  getPromiseData(){
    return new Promise((resolve,reject)=>{

      setTimeout(() => {
        var username='liu pro';
        resolve(username);

      }, 1000);
     
    })
  }


  getRxjs(){
  return new Observable(Observer=>{
    setTimeout(() => {
      var username='liu rxjs';
      Observer.next( username);

    }, 2000);
  });

  }
    

}
