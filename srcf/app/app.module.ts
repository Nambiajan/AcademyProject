import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot([
         {
            path: 'app-login',
            component: LoginComponent
         },
         {
            path: 'app-home',
            component: HomeComponent
         },
          {
            path: 'app-cart',
            component: CartComponent
         }

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
