import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import {  } from '../../../models/login';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnDestroy, OnChanges {
  tabeldata: any;

  constructor(private _api: AdminService) { }
  ngAfterViewInit() {
  }
  ngOnChanges() {
  }
  ngOnDestroy() {
  }

  ngOnInit() {
    this.getdata()
  }
  getdata() {
    this._api.blogGet().subscribe((res: any) => {
      if (res.error) {
        Swal.fire('', res.message, 'error')
      } else {
        this.tabeldata = res.data
        setTimeout(() => {
          $('#dataTable').DataTable()
        }, 0)
      }
    })
  }
  remove(data) {
    let obj = {
      _id: data
    }
    this._api.blogRemove(obj).subscribe((res: any) => {
      if (res.error) {
        Swal.fire('', res.message, 'error')
      } else {
        Swal.fire('', res.message, 'success')
        this.getdata()
      }
    })
  }

}
