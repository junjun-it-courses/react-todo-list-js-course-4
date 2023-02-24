import HomePage from "./HomePage";
import TodoItems from "./TodoItems";
import SingleTodoItem from "./SingleTodoItem";

export default [
    {
        path: "/",
        Page: HomePage
    },
    {
        path: "todo-items",
        Page: TodoItems
    },
    {
        path: "todo-items/:id",
        Page: SingleTodoItem
    },
];