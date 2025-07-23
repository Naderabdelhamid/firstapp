import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Navbar } from "./navbar/navbar";
import { About } from "./about/about";
import { Footer } from "./footer/footer";
import { Contact } from "./contact/contact";
import { Products } from "./products/products";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Navbar, About, Footer, Contact, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'firstapp';
}
