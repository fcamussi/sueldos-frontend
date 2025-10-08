import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recibo} from '../../../models/recibo';

@Component({
  selector: '[app-recibo-row]',
  standalone: false,
  templateUrl: './recibo-row.html',
  styleUrl: './recibo-row.css'
})
export class ReciboRow {

  @Input() recibo!: Recibo;
  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  calcularMontoTotal(): number {
    return 0;
  }

}
