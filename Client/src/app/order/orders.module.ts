import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders/orders.component';
import { OrderDetailedComponent } from './orders/order-detailed/order-detailed.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrdersComponent, OrderDetailedComponent],
  imports: [
    CommonModule, 
    OrdersRoutingModule, 
    SharedModule
  ],
})
export class OrdersModule {}
