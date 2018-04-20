export class Materiaal{
  waarde : string;
  afbeelding : string;
  constructor(waarde : string, afbeelding : string){
    this.waarde = waarde;
    this.afbeelding = afbeelding;
  }

  public setWaarde(waarde : string) : void{
    //TODO json
    //this.waarde van json updaten
  }

  public setAfbleeding(afbeelding : string) :void{
    //TODO json
    //this.afbeelding van json updaten
  }

  public getWaarde()  :string{
    return this.waarde;
  }

  public getAfbeelding() : string {
    return this.afbeelding;
  }
}
