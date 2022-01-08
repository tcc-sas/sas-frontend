import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }


  success(text: string){
    return Swal.fire({
      text: text,
      icon: 'success',
    })
  }

  error(text: string){
    return Swal.fire({
      text: text,
      icon: 'error'
    })
  }
}
