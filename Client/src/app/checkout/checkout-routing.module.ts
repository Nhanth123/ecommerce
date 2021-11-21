import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout.component';
import { Router, RouterModule } from '@angular/router';

const routes = [
  { path: '', component: CheckoutComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
