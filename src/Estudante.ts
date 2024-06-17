import Pessoa from "./Pessoa";

const ddds = [
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21,
  22, 24, 27, 28, 31, 32, 33, 34, 35, 37,
  38, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  51, 53, 54, 55, 61, 62, 63, 64, 65, 66,
  67, 68, 69, 71, 73, 74, 75, 77, 79, 81,
  82, 83, 84, 85, 86, 87, 88, 89, 91, 92,
  93, 94, 95, 96, 97, 98, 99
];


class Estudante extends Pessoa {
    ra: number;
    media: number;
  
    constructor(
      nome: string,
      idade: number,
      email: string,
      fone:string,
  
      ra: number,
      media: number
  
    ) 
    
    {
      super(nome, idade, email,fone);
      this.ra = ra;
      this.media = media;
    }

    validafone(): boolean {
      const regex = /^[0-9]{10,11}$/;
  
      if (!regex.test(this.fone)) {
        return false;
      }
  
      const ddd = parseInt(this.fone.substring(0, 2)); 
  
      return ddds.includes(ddd);
    }


    

    validaEmail(): boolean {
      const testEmail = /^[^\s@]+@(etec|fatec|cps)\.sp\.gov\.br$/;
      return testEmail.test(this.email);
  }

  
    situacao(): string {
      if (this.media < 5) {
        return "Reprovado";
      } else if (this.media < 6) {
        return "Exame";
      } else if (this.media >= 6 && this.media <= 10) {
        return "Aprovado";
      } else {
        return "Média inválida"; 
      }
    }

    
}

export default Estudante;