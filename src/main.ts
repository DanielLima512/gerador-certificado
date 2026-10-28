// Permite inicializar uma aplicação Angular que usa componentes independentes (standalone).
import { bootstrapApplication } from '@angular/platform-browser';
// Importa a configuração geral da aplicação, como serviços e rotas disponíveis.
import { appConfig } from './app/app.config';
// Importa o componente principal que será exibido pela aplicação.
import { App } from './app/app';

// Inicializa o componente App dentro da página e fornece a configuração global.
// Caso a inicialização falhe, registra o erro no console do navegador.
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
