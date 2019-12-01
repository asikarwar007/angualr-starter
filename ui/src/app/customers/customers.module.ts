import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
  ],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
