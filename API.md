## o que e uma API?

API, sigla da expressão inglesa Application Programming Interface (em português Interface de Programação de Aplicativos), nada mais é do que um conjunto de regras e protocolos que permite que diferentes sistemas interajam e se comuniquem entre si, de maneira padronizada.

Essa interface desempenha um papel muito importante na integração de softwares e na troca de dados em diferentes aplicações. Isso acontece porque, essas interfaces fornecem opções que permitem que os desenvolvedores acessem recursos e serviços específicos de um software sem precisar, necessariamente, conhecer todos os detalhes internos de implementação.

Além disso, as APIs são essenciais para a gestão de dados, já que possibilitam que as empresas acessem e manipulem os dados de forma rápida e eficaz para atender diferentes necessidades, como realizar integrações entre sistemas, automatizar processos e obter informações em tempo real. 


### Como as APIs funcionam?

Com as APIs, sua solução ou serviço podem se comunicar com outros produtos e serviços sem precisar saber como eles foram implementados. Isso simplifica o desenvolvimento de aplicações, gerando economia de tempo e dinheiro. Na hora de desenvolver suas novas ferramentas e soluções (ou ao gerenciar aquelas já existentes), as APIs oferecem a flexibilidade necessária para simplificar o design, a administração e o uso, além de trazer oportunidades de inovação.

As APIs funcionam como se fossem contratos, com documentações que representam um acordo entre as partes interessadas. Se uma dessas partes enviar uma solicitação remota estruturada de uma forma específica, isso determinará como a aplicação da outra parte responderá.

### Como as APIs funcionam na prática? 
Basicamente, as APIs funcionam como um tipo de ponte que permite a comunicação entre diferentes sistemas. Na prática, uma das partes solicita as informações que deseja receber e a interface realiza esse processamento, solicitando os dados de acordo com as regras e funcionalidades que ela disponibiliza.

Após esse processamento, a API retorna com as informações solicitadas pelo contador, por exemplo. Geralmente, essa resposta é enviada em formato estruturado para facilitar a leitura no software. 

Entre os principais exemplos de como as APIs funcionam podemos citar: 

Redes sociais: as APIs de redes sociais permitem que os desenvolvedores criem aplicativos que interajam com outras plataformas. Por exemplo, um aplicativo pode utilizar a API do Facebook para fazer login, postar mensagens ou obter informações do perfil de um usuário.

Pagamento online: neste caso, as APIs permitem que lojas virtuais aceitem pagamentos em seus sites ou aplicativos. Assim, é possível realizar transações financeiras de forma segura e eficiente, totalmente online.

Serviços de localização: APIs como a do Google Maps, por exemplo, possibilitam que os desenvolvedores incorporem mapas e informações de localização em seus aplicativos. Permitindo a criação de mapas, a busca de endereços e de rotas.
Vale destacar que as partes podem utilizar os dados obtidos pela API conforme suas necessidades. Isso vale tanto para a exibição dos dados em uma interface gráfica, processamento dos dados para realizar alguma ação específica ou até mesmo o envio de novas requisições para a interface.

---




## o que uma requisicão?

A interface Request  representa uma requisição de recursos.

Você pode criar um novo objeto Request usando o construtor Request.Request(), porém é mais provável que você encontre um objeto Request que seja retornado como resultado de outra operação de API, como um service worker

---


## o que são funçoes assincronas?

As funções síncronas e assíncronas fazem parte do dia a dia de um programador, e vamos entender com um pouco mais de profundidade a diferença entre elas, e quando utilizar cada tipo de função. Quando falamos em funções síncronas, falamos daquelas que ao executar um código, o resultado é retornado assim que o navegador puder. 

Já as assíncronas são aquelas que acessam ou buscam algum tipo de recurso em um dispositivo externo, como por exemplo um banco de dados, nesse tipo de função precisamos que nosso código espere que a resposta esteja disponível antes de executar a ação seguinte.

---


## o que e fetch?

O Fetch API é uma interface JavaScript moderna para fazer requisições HTTP/HTTPS de forma assíncrona. Essa API permite que os desenvolvedores criem aplicações web mais interativas e dinâmicas, oferecendo uma maneira mais intuitiva e fácil de realizar chamadas de rede.

Antes do surgimento do Fetch API, os desenvolvedores costumavam usar a XMLHttpRequest (XHR) para fazer requisições AJAX (Asynchronous JavaScript and XML), que permitiam carregar dados do servidor em segundo plano sem atualizar a página. No entanto, a XHR tinha algumas limitações, como a falta de suporte nativo para promessas e a necessidade de manipular manualmente o estado de carregamento da requisição.

A Fetch API resolve esses problemas oferecendo uma API mais simples e limpa para fazer requisições assíncronas. Além disso, a Fetch API fornece suporte para promessas, o que significa que os desenvolvedores podem usar o método then() para manipular a resposta da requisição e o método catch() para lidar com erros.

A API Fetch oferece uma variedade de métodos para personalizar uma requisição, como headers personalizados, tipos de dados, autenticação, entre outros. Por exemplo, um desenvolvedor pode usar o método fetch() para solicitar um arquivo JSON do servidor e, em seguida, usar o método then() para manipular os dados recebidos.

Assim que a requisição é concluída, a resposta é convertida em um objeto JavaScript usando o método json(), o que permite que os dados sejam manipulados no código da aplicação. Por fim, os dados são exibidos no console, permitindo que o desenvolvedor possa analisar a resposta da requisição e utilizar as informações obtidas em sua aplicação.

A Fetch API também permite que os desenvolvedores usem diferentes tipos de requisições HTTP, como GET, POST, PUT e DELETE. Além disso, a API oferece suporte a CORS (Cross-Origin Resource Sharing), o que significa que os desenvolvedores podem fazer solicitações entre domínios diferentes com segurança.


---


## o que promice?


O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante.

Para saber como as promises funcionam e como você pode usá-las, recomendamos que você leia Usando promises primeiro.

Uma Promise é um proxy para um valor não necessariamente conhecido quando a promise é criada. Ele permite que você associe manipuladores ao valor de sucesso ou motivo de falha de uma ação assíncrona. Isso permite que métodos assíncronos retornem valores como métodos síncronos: em vez de retornar imediatamente o valor final, o método assíncrono retorna uma promise para fornecer o valor em algum momento no futuro.


Uma Promise está em um destes estados:

pending: estado inicial, nem cumprido nem rejeitado.

fulfilled: significa que a operação foi concluída com sucesso.

rejected: significa que a operação falhou.

O estado eventual de uma promise pendente pode ser fulfilled com um valor ou rejected com um motivo (erro). Quando uma dessas opções ocorre, os manipuladores associados enfileirados pelo método then de uma promise são chamados. Se a promise já tiver sido cumprida ou rejeitada quando um manipulador correspondente for anexado, o manipulador será chamado, portanto, não há condição de corrida entre a conclusão de uma operação assíncrona e a anexação de seus manipuladores.

Você também ouvirá o termo resolved usado com promises — isso significa que a promise é liquidada ou "bloqueada" para corresponder ao estado eventual de outra promise e resolvê-la ou rejeitá-la não tem efeito. O documento Estados e destinos da proposta original da Promise contém mais detalhes sobre a terminologia da promise. Coloquialmente, promises "resolvidas" geralmente são equivalentes a promises "cumpridas", mas, conforme ilustrado em "Estados e destinos", as promises resolvidas também podem estar pendentes ou rejeitadas.

### Promises em cadeia
Os métodos Promise.prototype.then(), Promise.prototype.catch() e Promise.prototype.finally() são usados para associar uma ação adicional com uma promise que se torna liquidada. Como Promise.prototype.then() e Promise.prototype.catch() métodos retornam promises, eles podem ser encadeados.

O método .then() aceita até dois argumentos; o primeiro argumento é uma função de retorno de chamada para o caso cumprido da promise e o segundo argumento é uma função de retorno de chamada para o caso rejeitado. Cada .then() retorna um objeto de promise recém-gerado, que pode ser usado opcionalmente para encadeamento

### Thenables
O ecossistema JavaScript fez várias implementações do Promise muito antes de se tornar parte da linguagem. Apesar de serem representados de forma diferente internamente, no mínimo, todos os objetos do tipo Promise implementam a interface Thenable. Um thenable implementa o método .then(), que é chamado com dois retornos de chamada: um para quando a promise é cumprida, um para quando for rejeitado. Promises também são possíveis.

Para interoperar com as implementações de Promise existentes, a linguagem permite o uso de thenables no lugar de promises. Por exemplo, Promise.resolve não apenas resolverá as promises, mas também rastreará os entãoables

### Rastreamento de objetos de configurações incumbentes
Um objeto de configurações é um ambiente que fornece informações adicionais quando o código JavaScript está em execução. Isso inclui o mapa do domínio e do módulo, bem como informações específicas do HTML, como a origem. O objeto de configurações incumbente é rastreado para garantir que o navegador saibas qual usar para um determinado pedaço de código de usuário.

Para melhor visualizar isso, podemos dar uma olhada mais de perto em como o reino pode ser um problema. Um reino pode ser pensado aproximadamente como o objeto global. O que é único sobre os realms é que eles contêm todas as informações necessárias para executar o código JavaScript. Isso inclui objetos como Array e Error. Cada objeto de configurações tem sua própria "cópia" e não são compartilhados. Isso pode causar algum comportamento inesperado em relação às promises. Para contornar isso, rastreamos algo chamado objeto de configurações incumbentes. Isso representa informações específicas do contexto do código do usuário responsável por uma determinada chamada de função.

Para ilustrar isso um pouco mais, podemos dar uma olhada em como um < iframe > embutido em um documento se comunica com seu host. Como todas as APIs da Web estão cientes do objeto de configurações incumbente, o seguinte funcionará em todos os navegadores: