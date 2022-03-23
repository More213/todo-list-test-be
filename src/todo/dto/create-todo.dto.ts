export class CreateTodoDTO {
    readonly id: string;
    readonly title: String;
    readonly todos: [{
        readonly id: string;
        readonly text: String;
        readonly isCompleted: Boolean
    }]
}