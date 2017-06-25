import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class restService{
    constructor(private http: Http){

    }

    getData(){
        //testing http get
        return this.http.get('https://requestb.in/1jwoiga1').map(res => res.json());
    }
}