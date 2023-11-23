import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // todo
  todos: {
    id: 1,
    todoTitle: "",
    completed: false,
  },
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
  return useContext(TodoContext);
}
