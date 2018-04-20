import {Stap} from "./stap";
export class Oefening{
  name : string;
  isKlaar : boolean;
  stappen: Array<Stap>;
  constructor(name : string, isKlaar : boolean, stappen: Array<Stap>){
    this.name = name;
    this.isKlaar = isKlaar;
    this.stappen = stappen;
  }
  public voegStapToe(stap : Stap) : void {
    //TODO json
    //this.stappen van json updaten

  }

  public verwijderStap(id : number) : void {
    //TODO json
    //this.stappen van json updaten
  }

  public setNaam (id : number, naam: string) : void{
    //TODO json
    //this.stappen van json updaten
  }

  public changeIsKlaar() : void{
    if (this.isKlaar){
      //TODO json
      //set isKlaar in false
    } else {
      //TODO json
      //set isKlaar in true
    }
  }

  public updateStappen(): void{
    //TODO this.stappen van json updaten
  }

  public getName() : string{
    return this.name;
  }

  public getIsKlaar() : boolean {
    return this.isKlaar;
  }

  public getStappen() : Array<Stap>{
    return this.stappen
  }

}
