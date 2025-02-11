// Classe Personagem
class Personagem {
    constructor(nome, vida, ataque) {
      this.nome = nome;
      this.vida = vida;
      this.ataque = ataque;
    }
  
    atacar(outroPersonagem) {
      console.log(`${this.nome} atacou ${outroPersonagem.nome}`);
      outroPersonagem.vida -= this.ataque;
      console.log(`${outroPersonagem.nome} agora tem ${outroPersonagem.vida} de vida.`);
    }
  }
  
  // Criando personagens
  const Cavalo = new Personagem("Cavalo", 150, 50);
  const mago = new Personagem("Mago", 80, 65);
  
  // Simulando combate
  Cavalo.atacar(mago);
  mago.atacar(Cavalo);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  // Personagem 1
/* const personagem1 = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 20
  };
  
  // Personagem 2
  const personagem2 = {
    nome: "Mago",
    vida: 80,
    ataque: 25
  };
  
  function atacar(atacante, defensor) {
    console.log(`${atacante.nome} atacou ${defensor.nome}`);
    defensor.vida -= atacante.ataque;
    console.log(`${defensor.nome} agora tem ${defensor.vida} de vida.`);
  }
  
  // Simulando combate
  atacar(personagem1, personagem2);
  atacar(personagem2, personagem1); */