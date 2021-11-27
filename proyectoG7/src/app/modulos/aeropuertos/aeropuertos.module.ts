import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AeropuertosRoutingModule } from './aeropuertos-routing.module';
import { CreateComponent } from './create/create.component';
import { GetComponent } from './get/get.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    CreateComponent,
    GetComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AeropuertosRoutingModule
  ]
})
export class AeropuertosModule { }
