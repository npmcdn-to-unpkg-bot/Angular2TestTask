import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-map',
    template: `
    <h1>{{title}}</h1>

    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
   `,
    styleUrls: ['app/app.component.css'],   

    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService]
})
@RouteConfig([
    // {path: '/', redirectTo: ['Dashboard'] },
    { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/heroes', name: 'Heroes', component: HeroesComponent },
    { path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent }
])
export class AppComponent {

    public title = 'Test task';
    //YIu7Ofztb9AzTZ0qi7HW58ZsBTZH9tV4
    

}