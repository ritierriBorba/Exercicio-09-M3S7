let tweet = {
    userName: '',
    conteudo: ''
}

// let user = prompt('Digite seu Nome: ');
let userFormatted = (user) => {
    let splittedUser = user.split(' ');
    let firstName = splittedUser[0][0];
    let lastName = splittedUser[splittedUser.length - 1][0];
    return `${firstName}${lastName}`;
}

const tweets = JSON.parse(localStorage.getItem('tts')) || [];

// --------Declaração de tags HTMLs--------
const body = document.querySelector(`body`);
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.gap = '20px';
body.style.flexDirection = 'column';

// Area de texto
const textArea = document.createElement('textarea');
textArea.setAttribute('rows', 5);
textArea.setAttribute('cols', 50);
textArea.placeholder = 'Seu tweet aqui...';

// Botao de postar o "tweet"
const btnPostar = document.createElement('input');
btnPostar.setAttribute('type', 'submit');
btnPostar.addEventListener('click', () => {
    let tweet = {
        userName: 'VM',
        conteudo: ''
    }

    tweet.conteudo = textArea.value;
    postarTweet(tweet);
    console.log(tweets)
    tweets.push(tweet);
    salvarTweets();
    textArea.value = '';
})

// Lista de tweets
const lista = document.createElement('ul');
lista.style.display = 'flex'; // Trocar para Grid.
lista.style.flexDirection = 'column';
lista.style.gap = '15px';
lista.style.alignItems = 'center';
lista.style.justifyContent = 'center';

// Mensagem de erro
const errorMessage = document.createElement('span');
errorMessage.innerHTML = 'Você passou do limite de caracteres.';
errorMessage.style.backgroundColor = '#F9D46A';
errorMessage.style.padding = '5px';
errorMessage.style.display = 'none';

// Valida o tamanho do conteudo da Area de Texto e se for maior que o permitido, exibe erro.
textArea.addEventListener('keyup', () => {
    if (textArea.value.length >= 280) {
        errorMessage.style.display = 'inherit';
        btnPostar.disabled = true;
        textArea.style.border = '5px solid red';
    } else {
        errorMessage.style.display = 'none';
        btnPostar.disabled = false;
        textArea.style.border = '.1px solid rgb(118, 118, 118)';
    }
})

// Testa o tamanho da lista de "tweets" e se for maior que 0, adiciona os Tweets a tela.
if (tweets.length > 0) {
    console.log('entrou')
    tweets.forEach(element => {
        postarTweet(element);
    });
}

// Adiciona a Area de texto, o Botao e a Lista ao Body
body.append(textArea, btnPostar, errorMessage, lista);

// --------Funções--------

// Adiciona um "tweet" na tela
function postarTweet(tweet) {
    // Item da lista
    const itemLista = document.createElement('li');
    itemLista.style.display = 'flex';
    itemLista.style.flexDirection = 'row';
    itemLista.style.alignItems = 'center';
    itemLista.style.justifyContent = 'center';
    itemLista.style.padding = '15px'
    itemLista.style.width = 'fit-content';
    itemLista.style.maxWidth = '400px';
    itemLista.style.height = 'fit-content';
    itemLista.style.gap = '5px';
    itemLista.style.backgroundColor = '#CECECE'

    // Avatar do tweet
    let avatarTweet = document.createElement('span');
    avatarTweet.style.display = 'flex'; // Trocar pra Grid.
    avatarTweet.style.alignItems = 'center';
    avatarTweet.style.justifyContent = 'center';
    avatarTweet.style.padding = '15px';
    avatarTweet.style.height = '15px';
    avatarTweet.style.width = '15px';
    avatarTweet.style.borderRadius = '800px';
    avatarTweet.style.border = '.3px solid black';
    avatarTweet.style.backgroundColor = '#09D8F1';
    avatarTweet.style.color = 'white';
    avatarTweet.innerHTML = 'VM';

    // Conteudo do tweet
    let conteudoTweet = document.createElement('span');
    conteudoTweet.innerHTML = tweet.conteudo;
    conteudoTweet.style.overflowWrap = 'break-word';
    conteudoTweet.style.wordBreak = 'break-word'

    // Adiciona ao item da lista
    itemLista.append(avatarTweet, conteudoTweet);

    // Adiciona o Item da Lista a Lista
    lista.prepend(itemLista);
}

function salvarTweets() {
    localStorage.setItem('tts', JSON.stringify(tweets));
}
