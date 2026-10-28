// Component permite criar componentes e OnInit oferece o momento de inicialização deles.
import { Component, OnInit } from '@angular/core';

// Transforma esta classe na barra de navegação usada pela aplicação.
@Component({
  // Esta barra não importa outros componentes Angular diretamente.
  imports: [],
  // Define o nome da tag HTML que representa o componente: app-navbar.
  selector: 'app-navbar',
  // Associa ao componente o arquivo de estilos específico da barra.
  styleUrl: './navbar.css',
  // Associa ao componente o arquivo HTML responsável pela sua estrutura.
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  // Executado pelo Angular depois que o componente é criado pela primeira vez.
  ngOnInit(): void {
    // Mensagem útil durante o desenvolvimento para confirmar que o componente iniciou.
    console.log('meu componente navbar inicializou');
  }
}
