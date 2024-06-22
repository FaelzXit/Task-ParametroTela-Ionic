import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tela-confirmar',
  templateUrl: './tela-confirmar.page.html',
  styleUrls: ['./tela-confirmar.page.scss'],
})
export class TelaConfirmarPage implements OnInit {

  dias:any;
  tempo:any;
  res:any;


   constructor(public activatedRoute: ActivatedRoute, private router: Router) { }

   ngOnInit() {
     this.dias = this.activatedRoute.snapshot.paramMap.get('dias');
     this.tempo = this.activatedRoute.snapshot.paramMap.get('tempo');
     this.res = (this.activatedRoute.snapshot.paramMap.get('res'))
   }

   VoltarParaPaginaH() {
    this.router.navigateByUrl('/home');
   }

   ConcluirHospedagem(){
    this.router.navigateByUrl(`tela-proxima/${this.res}`);
   }
  }


