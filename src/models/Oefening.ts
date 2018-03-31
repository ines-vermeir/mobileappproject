class Oefening{
//Properties
    private OefID:number;
    private Beschrijving:String;
    private Actief:Boolean;
    private Gemaakt:Boolean;
    private UserID:number;



	constructor($OefID: number, $Beschrijving: String, $Actief: Boolean, $Gemaakt: Boolean, $UserID: number) {
		this.OefID = $OefID;
		this.Beschrijving = $Beschrijving;
		this.Actief = $Actief;
		this.Gemaakt = $Gemaakt;
		this.UserID = $UserID;
	}

   
	public get getOefID(): number {
		return this.OefID;
	}

	public set setOefID(value: number) {
		this.OefID = value;
	}

   
	public get getBeschrijving(): String {
		return this.Beschrijving;
	}

    
	public set setBeschrijving(value: String) {
		this.Beschrijving = value;
    }

    
	public get getActief(): Boolean {
		return this.Actief;
	}

    
	public set setActief(value: Boolean) {
		this.Actief = value;
    }

    
	public get getGemaakt(): Boolean {
		return this.Gemaakt;
	}

    
	public set setGemaakt(value: Boolean) {
		this.Gemaakt = value;
    }

   
	public get getUserID(): number {
		return this.UserID;
	}

    
	public set setUserID(value: number) {
		this.UserID = value;
	}
    
    
    
	

	
    

    
    

}