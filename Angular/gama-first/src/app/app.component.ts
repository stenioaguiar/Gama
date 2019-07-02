import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Stenio';
  items = ['0', '4', '9', 'compra', '14', 'lua', '74'];
  

  ngOnInit() {

    setTimeout(() => {
      this.title = 'Aguiar';
    },2000);

  }

  novoItem () {
    const text = prompt('Digite um nome');

    this.items.push(text);
  }

  

}
