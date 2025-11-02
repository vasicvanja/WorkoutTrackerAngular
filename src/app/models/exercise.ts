import { MuscleGroup } from "./muscle-group";
import { WorkoutExercise } from "./workout-exercise";

export class Exercise {
    public Id: number;
    public Name: string;
    public Description: string;
    public MuscleGroup: MuscleGroup;
    public WorkoutExercises: WorkoutExercise[];

    constructor(Id: number, Name: string, Description: string, MuscleGroup: MuscleGroup, WorkoutExercises: WorkoutExercise[]) {
        this.Id = Id;
        this.Name = Name;
        this.Description = Description;
        this.MuscleGroup = MuscleGroup;
        this.WorkoutExercises = WorkoutExercises;
    }
}