export class CreateToDoDTO {
        readonly text: String;
        isCompleted: Boolean
}

export class ICheckedTodoDTO {
        categoryId: string;
        todoId: string;
        isCompleted: Boolean;
}
