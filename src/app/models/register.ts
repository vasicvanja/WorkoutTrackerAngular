export class Register {
    public FirstName: string;
    public LastName: string;
    public Username: string;
    public Email: string;
    public PhoneNumber: string;
    public Password: string;
    public BirthDate: string;

    constructor(FirstName: string, LastName: string, Username: string, Email: string, PhoneNumber: string, Password: string, BirthDate: string) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Username = Username;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Password = Password;
        this.BirthDate = BirthDate;
    }
}