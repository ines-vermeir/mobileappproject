import { Oefening } from"./oefening";
import {Stap} from "./stap";

class Overzicht{
  lijstVanOefeningen: Array<Oefening>;
  constructor(ListOfOefeningen: Array<Oefening>){
    this.lijstVanOefeningen = ListOfOefeningen;
  }

  public voegOefeningToe(oefening : Oefening) : void {
    //TODO json
    //this.lijstVanOefeningen van json updaten

  }

  public verwijderOefening(id : number) : void {
    //TODO json
    //this.lijstVanOefeningen van json updaten
  }

  public updateOefening(): void{
    //TODO this.lijstVanOefeningen van json updaten
  }

  public getLijstVanOefeningen(): Array<Oefening>{
    return this.lijstVanOefeningen;
  }
}
