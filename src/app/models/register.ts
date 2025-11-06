export class Register {
    public FirstName: string;
    public LastName: string;
    public Username: string;
    public Email: string;
    public Password: string;
    public PhoneNumber: string;

    constructor(FirstName: string, LastName: string, Username: string, Email: string, Password: string, PhoneNumber: string) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Username = Username;
        this.Email = Email;
        this.Password = Password;
        this.PhoneNumber = PhoneNumber;
    }
}