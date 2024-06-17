class Pessoa {
    nome: string;
    idade: number;
    email: string;
    fone: string;
  
    constructor(nome: string, idade: number, email: string, fone: string) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
      this.fone = fone;
    }
    validafone(): void {
      console.log(`${this.nome} - ${this.idade} `);
    }
  }
  export default Pessoa