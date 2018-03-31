export class JuisteAntwoord{
//Properties
    private JuisteAntwoordID:number;
    private Beschrijving:String;
    private VraagID:number;
    private MateriaalID:number;
    private Volgorde:number;
//Methods

	constructor($JuisteAntwoordID: number, $Beschrijving: String, $VraagID: number, $MateriaalID: number, $Volgorde: number) {
		this.JuisteAntwoordID = $JuisteAntwoordID;
		this.Beschrijving = $Beschrijving;
		this.VraagID = $VraagID;
		this.MateriaalID = $MateriaalID;
		this.Volgorde = $Volgorde;
	}


    /**
     * Getter $JuisteAntwoordID
     * @return {number}
     */
	public get getJuisteAntwoordID(): number {
		return this.JuisteAntwoordID;
	}

    /**
     * Setter $JuisteAntwoordID
     * @param {number} value
     */
	public set setJuisteAntwoordID(value: number) {
		this.JuisteAntwoordID = value;
	}

    /**
     * Getter $Beschrijving
     * @return {String}
     */
	public get getBeschrijving(): String {
		return this.Beschrijving;
	}

    /**
     * Setter $Beschrijving
     * @param {String} value
     */
	public set setBeschrijving(value: String) {
		this.Beschrijving = value;
	}

    /**
     * Getter $VraagID
     * @return {number}
     */
	public get getVraagID(): number {
		return this.VraagID;
	}

    /**
     * Setter $VraagID
     * @param {number} value
     */
	public set setVraagID(value: number) {
		this.VraagID = value;
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
     * Getter $Volgorde
     * @return {number}
     */
	public get getVolgorde(): number {
		return this.Volgorde;
	}

    /**
     * Setter $Volgorde
     * @param {number} value
     */
	public set setVolgorde(value: number) {
		this.Volgorde = value;
	}
	


    
}