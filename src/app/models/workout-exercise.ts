export class WorkoutExercise {
    public Id: number;
    public Sets: number;
    public Repetitons: number;
    public Weight: number;
    public WorkoutId: number;
    public ExciseId: number;

    constructor(Id: number, Sets: number, Repetitons: number, Weight: number, WorkoutId: number, ExciseId: number) {
        this.Id = Id;
        this.Sets = Sets;
        this.Repetitons = Repetitons;
        this.Weight = Weight;
        this.WorkoutId = WorkoutId;
        this.ExciseId = ExciseId;
    }
}