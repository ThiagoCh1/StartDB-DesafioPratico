# StartDB-DesafioPratico

Projeto feito para avanço no processo seletivo START DB que consiste em desenvolver as regras de um jogo da forca.

Para este desafio, optei por tentar automatizar todas as etapas do jogo, tornando assim possível que o utilizador jogue quantas vezes
quiser sem precisar mudar nada no código, porém não foi possivel automatizar por completo pelas regras de validação estipuladas, sendo 
assim necessário a mudança manual da palavra secreta toda vez que for jogado.

O tamanho inicial da palavra também teve que ser por padrão 7 símbolos "_" referente ao tamanho da palavra secreta de exemplo "abacaxi", mas independente da palavra secreta utilizada, existe um metodo dentro da função chute() que reconfigura o tamanho de acordo com o constructor da classe.

Também foi utilizado uma função onde checa se a letra escrita pelo utilizador é realmente uma letra ou uma palavra ao checar se o tamanho da string é maior que 1, e uma função que verifica se a letra é um caractere do alfabeto ou algum outro caractere.
