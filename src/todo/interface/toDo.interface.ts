export interface Todo{
        readonly _id?: String,
        readonly text: String,
        isCompleted: Boolean,
        atUpdate?: String

}
export interface ICheckedTodo {
        categoryId: string,
        todoId: string,
        isCompleted: Boolean,
        atUpdate?: String

}