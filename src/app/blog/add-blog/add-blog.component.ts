import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Blog } from '../../../../models/login'; //call database model 
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss']
})
export class AddBlogComponent implements OnInit, OnDestroy, OnChanges {
  constructor(private _api: AdminService, private router: Router) { }
  fields = new Blog() // create a form structure using db class
  uploadImage = new FormData()
  ngAfterViewInit() {
  }
  ngOnInit() {
    // this.getdata()
  }
  ngOnChanges() {
  }
  ngOnDestroy() {
  }

  // this will use when we have to upload image leave image upload for now

  onimage(event) {
    this.uploadImage.set('image', event.target.files[0]);
    this._api.uploadimage(this.uploadImage).subscribe((res: any) => {
      if (res.error) {
        Swal.fire('', res.message, 'error')
      } else {
        // this.fields.image = res.imageinfo.path
        // this.fields.thumbImg = res.imageinfo.thumbPath
        Swal.fire('', res.message, 'success')
      }
    })

  }

  // this will add the data
  Submit() {
    this._api.blogAdd(this.fields).subscribe((res: any) => {
      if (res.error) {
        Swal.fire('', res.message, 'error')
      } else {
        Swal.fire('', res.message, 'success')
        this.router.navigate(['/super-admin/blog']);
      }
    })
  }
}
