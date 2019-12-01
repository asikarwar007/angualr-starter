import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AdminService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  httpOptions3 = {
    headers: new HttpHeaders({

    })
  };

  API_URL = environment.Api_url;
  constructor(private httpClient: HttpClient) { }


  uploadimage(data) {
    return this.httpClient.post(this.API_URL + '/file/uploadimage', data, this.httpOptions3)
  }

  admin_login(data) {
    return this.httpClient.post(this.API_URL + '/auth/login', data, this.httpOptions3)
  }
  vendorLogin(data) {
    return this.httpClient.post(this.API_URL + '/auth/vendor/vendorLogin', data, this.httpOptions3)
  }
  vendorSendOtp(data) {
    return this.httpClient.post(this.API_URL + '/auth/vendor/sendOtp', data, this.httpOptions3)
  }
  vendorRegister(data) {
    return this.httpClient.post(this.API_URL + '/auth/vendor/vendorRegister', data, this.httpOptions3)
  }
  superAdminLogin(data) {
    return this.httpClient.post(this.API_URL + '/auth/superAdmin/superAdminLogin', data, this.httpOptions3)
  }
  superAdminSendOtp(data) {
    return this.httpClient.post(this.API_URL + '/auth/superAdmin/sendOtp', data, this.httpOptions3)
  }
  superAdminRegister(data) {
    return this.httpClient.post(this.API_URL + '/auth/superAdmin/superAdminRegister', data, this.httpOptions3)
  }
  admin_details(data) {
    let token2 = window.localStorage.getItem('token')
    return this.httpClient.post(this.API_URL + '/auth/admin_details', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token2
      })
    })
  }

  shareGet() {
    return this.httpClient.get(this.API_URL + '/superadmin/getproductCategories', this.httpOptions)
  }

  vendorDashboard(data) {
    return this.httpClient.post(this.API_URL + '/vendor/web/dashboard', data, this.httpOptions)
  }
  vendorDetails(data) {
    return this.httpClient.post(this.API_URL + '/vendor/vendorDetails', data, this.httpOptions)
  }

  productAdd(data) {
    return this.httpClient.post(this.API_URL + '/vendor/product/addProduct', data, this.httpOptions)
  }
  searchProduct(data) {
    return this.httpClient.post(this.API_URL + '/vendor/web/searchProduct', data, this.httpOptions)
  }

  allProduct(data) {
    return this.httpClient.post(this.API_URL + '/vendor/product/all', data, this.httpOptions)
  }
  pendingProduct(data) {
    return this.httpClient.post(this.API_URL + '/vendor/product/pending', data, this.httpOptions)
  }
  approvedProduct(data) {
    return this.httpClient.post(this.API_URL + '/vendor/product/approved', data, this.httpOptions)
  }
  rejectedProduct(data) {
    return this.httpClient.post(this.API_URL + '/vendor/product/rejected', data, this.httpOptions)
  }

  productGet(page) {
    return this.httpClient.get(this.API_URL + '/superadmin/getproduct?page='+page, this.httpOptions)
  }
  productEdit(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/editproduct', data, this.httpOptions)
  }
  productGetById(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/getSingleproduct', data, this.httpOptions)
  }
  productRemove(data) {
    return this.httpClient.post(this.API_URL + '/vendor/product/remove', data, this.httpOptions)
  }

  productCategoriesAdd(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/addproductCategories', data, this.httpOptions)
  }
  productCategoriesGet(page) {

    return this.httpClient.get(this.API_URL + '/superadmin/getproductCategories?page='+page, this.httpOptions)
  }
  productCategoriesEdit(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/editproductCategories', data, this.httpOptions)
  }
  productCategoriesGetById(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/getSingleproductCategories', data, this.httpOptions)
  }
  productCategoriesRemove(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/deleteproductCategories', data, this.httpOptions)
  }

  productSubCategoriesAdd(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/addproductSubCategories', data, this.httpOptions)
  }
  productSubCategoriesGet(page) {
    return this.httpClient.get(this.API_URL + '/superadmin/getproductSubCategories?page='+page, this.httpOptions)
  }
  productSubCategoriesEdit(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/editproductSubCategories', data, this.httpOptions)
  }
  getproductSubCategoriesByCategory(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/getproductSubCategoriesByCategory', data, this.httpOptions)
  }
  productSubCategoriesGetById(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/getSingleproductSubCategories', data, this.httpOptions)
  }
  productSubCategoriesRemove(data) {
    return this.httpClient.post(this.API_URL + '/superadmin/deleteproductSubCategories', data, this.httpOptions)
  }


  offerAdd(data) {
    return this.httpClient.post(this.API_URL + '/vendor/offer/add', data, this.httpOptions)
  }
  offerGet(data) {
    return this.httpClient.post(this.API_URL + '/vendor/offer/get', data, this.httpOptions)
  }
  offerEdit(data) {
    return this.httpClient.post(this.API_URL + '/vendor/offer/edit', data, this.httpOptions)
  }
  offerGetById(data) {
    return this.httpClient.post(this.API_URL + '/vendor/offer/getSingle', data, this.httpOptions)
  }
  offerRemove(data) {
    return this.httpClient.post(this.API_URL + '/vendor/offer/delete', data, this.httpOptions)
  }

}

