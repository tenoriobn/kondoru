<!-- A FAZER -->
OK - Desaclopar componentes (Separar Interface, Elementos e lógicas);
OK - Aplicar Hover e Active nos elementos;
OK - Receber os dados do MenuLink com SSG, SSR ou ISR.
OK - Remover Scroll com Menu Mobile Aberto
OK - Receber restante dos dados relacionado ao Header via SSG
OK - Adicionar CI/CD no FRONT-USER 
OK - Verificar Lint do código antes de fazer merge para main e deploy
OK - NÃO PERMITIR PUSH DIRETO NO MAIN
OK - Desenvolver a seção de chamada!!! 
  OK - Dados por SSG no filter
  OK - Tornar Filter responsivo com Mobile First
  OK - Cada Filtro Solto
  OK - Filtro Duplo Unido
  OK - Filtro Completo de uma linha
  OK - Botão No Mobile e Tablet não tem fundo e Mobile ocupa 100% largura
  OK - Lógica para reunir os dados dos select em um objeto
  OK - Ao clicar fora fechar filtro
  OK - Estilos de cor `Hover, Opção Selecionada`
  OK - Estabelecer um limite de texto, no limite (adicionar reticências...) ou só cortar
  OK - Adicioar um pop-up padrão que mostra o que está escrito.

  * Corrigir fundo do Header e fundo do Menu Mobile


  * Desenvolver Modals (LOGIN/Registro);
      OK - ADICIONAR ICONE NOS INPUTS ***
      OK - "Aplicar flex row no "ainda não tem cadastro e cadastre-se" para ficar na mesma linha.***
      OK - BACKGROUND DEVE TER GRADIENTE ***
      OK - Adicionar rolagem para quando Modal não caber na altura disponível da tela
      OK - Refatorar nomeclaturas do componente, bem como reutilização do input e etc.
      OK - Lógica de abrir e fechar modal
      OK - Inputs devem ser obrigatórios
      OK - Fechar modal ao clicar fora dele ***
      OK - Passar conteúdo do formulário por SSG ***
      - Integrar Modal de LOGIN e registro com API
      - ADICIONAR WAVE (ONDAS) NO MODAL DE LOGIN;










      - Refatorar componente `PropertiesCarousel`
        OK - Corrigir line-height dos textos, pois está cortando
        OK - Corrigir versão mobile para que card seja responsivo ocupando toda a tela até `425px`
        OK - Título e subtitulo deve adicionar `...` caso seja maior que o card `(Atualmente só o titulo tem)`
        OK - Criar SSG com informações do card, como imagem, titulo e texto.
        OK - Criar componente para o Card e aplicar o map dentro deles com os dados do SSG
        OK - Utilizar estrutura html semântica no Card
        OK - Corrigir piscada da imagem estourada ao recarregar a página
        OK - Refatorar e reutilizar estilizações em comum

        - AO CLICAR NO CARD, ELE LEVARA PARA UMA PÁGINA DE ACORDO COM O SLUG DO CARD GERANDO AS INFOS 
        DO ANUNCIO EM DESTAQUE (FAZER FUTURAMENTE)
        

      * Refatorar StyledContainer
        OK - Ele deve ser desestruturado em vez de ser feito `styled(StyledContainer)`
        OK - Deve ter outra nomeclatura como `StyledGlobalContainer` ou algo do tipo
        OK - Os paddings gerais de bordas devem ser desestruturados para simplificar



        
      * Criar seção `ElegantShowcase`
        OK - Criar conteúdo textual e adicionar estilização
        - Criar player e adicionar video que está em /public/video
        - Implementar SSG


      * Criar seção `TestimonialCarousel`
        OK - Reutilizar Carousel do `PropertiesCarousel`
        OK - Criar conteúdo textual e adicionar estilização
        OK - Implementar SSG
        - Reutilizar estilos do `PropertiesCard`
        - AO CLICAR NO CARD, ELE LEVARA PARA A PÁGINA DO USUÁRIO QUE FEZ O COMENTÁRIO (FAZER FUTURAMENTE)

      * Criar `Footer`
        OK - Adicionar elementos do footer
        OK - adicionar input e social midia
        OK - adicionar mensagem de direitos
        - disponibilizar dados por ssg se necessário
        - O email cadastrado no final da página, será enviado para uma plataforma de marketing de email
      que ficara responsável por automatizar o envio de artigos criados pelo dono do site.


      * Conferir se devo utilizar SSG em cada componente ou Centralizado na index.tsx

      * Integrar API de CADASTRO E LOGIN

      * Refatorar arquitetura das INTERFACES de Tipagem
      * Refatorar arquitetura das `Data` do `HomePage` (Não há necessidade de uma pasta pra cada data)
      * Refatorar arquitetura da `index.tsx` criar uma `screen` da `HomePage` e importar na `index.tsx`
      * Criar possível forma de reutilização do estilo da `StyledMainContainer`.


      * Adicionar verificação de identação e etc...
      * Centralizar Titulos (h1,h2,h3,h4...) em um único componente que lida com isso
      * Focar na estrutura do projeto, buscando uma melhor organização e utilização de componentes
      * Acompanhar Performance e realizar correções necessárias