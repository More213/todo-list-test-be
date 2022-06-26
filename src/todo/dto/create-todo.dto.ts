export class CreateToDoDTO {
        readonly text: String;
        isCompleted: Boolean;
        atUpdate?: String
}

export class ICheckedTodoDTO {
        categoryId: string;
        todoId: string;
        isCompleted: Boolean;
        atUpdate?: String;
}
