export class Vraag {
//Parameters
    private VraagID:number;
    private StapID:number;
    private TypeID:number;
    private Beschrijving:String;
    private FeedbackID:number;
    private isKlaar:boolean;
    private soortVraag:String;

    
	public get getVraagID(): number {
		return this.VraagID;
    }


   
	public set setVraagID(value: number) {
		this.VraagID = value;
    }

    
	public get getStapID(): number {
		return this.StapID;
	}

   
	public set setStapID(value: number) {
		this.StapID = value;
	}

    
	public get getTypeID(): number {
		return this.TypeID;
	}

  
	public set setTypeID(value: number) {
		this.TypeID = value;
    }

    
	public get getBeschrijving(): String {
		return this.Beschrijving;
	}

    
	public set setBeschrijving(value: String) {
		this.Beschrijving = value;
	}
    

    
	public get getFeedbackID(): number {
		return this.FeedbackID;
	}

    
	public set setFeedbackID(value: number) {
		this.FeedbackID = value;
	}


    
	public get getisKlaar(): boolean {
		return this.isKlaar;
	}

   
	public set setisKlaar(value: boolean) {
		this.isKlaar = value;
    }

    
	public get getsoortVraag(): String {
		return this.soortVraag;
	}

    
	public set setsoortVraag(value: String) {
		this.soortVraag = value;
	}
    
 
    


}