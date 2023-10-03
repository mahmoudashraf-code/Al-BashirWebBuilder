import { NgModule } from '@angular/core';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { EditorComponent } from './editor/editor.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { FieldsetModule } from 'primeng/fieldset';
import { MessagesModule } from 'primeng/messages';
import { TextColorComponent } from './text-color/text-color.component';
import { SidebarModule } from 'primeng/sidebar';
import { IconsComponent } from './icons/icons.component';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [PostsComponent, EditorComponent, TextColorComponent, IconsComponent],
  imports: [
    CommonModule,
    CardModule,
    DataViewModule,
    ButtonModule,
    DialogModule,
    FieldsetModule,
    MessagesModule,
    InputTextModule,
    HttpClientModule,
    TabViewModule,
    TimelineModule,
    SidebarModule,
    AccordionModule,
    RouterModule.forChild([
      {
        path: "",
        component: PostsComponent
      }
    ])
  ]
})
export class PostsModule { }
