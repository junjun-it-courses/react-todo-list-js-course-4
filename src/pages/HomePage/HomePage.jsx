import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TodoForm from "../../components/TodoForm";
import {useState} from "react";
import {cloneDeep} from "lodash";
import {nanoid} from "nanoid";
import TodoListService from "../../service/TodoList.service";
import TodoItem from "../../components/TodoItem";
import DefaultTemplate from "../../templates/DefaultTemplate";
import removeTodoItem from "../../utils/removeTodoItemHelper";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";


const todoListService = new TodoListService;


const HomePage = () => {
    const [todoItems, setTodoItems] = useState(todoListService.getAllItems());
    const deleteTodoItem = removeTodoItem(setTodoItems)
    const navigate = useNavigate();

    const saveData = (todoItem) => {
        const localData = cloneDeep(todoItem);
        localData.id = nanoid();

        const localTodoItems = cloneDeep(todoItems);
        localTodoItems.push(localData);

        // API
        todoListService.saveSingleItem(todoItem);

        // local state
        setTodoItems(
            // Re-fetch data
            todoListService.getAllItems()
        )
    }

    return (
        <DefaultTemplate title='Todo List Main Page'>
            <Row>
                <Col xs={4}>
                    <TodoForm saveData={saveData}/>
                    <hr/>
                    <Button variant="primary" onClick={() => navigate('/todo-items')}>
                        View All Todos
                    </Button>
                </Col>

                <Col xs={8}>
                    <Row id="todoItems">
                        {todoItems.length ? todoItems.map((item) => (
                            <TodoItem
                                {...item}
                                key={item.id}
                                onDelete={() => deleteTodoItem(item.id)}
                                redirectHandler={() => navigate('/todo-items/' + item.id)}
                            />
                        )) : null}
                    </Row>
                </Col>
            </Row>
        </DefaultTemplate>
    );
};

export default HomePage;