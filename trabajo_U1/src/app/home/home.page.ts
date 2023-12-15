import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import {IonSelectCustomEvent} from '@ionic/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, CommonModule,
    CirculoComponent, TrianguloComponent],
})
export class HomePage {
  tipoFigura:string = ""

  constructor() {}

  esCirculo() { return this.tipoFigura == "circulo" }
  esTriangulo() { return this.tipoFigura == "triangulo" }

  seleccionFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.tipoFigura = $event.detail.value
  }
}
