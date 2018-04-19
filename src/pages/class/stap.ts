import "./materiaal.ts";
class Stap{
    enum SoortOpdracht {
        Soort1,
        Soort2,
        Soort3,
        soort4,
        soort5,
        soort6
    }
    constructor(){
        this.soortOpdracht = SoortOpdracht;
    }
    soortOpdracht: SoortOpdracht;
    vraag : string;
    antwoord: string;
    lijstVanMaterialen: List<Materiaal>;
    isKlaar : boolean;
    feedback: string;
    feedbackTonen: boolean;
    constructor(soortOpdracht: SoortOpdracht, vraag : string, antwoord: string, lijstVanMaterialen: List<Materiaal>, isKlaar : boolean, feedback: string, feedbackTonen: boolean){
        this.soortOpdracht = soortOpdracht;
        this.vraag = vraag;
        this.antwoord = antwoord;
        this.lijstVanMaterialen = lijstVanMaterialen;
        this.isKlaar = isKlaar;
        this.feedback = feedback;
        this.feedbackTonen = feedbackTonen;    
    }
}