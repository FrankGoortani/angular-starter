import { Component } from '@angular/core';

@Component({
    selector: 'navi-bar',
    template: `
                <div class="top-bar">
                    <div class="top-bar-title">Toptal Starter Project</div>
                    <div>
                        <ul class="menu">
                            <li class="nav-menu"><a href="#">Settings</a></li>
                        </ul>
                    </div>
                </div>
    `,
    styleUrls: ['./navbar.component.css']
})
export class NavComponent {}