import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {TopbarComponent} from "./layout/topbar/topbar.component";
import {SlideTopbarComponent} from "./layout/slide-topbar/slide-topbar.component";
import {ProductsDashboardComponent} from "./layout/products-dashboard/products-dashboard.component";
import {TicketBillComponent} from "./layout/ticket-bill/ticket-bill.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { MatFormFieldModule} from "@angular/material/form-field";
import {MenuFoodComponent} from "./layout/products-dashboard/menu-food/menu-food.component";
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import {PizzaComponent} from "./layout/products-dashboard/pizza/pizza.component";
import {CloseTicketComponent} from "./layout/ticket-bill/close-ticket/close-ticket.component";

//////routes navigate pages of components///////////
const routes: Routes = [
  { path: '', component: ProductsDashboardComponent },
  { path: 'menu-food', component: MenuFoodComponent },
  { path: 'pizza', component: PizzaComponent },
];


@NgModule({
  /////declarations all componentes on app module//////
  declarations: [
    AppComponent,
    SlideTopbarComponent,
    TopbarComponent,
    ProductsDashboardComponent,
    TicketBillComponent,
    MenuFoodComponent,
    PizzaComponent,
    CloseTicketComponent
  ],

  imports: [
    BrowserModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    [
      RouterModule.forRoot(routes)
    ],
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



