class Forca 
{
  constructor(palavraSecreta)
  {
       this.palavraSecreta = palavraSecreta;
  }
  primeiraJogada = true;
  letrasChutadas = [];
  vidas = 6;
  palavra = ['_','_','_','_','_','_','_'];
  charEhLetra(char)  // Verifica se o caractere é letra
  {
    if (typeof char !== 'string') {
      return false;
    }
  
    return char.toLowerCase() !== char.toUpperCase();
  }
  ehChar(letra)  // verifica se é uma palavra ou letra
  {
    if (letra.length === 1)
    {
      if(this.charEhLetra(letra))
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      return false;
    }
  }
  letraJaJogada(letra,letrasChutadas) 
  {
    for(let i = 0; i < letrasChutadas.length; ++i)
    {
      if(letra === letrasChutadas[i])
      {
        return true;
      }
    }
    return false;
  }
  chutar(letra) 
  {
    
    let letraErrada = true;
    if(this.primeiraJogada) // Cria os "_" de acordo com o tamanho da palavra secreta apenas uma vez por jogo.
    {
      for(let i = 0; i < this.palavraSecreta.length; ++i)
      {
        this.palavra[i] = '_';
        
      }
      this.primeiraJogada = false;
    } 
    if (this.ehChar(letra))
    {
      letra = letra.toLowerCase();
      if(this.letraJaJogada(letra,this.letrasChutadas))
      {}
      else
      {
        this.letrasChutadas.push(letra);
        for(let i = 0; i < this.palavraSecreta.length;++i)
        {
          if(this.palavraSecreta[i] === letra)
          {
            this.palavra[i] = letra;
            letraErrada = false;
          }
        }
        if(letraErrada)
        {
          --this.vidas;
        }

      } 
    }
  }

  buscarEstado() 
  {
    
    if(this.vidas === 0)
    {
      return "perdeu";
    }
    else if(this.palavraSecreta === this.palavra.join(""))
    {
     return "ganhou";
    }
    else
    {
      return "aguardando chute";
    } 
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          
          letrasChutadas:this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.palavra} // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas

  }
  
}
module.exports = Forca;
