import {Materiaal}from "./materiaal";
enum SoortOpdracht {
  Soort1,
  Soort2,
  Soort3,
  soort4,
  soort5,
  soort6
}
export class Stap{

  soortOpdracht: SoortOpdracht;
  vraag : string;
  antwoord: string;
  lijstVanMaterialen: Array<Materiaal>;
  isKlaar : boolean;
  feedback: string;
  feedbackTonen: boolean;
  constructor(soortOpdracht: SoortOpdracht, vraag : string, antwoord: string, lijstVanMaterialen: Array<Materiaal>, isKlaar : boolean, feedback: string, feedbackTonen: boolean){
    this.soortOpdracht = soortOpdracht;
    this.vraag = vraag;
    this.antwoord = antwoord;
    this.lijstVanMaterialen = lijstVanMaterialen;
    this.isKlaar = isKlaar;
    this.feedback = feedback;
    this.feedbackTonen = feedbackTonen;
  }
  public setSoortOpdracht(soortOpdracht : SoortOpdracht) : void {
    //TODO Json
  }

  public klaar() : void {
    //TODO als this.antwoord is gelijk aan DB.antwoord and set isKLaar in true
  }

  public setVraag(vraag : string) :void{
    //TODO json
    //this.vraag van json updaten
  }

  public getVraag()  :string{
    return this.vraag;
  }

  public setAntwoord(antwoord : string) :void{
    //TODO json
    //this.antwoord van json updaten
  }

  public getAntwoord()  :string{
    return this.antwoord;
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

  public getIsKlaar() : boolean {
    return this.isKlaar;
  }

  public setFeedback(feedback : string) :void{
    //TODO json
    //this.vraag van json updaten
  }

  public getFeedback()  :string{
    return this.feedback;
  }

  public changeFeedbackTonen() : void{
    if (this.isKlaar){
      //TODO json
      //set isKlaar in false
    } else {
      //TODO json
      //set isKlaar in true
    }
  }

  public Tonen () : void{
    //TODO json
    //set feedbackTonen in true
  }
}
