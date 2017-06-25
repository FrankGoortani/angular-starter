import { Component } from '@angular/core';
import { restService } from '../rest.service';
import {Observable} from "rxjs/Observable";

// import * as _ from 'underscore';


@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'] ,
    selector: 'simple-chart-example'
})
export class HomeComponent {
    data : Observable<any>;
    options: Object;
    constructor(public rest : restService){
        try {
            rest.getData().subscribe((result) => {
                this.data = result;
            }, (err) => {
                this.data = err
            });
        }
        catch(e){
            this.data=e;
        }
        this.options = {
            title : { text : 'simple chart' },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 146.33],
                name: 'scores'
            },{
                data:[66, 56, 40, 39, 36],
                name: 'probability',
                dashStyle: 'longdash'
            }]
        };
    }
}

