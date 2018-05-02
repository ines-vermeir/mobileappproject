import {Stap} from "../models/Stap"
export interface Oefening{
//Properties
    OefID?:number;
    IsKlaar:boolean;
    Stappen :Stap[];
}