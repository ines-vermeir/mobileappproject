class User{
  gebruikersNaam  : string;
  wachtwoord : string;
  functie: string;
  constructor(gebruikersNaam  : string, wachtwoord : string, functie: string){
    this.gebruikersNaam = gebruikersNaam;
    this.wachtwoord = wachtwoord;
    this.functie = functie;
  }
  public  warnUser(gebruiksNaam : string, wachtwoord : string): User {
    var check = "todo";
    //TODO
    if (check) {
      let user = new User("test", "test", "test");
      return user;
    }
    return null;
  }
  //TODO more functions
}
