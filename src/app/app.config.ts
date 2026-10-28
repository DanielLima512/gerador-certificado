// ApplicationConfig define o formato da configuração global da aplicação Angular.
// O segundo recurso registra os erros globais que possam ocorrer no navegador.
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
// Habilita o sistema de rotas fornecido pelo Angular.
import { provideRouter } from '@angular/router';
// Importa a lista de páginas ou caminhos configurados no arquivo de rotas.
import { routes } from './app.routes';

// Objeto compartilhado pela inicialização da aplicação para registrar recursos globais.
export const appConfig: ApplicationConfig = {
  providers: [
    // Escuta e encaminha erros JavaScript globais para o mecanismo do Angular.
    provideBrowserGlobalErrorListeners(),
    // Ativa o roteamento usando a lista de rotas importada acima.
    provideRouter(routes)
  ]
};
