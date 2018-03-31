export class Feedback{
//Properties
    private FeedbackID:number;
    private Beschrijving:String;
//Methods


	constructor($FeedbackID: number, $Beschrijving: String) {
		this.FeedbackID = $FeedbackID;
		this.Beschrijving = $Beschrijving;
	}

    /**
     * Getter $FeedbackID
     * @return {number}
     */
	public get getFeedbackID(): number {
		return this.FeedbackID;
	}

    /**
     * Setter $FeedbackID
     * @param {number} value
     */
	public set setFeedbackID(value: number) {
		this.FeedbackID = value;
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
   
    
    
}