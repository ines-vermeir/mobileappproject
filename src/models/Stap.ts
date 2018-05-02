import {Antwoord} from "../models/Antwoord"
import {Feedback} from "../models/Feedback"
import {Materiaal} from "../models/Materiaal"


export interface Stap{
//Properties
    StapID?:number;
    SoortOpdracht:String;
    Antwoord:Antwoord[];
    Feedback:Feedback;
    Isklaar:boolean;
    Materialen:Materiaal[];
    Vraag:String;

}