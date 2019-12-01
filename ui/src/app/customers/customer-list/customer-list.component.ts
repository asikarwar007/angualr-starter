import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Student } from '../../models/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  constructor(private _api: AdminService, private router: Router) { }
  fields = new Student();
  uploadImage = new FormData();
  ngOnInit() {
  }


  onimage(event) {
    this.uploadImage.set('image', event.target.files[0]);
    this._api.uploadimage(this.uploadImage).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.fields.image = res.imageinfo.path;
      }
    });

  }
  Submit() {
    this._api.studentAdd(this.fields).subscribe((res: any) => {
      if (res.error) {
      } else {
        this.fields = new Student()
        // this.router.navigate(['/super-admin/banners']);
      }
    });
  }
}
