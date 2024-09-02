import { TodoActions, TodoState } from "../../@types/TodoReducer";
import { TodoActionType } from "../../enums/TodoActionType";

export const initialState: TodoState = [];

export const TodoReducer = (
  state: TodoState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionType.ADD: {
      const { payload } = action;
      return !Array.isArray(payload) ? [...state, payload] : payload;
    }

    case TodoActionType.CHANGE: {
      const changedTodos = state.map((item, key) => {
        if (key == action.payload.index) {
          item.title = action.payload.title ?? item.title;
          item.isDone = action.payload.isDone ?? item.isDone;
        }
        return item;
      });
      return changedTodos;
    }

    case TodoActionType.DELETE:
      return state.filter((_, key) => key != action.payload.index);

    default:
      return state;
  }
};
