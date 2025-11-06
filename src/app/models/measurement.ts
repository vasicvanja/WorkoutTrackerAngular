export class Measurement {
    public Id: number;
    public Weight: number;
    public Height: number;
    public BodyFatPercentage: number;
    public Chest: number;
    public Waist: number;
    public Hips: number;
    public Arms: number;
    public UserId: string;

    constructor(Id: number, Weight: number, Height: number, BodyFatPercentage: number, Chest: number, Waist: number, Hips: number, Arms: number, UserId: string) {
        this.Id = Id;
        this.Weight = Weight;
        this.Height = Height;
        this.BodyFatPercentage = BodyFatPercentage;
        this.Chest = Chest;
        this.Waist = Waist;
        this.Hips = Hips;
        this.Arms = Arms;
        this.UserId = UserId;
    }
}