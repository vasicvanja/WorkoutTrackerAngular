import { WorkoutExercise } from "./workout-exercise";

export class Workout {
    public Id: number;
    public Name: string;
    public Volume: number;
    public Duration: string;
    public UserId: string;
    public WorkoutExercises: WorkoutExercise[];

    constructor(Id: number, Name: string, Volume: number, Duration: string, UserId: string, WorkoutExercises: WorkoutExercise[]) {
        this.Id = Id;
        this.Name = Name;
        this.Volume = Volume;
        this.Duration = Duration;
        this.UserId = UserId;
        this.WorkoutExercises = WorkoutExercises;
    }
}