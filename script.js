const items = [
    {
        id:0,
        nome:'Manto Dois',
        img:'IMG/camisaFla-branca.png',
        quantidade: 0,
    },

    {
        id:1,
        nome:'Manto Um',
        img:'IMG/camisaFla-vermelha.png',
        quantidade: 0,
    },

    {
        id:2,
        nome:'Short Treino preto',
        img:'IMG/shortFla-preto.png',
        quantidade: 0,
    },

    {
        id:3,
        nome:'Copo Témico',
        img:'IMG/copoFla-azul.png',
        quantidade: 0,
    },

    {
        id:4,
        nome:'Chinelo Infantil',
        img:'IMG/chineloFla.png',
        quantidade: 0,
    },
    {
        id:5,
        nome:'Chaveiro da logo',
        img:'IMG/chaveiroFla.jpg',
        quantidade: 0,
    },
]

inicializarLoja = () => {
    var parteProdutos = document.getElementById('produtos');
    for(let i = 0; i < items.length; i++){
        console.log(items[i].nome);
        
        parteProdutos.innerHTML += /*concatenar importante*/ ` 
        <div class="produto-apenas">
            <img src ="`+items[i].img+`"></img>
            <p>`+items[i].nome+`</p>
            <a keys="`+items[i].id+`" href="#">Adicionar ao carrinho</a>
        </div>
        `;
    }
  
}
inicializarLoja() //chamando a função