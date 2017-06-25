import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';
import { HttpModule } from '@angular/http';

import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';

import { ChartModule } from 'angular2-highcharts';
import { restService } from './rest.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        ChartModule.forRoot(require('highcharts'))
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ErrorComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ restService ]
})
export class AppModule { }
