import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ApiService } from '../service/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  products: Producto[] = [];
  filtro = new FormControl('');
  isPalindromo: boolean;

  constructor(private apiService: ApiService) { 
    this.isPalindromo = false;
  }

  obtenerProductos() {
    this.isPalindromo = this.verificarPalindromo();
    if(!this.filtro) return;
    this.apiService.getProductos(this.filtro.value).subscribe((response: any) => {
      this.products = response;
    });
  }

  verificarPalindromo():boolean {
    let filterReverse = '';
    for(let i = 0; i < this.filtro.value.length/2; i++) {
			filterReverse = this.filtro.value.charAt(i) + filterReverse;
		}
    if(this.filtro.value.substring(this.filtro.value.length/2,this.filtro.value.length) == filterReverse)
      return true;
    return false;
  }
}
