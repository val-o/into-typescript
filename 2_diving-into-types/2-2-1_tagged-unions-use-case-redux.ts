enum EActionType {
  AddTodo,
  RemoveTodo,
  ClearAllTodos
}

interface AddTodo {
  type: EActionType.AddTodo;
  todo: ITodo;
}

interface RemoveTodo {
  type: EActionType.RemoveTodo;
  id: number;
}

interface ClearAllTodos {
  type: EActionType.ClearAllTodos;
}

type ActionUnion = AddTodo | RemoveTodo | ClearAllTodos;

const reducer = (state: State, action: ActionUnion): State => {
  switch (action.type) {
    case EActionType.AddTodo:
      return { ...state, todos: [...state.todos, action.todo] };
    case EActionType.RemoveTodo:
      return { ...state, todos: state.todos.filter(t => t.id !== action.id) };
    default:
      return { todos: [] };
  }
};

interface State {
  todos: ITodo[];
}

interface ITodo {
  id: number;
  text: string;
}

export {}