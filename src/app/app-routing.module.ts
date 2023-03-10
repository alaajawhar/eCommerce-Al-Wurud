import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from "./checkout/checkout.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
