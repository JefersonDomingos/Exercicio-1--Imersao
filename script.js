
        const itens = [
            {
                id: 0,
                nome: 'camisa fora',
                img:'IMG/camisaFla-branca.png',
                quantidade:0
            },
            
            {
                id: 1,
                nome:'camisa casa',
                img:'IMG/camisaFla-vermelha.png',
                quantidade:0
            },

            {
                id: 2,
                nome: 'carteira',
                img: 'IMG/carteiraFla.png',
                quantidade:0
            },

            {
                id: 3,
                nome: 'boné',
                img: 'IMG/boneFla.png',
                quantidade:0
            },

            {
                id: 4,
                nome: 'chaveiro',
                img: 'IMG/chaveiroFla.jpg',
                quantidade:0
            },

            {
                id: 5,
                nome: 'chinelo',
                img: 'IMG/chineloFla.png',
                quantidade:0
            },

            {
                id: 6,
                nome: 'copo térmico azul',
                img: 'IMG/copoFla-azul.png',
                quantidade:0
            },

            {
                id: 7,
                nome: 'copo térmico branco',
                img: 'IMG/copoFla-branco.png',
                quantidade:0
            },

            {
                id: 8,
                nome: 'relógio',
                img: 'IMG/relogioFla.png',
                quantidade:0
            },

            {
                id: 9,
                nome: 'short',
                img: 'IMG/shortFla-preto.png',
                quantidade:0
            }

        ]

        inicializarLoja = () => {
            var containerProdutos = document.getElementById('produtos');
            itens.map((val)=>{  //map é parecido com o for
                containerProdutos.innerHTML+= `
                <div class="produto-single">
                    <img src="`+val.img+`" />
                    <p>`+val.nome+`</p>
                    <a key="`+val.id+`"href="javascript:void(0)">Adicionar ao Carrinho!<a/>
                </div>
                `;
            })  //mudei o href nos links para não atualizar a pagina href="javascript:void(0)"
        }

        inicializarLoja();

        atualizarCarrinho = () =>{
            var containerCarrinho = document.getElementById('carrinho');
            containerCarrinho.innerHTML = "";
            itens.map((val)=>{ //map é parecido com o for
                if(val.quantidade > 0){
                containerCarrinho.innerHTML+= `
                <div class="info-checkout">
               <p style="float:left;">Produto: `+val.nome+`</p>
               <p style="float:right;">Quantidade: `+val.quantidade+`</p>
               <div style="clear:both"></div>
            
               </div>
               
                `;
                 }
            })
        }

        var links = document.getElementsByTagName('a');
        for (var i = 0; i< links.length; i++){
            links[i].addEventListener("click",function(){
                let key =  this.getAttribute('key');
                itens[key].quantidade++;
                atualizarCarrinho();
                return false;
            })  
        }

