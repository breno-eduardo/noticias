import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-noticia',
  templateUrl: './cadastrar-noticia.page.html',
  styleUrls: ['./cadastrar-noticia.page.scss'],
})
export class CadastrarNoticiaPage implements OnInit {

  titulo : string;
  descricao : string;

  constructor(private nav : NavController) { }

  ngOnInit() {
  }

  enviar() {
    console.log(this.titulo);
    console.log(this.descricao);

  
  }
}
