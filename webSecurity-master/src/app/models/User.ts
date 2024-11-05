export class User {
  private static idCounter: number = 1;

  public id: number;
  public nome: string;
  public password: string;

  constructor(nome: string, password: string) {
    this.id = User.idCounter++;
    this.nome = nome;
    this.password = password;
  }
}
