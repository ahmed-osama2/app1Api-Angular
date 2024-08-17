import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:'',redirectTo:'HOME',pathMatch:'full'},
    {path:'HOME',component:HomeComponent,title:'home page'},
    {path:'ABOUT',component:AboutComponent, title:'about page'},
    {path:'CONTACT',component:ContactComponent, title:'conact page'},
    {path:'**',component:NotFoundComponent , title:'not fond page'}
];
