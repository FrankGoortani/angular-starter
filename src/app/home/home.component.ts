import { Component } from '@angular/core';
import { restService } from '../rest.service';
import {Observable} from "rxjs/Observable";

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']    
})
export class HomeComponent {
    data : Observable<any>;
    constructor(public rest : restService){
        rest.getData().subscribe((result) => {this.data = result;}, (err)=>{this.data = err})
    }
}

