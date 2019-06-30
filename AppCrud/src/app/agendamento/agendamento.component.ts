import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  public agendamento: any = {};
  public create: boolean;
  public msg: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  addProduct(agendamento) {
    let localArrayProducts = [];
    // Create id
    agendamento.id = Date.now();
    // Get Products on localstorage
    const localStringProducts = localStorage.getItem('ls-agendamento');
    const list = JSON.parse(localStringProducts);
    if ( list && list.length > 0 ) {
      localArrayProducts = list;
    }
    // Add Product on Array
    localArrayProducts.push(agendamento);
    // Add Product on localstorage
    const listaToString = JSON.stringify(localArrayProducts);
    localStorage.setItem('ls-agendamento', listaToString);
    this._alertMessage(false, 'Pedido realizado, entraremos em contato.');
  }

  updateProduct(agendamento) {
    // Get Products on localstorage
    const localStringProducts = localStorage.getItem('ls-agendamento');
    const localArrayProducts = JSON.parse(localStringProducts);
    // Update list product
    localArrayProducts.map(item => {
      if (item.id === agendamento.id) {
        item = agendamento;
      }
    });
    // Update Product on localstorage
    const listaToString = JSON.stringify(localArrayProducts);
    localStorage.setItem('ls-agendamento', listaToString);
    this._alertMessage(false, 'Updated product.');
  }


  _alertMessage(isError, message) {
    if (isError) {
      this.msg = { error: true, message };
    } else {
      this.msg = { error: false, message };
    }
    // It's going to close in 3s.
    setTimeout(() => {
      // Clear message
      this.msg = {};
      if (isError === false) {
        // It's ok! redirect to products
        this.router.navigate(['/', 'orcamento']);
      }
    }, 3000);
  }
  _checkIfExistProduct(form) {
    // Get products localstorage
    const localStringProducts = localStorage.getItem('ls-agendamento');
    // Convert in Array Object
    const localArrayProducts = JSON.parse(localStringProducts);
    // Filter and check if product exist
    if (localArrayProducts) {
      const listFilter = localArrayProducts.filter(item => {
        if (item.product === form.product || item.sku === form.sku || item.id === form.id ) {
          return true;
        }
      });
      // Check if product return in filter
      if (listFilter.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  _findProductLocalStorage(id) {
    const localStringProducts = localStorage.getItem('ls-agendamento');
    const localArrayProducts = JSON.parse(localStringProducts);
    const getProduct = localArrayProducts.filter(item => {
      if (item.id === id) {
        return true;
      }
    });
    if (getProduct.length > 0) {
      return getProduct[0];
    } else {
      return null;
    }
  }

  onSubmit(form: NgForm) {
    const { id, agendamento } = form.value;

    // Force value false if value === ''
    if (form.value.active === '') {
      form.value.active = false;
    }

    // CHECK PRODUCT
    const check = this._checkIfExistProduct(form.value);

    // UPDATE
    if (this.create === false || id || this.agendamento ) {
      if (check === true) {
        this.updateProduct(form.value);
      } else {
        // ERROR product not found
        this._alertMessage(true, 'agendamento n existe!');
      }
    } else {
    // CREATE
    if (check === false) {
      this.addProduct(form.value);
      } else {
        // ERROR product really exist
        this._alertMessage(true, 'Agendamento ja existe!');
      }
    }
  }

  ngOnInit() {
    const { id } = this.route.snapshot.params;

    if (id === 'new') {
      this.create = true;
    } else {
      const findProduct = this._findProductLocalStorage( Number(id) );
      // Find product
      if (findProduct) {
        this.agendamento = findProduct;
        this.create = false;
      } else {
      // Redirect if id not exists
      this.router.navigate(['/', 'products', 'new']);
      }
    }
  }
  }
