import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {Recibo} from '../../../models/recibo';
import {ReciboServiceMock} from '../../../services/recibo-service-mock';

@Component({
  selector: 'app-recibo-list',
  standalone: false,
  templateUrl: './recibo-list.html',
  styleUrl: './recibo-list.css'
})
export class ReciboList {

  recibos: Recibo[] = [];

  constructor(private reciboServiceMock: ReciboServiceMock,
              private router: Router) {
  }

  ngOnInit() {
    this.reciboServiceMock.getAll().subscribe(recibos => {
      this.recibos = recibos;
    });
  }

  onEditar(id: number) {
    void this.router.navigate(['/recibos/edit', id]);
  }

  onEliminar(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Eliminar recibo #${id}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'btn btn-danger',
        cancelButton: 'btn btn-secondary'
      },
    }).then(result => {
      if (result.isConfirmed) {
        console.log('Eliminar recibo:', id);
      }
    });
  }

}
