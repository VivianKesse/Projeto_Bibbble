### Opa, projeto pronto

Comecei instalando o yarn porque prefiro mesmo, iniciei o app react com typescript utilizando o Vite, pois é mais rápido e é um bom hábito se adaptar a usar ele. Aliás, com um comando só posso baixar o Vite, react-ts e o sass.

Optei por utilizar o sass em vez de CSS, me adaptei a isso no último projeto. Geralmente ajuda na organização de projetos mais robustos e a se localizar melhor no código. Geralmente crio variáveis para as cores do style global e outras coisas que ajudam, mas esse é um projeto simples, então usei mais por hábito e para mostrar como faço geralmente :)

Para requisitar a API, utilizei a biblioteca Axios. É a única que realmente tenho experiência e a que pareceu mais simples nas minhas pesquisas. Álias, notei que minha frustração na última tentativa valeu a pena, foi muito mais fácil direcionar as pesquisas e fazer a requisição.

Comecei criando um arquivo db.json para colocar os dados da API e graças ao divino Prettier, um ctrl+s organizou tudo!
Coloquei a API na porta

criei db.json para colcar os dados da api e coloquei ela na porta http://localhost:5000/
Para acessar, entro na pasta API e digito yarn start.

Como estou utilizando TypeScript precisei tipar os dados da API. O arquivo com a tipagem está na pasta "interfaces" e eu utilizei um site que recebe o texto com formato JSON e transcreve ele tipado. Aqui o link: http://json2ts.com/
Também possuo uma extensão do VS code chamada "JSON to TS" que faz isso, mas esqueci na hora :3

Eu retirei isso aqui da API porque estava dando erro e notei que não prejudicou o projeto, guardei aqui caso fosse necessário:
"status": "OK",
"code": 200,
"total": 10,

Achei um vídeo mostrando como fazer a requisição com TypeScript, mas ele deixou o código bem complexo e eu só entendia metade do que fiz, optei por apagar os hooks e tudo mais e tentar simplificar ao máximo, queria entregar algo que eu saberia como explicar e entenderia. Fui improvisando e deu certo (fiquei surpresa). No fim, chamei uma amiga para ter certeza (porque realmente estava surpresa), ela me deu a dica de usar um "return" em vez de "map" pra fazer os dados aparecerem na tela, de fato. Eu só vi usarem o map até hoje, então amei fazer assim. Estou contando isso aqui porque foi a única ajuda externa que utilizei além das minhas pesquisas, mas é algo importante, eu acho.

No modelo tem 16 cards e na API tinham 10 ID's, então achei que era mais facil repetir 6 deles só para ter 16 cards aparecerem na tela.

Bem, tentei formatar a data e tornar o menu e o footer responsivos. Queria fazer algo bem mais bonito e interativo mas não consegui. Eu comentei algumas tentativas no código e não apaguei todas, então não se assustem com algumas delas por aí haha.

Bem, é isso. Decidi parar por aqui mesmo tendo mais tempo porque tem coisas que realmente não consegui deixar como queria. Posso aprender mas preferi mostrar capricho no que já conheço (se eu for contratada, posso aprender mais com vocês, hehe ;) )

Até!
