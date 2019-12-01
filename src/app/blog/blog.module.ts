import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';

import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';



@NgModule({
  declarations: [BlogComponent, AddBlogComponent, EditBlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule
  ]
})
export class BlogModule { }
