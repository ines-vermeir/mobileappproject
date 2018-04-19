import "./stap.ts";
class Oefening{
    name : string;
    isKlaar : boolean;
    stappen: List<Stap>;
    constructor(name : string, isKlaar : boolean, stappen: List<Stap>){
        this.name = name;
        this.isKlaar = isKlaar;
        this.stappen = stappen;
    }
}