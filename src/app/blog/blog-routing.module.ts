import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component'
import { AddBlogComponent } from './add-blog/add-blog.component'
import { EditBlogComponent } from './edit-blog/edit-blog.component'
// import { ViewBlogComponent } from './view-blog/view-blog.component'

const routes: Routes = [
  {
    path:'',
    component:BlogComponent
  },
  {
    path:'add',
    component:AddBlogComponent
  },
  {
    path:'edit/:id',
    component:EditBlogComponent
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
