import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RangeCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dias = 0 ;
  tempo = 0;
  res = 0;

  constructor(public router: Router) {}

  onIonChange(ev: RangeCustomEvent){
    this.tempo = parseInt(ev.detail.value.toString());
  }

  abrirTela(){
    this.res = (this.dias * this.tempo)
    this.router.navigateByUrl
    (`/tela-confirmar/${this.dias}/${this.tempo}/${this.res}`);
  }
}
