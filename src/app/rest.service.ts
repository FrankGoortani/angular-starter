import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class restService{
    constructor(private http: Http){

    }

    getData(){
        //testing http get
        return this.http.get('https://testtoptal.stamplayapp.com/api/cobject/v1/test?populate=true').map(res => res.json());
    }
}