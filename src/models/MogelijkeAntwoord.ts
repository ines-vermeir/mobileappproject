export class MogelijkeAntwoord{
//Properties
    private MogelijkeAntwoordID:number;
    private MateriaalID:number;
    private Antwoord:String;
    private VraagID:number;
//Methods

	constructor($MogelijkeAntwoordID: number, $MateriaalID: number, $Antwoord: String, $vraagID: number) {
		this.MogelijkeAntwoordID = $MogelijkeAntwoordID;
		this.MateriaalID = $MateriaalID;
		this.Antwoord = $Antwoord;
		this.VraagID = $vraagID;
    }

   
    

    /**
     * Getter $MogelijkeAntwoordID
     * @return {number}
     */
	public get getMogelijkeAntwoordID(): number {
		return this.MogelijkeAntwoordID;
	}

    /**
     * Setter $MogelijkeAntwoordID
     * @param {number} value
     */
	public set setMogelijkeAntwoordID(value: number) {
		this.MogelijkeAntwoordID = value;
	}

    /**
     * Getter $MateriaalID
     * @return {number}
     */
	public get getMateriaalID(): number {
		return this.MateriaalID;
	}

    /**
     * Setter $MateriaalID
     * @param {number} value
     */
	public set setMateriaalID(value: number) {
		this.MateriaalID = value;
	}

    /**
     * Getter $Antwoord
     * @return {String}
     */
	public get getAntwoord(): String {
		return this.Antwoord;
	}

    /**
     * Setter $Antwoord
     * @param {String} value
     */
	public set setAntwoord(value: String) {
		this.Antwoord = value;
	}

    /**
     * Getter $vraagID
     * @return {number}
     */
	public get getVraagID(): number {
		return this.VraagID;
	}

    /**
     * Setter $vraagID
     * @param {number} value
     */
	public set setVraagID(value: number) {
		this.VraagID = value;
	}
    
}