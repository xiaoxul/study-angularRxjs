import { Component, OnInit } from '@angular/core';
//import { request } from 'https';
import {RequestService} from '../../services/request.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public request:RequestService) { }

  ngOnInit(): void {
    let data=this.request.getData();
    console.log(data);
    alert(data)

    //asynchronize
   
   this.request.getCallbackData((data)=>{
      alert(data)
    });

    //promise
    var promisedata=this.request.getPromiseData();
    promisedata.then((data)=>{
      alert(data)
    });

    //rxjs
    var rxjs=this.request.getRxjs();
    rxjs.subscribe((data2)=>{
      alert(data2)
    } );

  //unsubscribe
  var stream=this.request.getRxjs();
  var d=stream.subscribe((data2)=>{
    alert(data2)
  } )

  setTimeout(() => {
    d.unsubscribe();
  }, 1000);
}
}