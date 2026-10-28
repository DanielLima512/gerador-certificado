// Importa o mecanismo de componentes do Angular.
import { Component } from '@angular/core';
// Importa o componente da barra de navegação criada dentro da aplicação.
import { Navbar } from './_components/navbar/navbar';
import { Button } from './button/button';
import { SencondaryButtom } from './_components/sencondary-buttom/sencondary-buttom';

// @Component transforma esta classe em um componente Angular reutilizável.
@Component({
  // Define a tag HTML que representa este componente no HTML da aplicação.
  selector: 'app-root',
  // Lista os componentes independentes que podem ser usados pelo template.
  imports: [Navbar, Button, SencondaryButtom],
  // Informa qual arquivo HTML contém a estrutura visual deste componente.
  templateUrl: './app.html',
  // Informa qual arquivo CSS possui os estilos exclusivos deste componente.
  styleUrl: './app.css',
})
export class App {
  // Controla, por enquanto, se a barra de navegação deve ser exibida.
  // O valor true indica que a funcionalidade está habilitada.
  exibeNavBar: boolean = true;
}
