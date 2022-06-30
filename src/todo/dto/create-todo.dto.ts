export class CreateToDoDTO {
        readonly text: string;
        isCompleted: boolean;
        atUpdate?: string
}

export class ICheckedTodoDTO {
        categoryId: string;
        todoId: string;
        isCompleted: boolean;
        atUpdate?: string;
}
