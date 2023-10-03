import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./pages/web-builder/web-builder.module").then(m => m.WebBuilderModule)
  },
  {
    path: "gui",
    loadChildren: () => import("./pages/posts/posts.module").then(m => m.PostsModule)
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "404",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
