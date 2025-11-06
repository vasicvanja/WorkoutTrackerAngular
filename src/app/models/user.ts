import { Goal } from "./goal";
import { Measurement } from "./measurement";
import { Workout } from "./workout";

export class User {
    public Id: string;
    public FirstName: string;
    public LastName: string;
    public UserName: string;
    public Email: string;
    public PhoneNumber: string;
    public Enabled: boolean;
    public Role: string;
    public Measurements: Measurement[];
    public Workouts: Workout[];
    public Goals: Goal[];

    constructor(Id: string, FirstName: string, LastName: string, UserName: string, Email: string, PhoneNumber: string, Enabled: boolean, Role: string, Measurements: Measurement[], Workouts: Workout[], Goals: Goal[]) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.UserName = UserName;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.Enabled = Enabled;
        this.Role = Role;
        this.Measurements = Measurements;
        this.Workouts = Workouts;
        this.Goals = Goals;
    }
}