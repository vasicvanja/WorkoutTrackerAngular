export class SmtpSettings {
    public Id: number | null;
    public Username: string;
    public Password: string;
    public SenderEmail: string;
    public SenderName: string;
    public Host: string;
    public Port: number;
    public Authentication: boolean;
    public EnableSsl: boolean;
    public EnableSmtpSettings: boolean;

    constructor(Id: number | null, Username: string, Password: string, SenderEmail: string, SenderName: string, Host: string, Port: number, Authentication: boolean, EnableSsl: boolean, EnableSmtpSettings: boolean) {
        this.Id = Id;
        this.Username = Username;
        this.Password = Password;
        this.SenderEmail = SenderEmail;
        this.SenderName = SenderName;
        this.Host = Host;
        this.Port = Port;
        this.Authentication = Authentication;
        this.EnableSsl = EnableSsl;
        this.EnableSmtpSettings = EnableSmtpSettings;
    }
}