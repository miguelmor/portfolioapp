import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemComponent } from './components/pages/item/item.component';
import { SearchComponent } from './components/pages/search/search.component';

const app_routes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:termino', component: SearchComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];


@NgModule({
  imports: [
    RouterModule.forRoot( app_routes, { useHash: true } )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
