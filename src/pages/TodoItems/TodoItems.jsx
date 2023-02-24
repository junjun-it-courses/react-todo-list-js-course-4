import DefaultTemplate from "../../templates/DefaultTemplate";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TodoItem from "../../components/TodoItem";
import {useState} from "react";
import TodoListService from "../../service/TodoList.service";
import removeTodoItem from "../../utils/removeTodoItemHelper";
import {H2} from "../../components/UI/heading";
import { useNavigate } from "react-router-dom";

const todoListService = new TodoListService;

const TodoItems = () => {
    const [todoItems, setTodoItems] = useState(todoListService.getAllItems());
    const deleteTodoItems = removeTodoItem(setTodoItems);
    const navigate = useNavigate();


    return (
        <DefaultTemplate title='Todo Items page'>
            <Row>
                <Col>
                    <Row id="todoItems">
                        {todoItems.length ?
                            todoItems.map((item) => (
                            <TodoItem
                                {...item}
                                key={item.id}
                                onDelete={() => deleteTodoItems(item.id)}
                                redirectHandler={() => navigate('/todo-items/' + item.id)}
                            />
                        )) :
                            <H2>No Data</H2>
                        }
                    </Row>
                </Col>
            </Row>
        </DefaultTemplate>
    );
};
export default TodoItems;