import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Blog } from '../../../../models/login';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit, OnDestroy, OnChanges {
  constructor(private _api: AdminService, private router: Router) { }
  fields = new Blog()
  uploadImage = new FormData()
  ngAfterViewInit() {
  }
  ngOnInit() {
    this.getdata()
  }
  ngOnChanges() {
  }
  ngOnDestroy() {
  }
  getdata() {
    let url = window.location.pathname.split('/')
    let id = url.pop()
    this._api.blogGetById({ _id: id }).subscribe((res: any) => {
      if (res.error) {
        Swal.fire('', res.message, 'error')
      } else {
        this.fields = res.data
      }
    })
  }
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
  Submit() {
    this._api.blogEdit(this.fields).subscribe((res: any) => {
      if (res.error) {
        Swal.fire('', res.message, 'error')
      } else {
        Swal.fire('', res.message, 'success')
        this.router.navigate(['/super-admin/blog']);
      }
    })
  }

}
