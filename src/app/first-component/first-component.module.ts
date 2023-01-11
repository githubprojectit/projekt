import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstComponentComponent } from './first-component.component';
import { FirstComponentRoutingModule } from './first-component.routing.module';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    FirstComponentRoutingModule,
    MatButtonModule,
    HttpClientModule
    
  ],
  declarations: [
    FirstComponentComponent
  ]
})

export class FirstComponentModule {}