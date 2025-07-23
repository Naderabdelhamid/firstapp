import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Products } from './products/products';
import { Notfound } from './notfound/notfound';
import { Contact } from './contact/contact';

export const routes: Routes = [

    {path:'' , redirectTo: 'home', pathMatch: 'full'},
    // {path:'' , component:Home},   الفرق بين الاتنين  User Experience
    // redirectTo: 'home' تعني إعادة التوجيه إلى الصفحة الرئيسية
{path:'home' , component:Home , title: 'Home Page'},
{path:'about' , component:About , title: 'About Us'},
{path:'contact' , component:Contact , title: 'Contact Us'},
{path:'product' , component:Products , title: 'Our Products'},
{path:'**' , component:Notfound , title: 'Page Not Found'},
];
