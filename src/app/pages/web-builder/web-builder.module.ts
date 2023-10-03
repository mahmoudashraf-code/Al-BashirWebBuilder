import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebBuilderComponent } from './web-builder.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [WebBuilderComponent],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    RouterModule.forChild([
      {
        path: "",
        component: WebBuilderComponent,
      }
    ]),
  ]
})
export class WebBuilderModule { }
