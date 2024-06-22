import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-proxima',
  templateUrl: './tela-proxima.page.html',
  styleUrls: ['./tela-proxima.page.scss'],
})
export class TelaProximaPage implements OnInit {

  res : any | undefined

  constructor(public ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.res = (this.ActivatedRoute.snapshot.paramMap.get('res'))

  }

  VoltarParaInicio() {
    this.router.navigate(['/home']);
}
}
