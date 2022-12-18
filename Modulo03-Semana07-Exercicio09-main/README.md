## [M3S08] EX9 - Twitter

Bora criar um clone básico do Twitter?

Não deverá criar tags HTML na mão;
Toda tag HTML deverá ser criada via JavaScript;
Não deverá contar estilo CSS importado ou inline, todo estilo deverá ser manipulado via JavaScript;

O desafio deverá conter obrigatoriamente: um formulário, um campo de texto (textarea, é o esperado), um botão de submit do formulário, uma lista com os tweets publicados.

O campo de texto deve aceitar no máximo 280 caracteres;
Acima de 280 caracteres deve ser apresentada uma mensagem de aviso com fundo amarelo e letras pretas com o texto "Você excedeu o limite de caracteres", o campo de texto deverá ficar com a borda vermelha, o botão de publicar deve ficar com a propriedade disabled;
Abaixo de 280 caracteres o aviso deve sumir, a borda vermelha do campo de texto deve sumir e o botão ficar habilitado novamente;

Quando todos os requisitos estiverem contemplados e clicar em publicar, o tweet informado na caixa de texto deverá aparecer na listagem abaixo da caixa de publicação. O campo de texto deverá ser limpo programaticamente via JS.

A listagem pode aparecer um tweet abaixo do outro, porém, um desafio extra é aplicar o conhecimento de Grids do curso de HTML/CSS para dispor os tweets em Grid.

A ordem em que os tweets deverão aparecer deverá respeitar: tweets mais recentes primeiro, tweets mais antigos por último;

O padrão do tweet que aparecerá na listagem deverá ser:
Círculo de avatar com fundo de qualquer cor a escolha e letras iniciais do nome do aluno;
Nome do aluno à frente do avatar;
Uma divisória separando o cabeçalho do tweet do corpo do tweet;
Corpo do tweet com o texto informado pelo aluno;

Extras:
Abaixo do corpo do tweet inserir uma nova divisória e inserir via JS um botão com o texto interno "Curtir (0)", ao clicar no botão curtir o número entre parênteses deverá ser acrescido (somente acrescido, não haverá descurtir): Curtir (1), Curtir (2), Curtir (3)
