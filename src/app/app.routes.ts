import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Products } from './products/products';
import { Notfound } from './notfound/notfound';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path:'' , component:Home},
{path:'home' , component:Home},
{path:'about' , component:About},
{path:'contact' , component:Contact},
{path:'product' , component:Products},
{path:'**' , component:Notfound},
];
