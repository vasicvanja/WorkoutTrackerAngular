export class Goal {
    public Id: number;
    public Name: string;
    public CurrentValue: string;
    public TargetValue: string;
    public IsCompleted: boolean;
    public UserId: string;

    constructor(Id: number, Name: string, CurrentValue: string, TargetValue: string, IsCompleted: boolean, UserId: string) {
        this.Id = Id;
        this.Name = Name;
        this.CurrentValue = CurrentValue;
        this.TargetValue = TargetValue;
        this.IsCompleted = IsCompleted;
        this.UserId = UserId;
    }
}