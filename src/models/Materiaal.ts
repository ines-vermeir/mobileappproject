export class Materiaal {
//Properties
    private MateriaalID:number;
    private Beschrijving:String;
    private Name:String;
//Methods

	constructor($MateriaalID: number, $Beschrijving: String, $Name: String) {
		this.MateriaalID = $MateriaalID;
		this.Beschrijving = $Beschrijving;
		this.Name = $Name;
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
     * Getter $Name
     * @return {String}
     */
	public get getName(): String {
		return this.Name;
	}

    /**
     * Setter $Name
     * @param {String} value
     */
	public set setName(value: String) {
		this.Name = value;
	}
    
}