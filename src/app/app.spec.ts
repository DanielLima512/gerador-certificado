// TestBed permite configurar um ambiente isolado para testar componentes Angular.
import { TestBed } from '@angular/core/testing';
// Importa o componente que será instanciado nos testes.
import { App } from './app';

// Agrupa todos os testes relacionados ao componente principal App.
describe('App', () => {
  // Antes de cada teste, prepara o módulo de teste usado pelo Angular.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Inclui o componente standalone diretamente na configuração de teste.
      imports: [App],
    })
      // Compila o template e os estilos antes da execução do teste.
      .compileComponents();
  });

  // Verifica se o Angular consegue criar uma instância válida do componente.
  it('should create the app', () => {
    // Cria uma representação do componente dentro do ambiente de teste.
    const fixture = TestBed.createComponent(App);
    // Obtém a instância real da classe App associada ao componente criado.
    const app = fixture.componentInstance;
    // Confirma que o objeto foi criado e não é nulo ou indefinido.
    expect(app).toBeTruthy();
  });

  // Verifica se um elemento de título específico aparece no HTML renderizado.
  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    // Aguarda operações assíncronas pendentes e estabiliza a renderização.
    await fixture.whenStable();
    // Converte o elemento renderizado em HTMLElement para consultar seu DOM.
    const compiled = fixture.nativeElement as HTMLElement;
    // Procura um h1 e verifica se seu texto contém o título esperado.
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, gerador-certificado');
  });
});
