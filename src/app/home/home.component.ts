import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../shared/ofertas.service'
import { Oferta } from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   ofertas: any = [];
     
  constructor(private ofertasService: OfertasService) { }

  // async ngOnInit() {
  //   this.ofertas = await this.ofertasService.getOfertas() 

  // }

   ngOnInit() {
    this.ofertasService.getOfertas()
    .then(res => {
      this.ofertas = res
    })
  }

}
