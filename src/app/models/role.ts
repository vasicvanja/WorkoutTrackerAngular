export class Role {
    public Id: number;
    public Name: string;
    public NormalizedName: string;
    public ConcurrencyStamp: string;

    constructor(Id: number, Name: string, NormalizedName: string, ConcurrencyStamp: string) {
        this.Id = Id;
        this.Name = Name;
        this.NormalizedName = NormalizedName;
        this.ConcurrencyStamp = ConcurrencyStamp;
    }
}