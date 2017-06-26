import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';

import { SecondPageComponent } from '../second-page/second.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'second', component: SecondPageComponent },
            { path: '' , component: HomeComponent},
            { path: '**' , component: ErrorComponent }
        ])    
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}

