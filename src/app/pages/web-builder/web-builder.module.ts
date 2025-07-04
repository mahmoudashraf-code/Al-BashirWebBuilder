import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WebBuilderComponent } from './web-builder.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [WebBuilderComponent, LogoComponent],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TooltipModule,
    RouterModule.forChild([
      {
        path: "",
        component: WebBuilderComponent,
      }
    ]),
  ]
})
export class WebBuilderModule { }
