import DefaultTemplate from "../../templates/DefaultTemplate";
import { useParams } from "react-router-dom";
import TodoListService from "../../service/TodoList.service";
import TodoItem from "../../components/TodoItem";
import removeTodoItem from "../../utils/removeTodoItemHelper";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";
import {H2} from "../../components/UI/heading";

const todoListService = new TodoListService;

const SingleTodoItem = () => {
    const navigate = useNavigate();
    const {id: todoItemId} = useParams();
    const [todoItem, setTodoItem] = useState(null);

    const redirect = (msg) => {
        alert(msg)
        navigate('/todo-items')
    }

    useEffect(() => {
        const todoItem = todoListService.getItemById(todoItemId);
        todoItem ? setTodoItem(todoItem) : redirect('You will be redirect to todos list')
    }, [])


    const deleteTodoItem = removeTodoItem(
        () => null,
        () => redirect('Deleted successfully!!! You will be redirect to todos list.')
    );
    
    return (
        <DefaultTemplate title={todoItem ? todoItem.title : 'Title'}>
            {todoItem ?
                <TodoItem
                    cols={12}
                    {...todoItem}
                    key={todoItem.id}
                    onDelete={() => deleteTodoItem(todoItem.id)}
                /> :
                <div>
                    <H2>No data</H2>
                </div>
            }
        </DefaultTemplate>
    );
};

export default SingleTodoItem;