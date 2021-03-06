import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model'
import { OfertasService } from '../shared/ofertas.service'

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas!: Oferta[]

  teste: string = 'oi tudo bom'

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
    .then(( ofertas: any) => {
      this.ofertas = ofertas
    })

    }

  }

