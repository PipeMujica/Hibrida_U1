import { Component, OnInit } from '@angular/core';
import { Circulo } from '../FiguraGeometrica/Figuras';
import { IonButton, IonInput, IonItem, IonList, IonContent } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonInput, FormsModule, IonContent, IonCard, 
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle],
})

export class CirculoComponent  implements OnInit {
  radio1: string = "";
  perimetro  = 0 
  resultado: string = "";
  constructor() { }

  calcularPerimetro() {
    const Radio  = parseFloat(this.radio1) 
    const Figuras = new Circulo("circulo", Radio)
    const perimetro = Figuras.calcularPerimetro() 
    this.resultado = `El perímetro es ${perimetro} cm`
  }

  areaValida() {
    return !isNaN(this.perimetro) 
  }

  ngOnInit() {}
}
