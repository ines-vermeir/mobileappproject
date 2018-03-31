export class Stap{
//Properties
    private StapID:number;
    private OefId:number;
    private Beschrijving:String;
    private Counter:number;
//Methods

	constructor($StapID: number, $OefId: number, $Beschrijving: String, $Counter: number) {
		this.StapID = $StapID;
		this.OefId = $OefId;
		this.Beschrijving = $Beschrijving;
		this.Counter = $Counter;
	}
    
	public get getStapID(): number {
		return this.StapID;
	}

    
	public set setStapID(value: number) {
		this.StapID = value;
	}
    

	public get getOefId(): number {
		return this.OefId;
	}

    
	public set setOefId(value: number) {
		this.OefId = value;
	}


  
	public get getBeschrijving(): String {
		return this.Beschrijving;
	}

  
	public set setBeschrijving(value: String) {
		this.Beschrijving = value;
	}

    
	public get getCounter(): number {
		return this.Counter;
	}

    
	public set setCounter(value: number) {
		this.Counter = value;
	}
    
}