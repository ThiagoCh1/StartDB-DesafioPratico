# StartDB-DesafioPratico

Projeto feito para avanço no processo seletivo START DB que consiste em desenvolver as regras de um jogo da forca.

Para este desafio, optei por tentar automatizar todas as etapas do jogo, tornando assim possivel que o utilizador jogue quantas vezes
quiser sem precisar mudar nada no código, porém não foi possivel automatizar por completo pelas regras de validação estipuladas, sendo 
assim necessario a mudança manual da palavra secreta toda vez que for jogada.

O tamanho inicial da palavra também teve que ser por padrão 7 "_" referente ao tamanho da palavra secreta de exemplo "abacaxi", mas independente da palavra secreta utilizada, existe um metodo dentro da função chute() que reconfigura o tamanho de acordo com o constructor da classe.
