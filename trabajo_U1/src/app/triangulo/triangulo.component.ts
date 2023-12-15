import { Component, OnInit } from '@angular/core';
import { Triangulo } from '../FiguraGeometrica/Figuras';
import { IonButton, IonInput, IonItem, IonList, IonContent, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/angular/standalone';


@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonButton, IonList, IonItem, IonInput, FormsModule, IonContent, IonCard, 
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg],
})
export class TrianguloComponent  implements OnInit {
  trianguloA: string = "";
  trianguloB:string="";
  trianguloC:string="";
  perimetro = 0;
  resultado: string = "";

  constructor() { }

  calcularPerimetro() {
    const trianA  = parseFloat(this.trianguloA) 
    const trianB  = parseFloat(this.trianguloB) 
    const trianC  = parseFloat(this.trianguloC) 
    const Figuras = new Triangulo("triangulo",trianA,trianB,trianC)
    const perimetro = Figuras.calcularPerimetro() 
    this.resultado = `El perímetro es ${perimetro}`
  }

  areaValida() {
    return !isNaN(this.perimetro) 
  }

  ngOnInit() {}

}
