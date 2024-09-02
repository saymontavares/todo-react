import { TodoActionType } from "../enums/TodoActionType";
import { Todo } from "./Todo";

export type TodoState = Todo[]

type TodoWithOptionalProps = {
    [Key in keyof Todo]?: Todo[Key]
}

type AddTodo = {
    type: TodoActionType.ADD,
    payload: Todo | Todo[]
}

type ChangeTodo = {
    type: TodoActionType.CHANGE,
    payload: TodoWithOptionalProps & { index: number }
}

type DeleteTodo = {
    type: TodoActionType.DELETE,
    payload: { index: number }
}

export type TodoActions = AddTodo | ChangeTodo | DeleteTodo