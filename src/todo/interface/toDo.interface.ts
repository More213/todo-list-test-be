export interface Todo{
        _id?: string,
        readonly text: String,
        isCompleted: Boolean
}
export interface ICheckedTodo {
        categoryId: string,
        todoId: string,
        isCompleted: Boolean,
}