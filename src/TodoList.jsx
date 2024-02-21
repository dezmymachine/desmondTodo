import { TodoItem } from "./TodoItem";
import styles from "./TodoList.module.css";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className={styles.list}>
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
