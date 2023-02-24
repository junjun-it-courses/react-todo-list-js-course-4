import TodoListService from "../service/TodoList.service";
const todoListService = new  TodoListService;

// @param id - TodoItem id
// @param setData - React setState func

const removeTodoItem = (
    setData = () => {},
    onSuccess = (data) => console.dir(data),
    onFail = (error) => console.dir(error)
) => {
    if(typeof setData !== "function") throw new Error('setData should be a function');
    if(typeof onSuccess !== "function") throw new Error('onSuccess should be a function');
    if(typeof onFail !== "function") throw new Error('onFail should be a function');

    return id => {
        if(!id) throw new Error('Id should be passed');

        try {
            // API
            todoListService.deleteTodoById(id);

            // Re-fetch data
            const data = todoListService.getAllItems();

            // local state
            setData(data);

            onSuccess({
                result: 'success',
                data
            })
        } catch (error) {
            onFail({
                result: 'fail',
                error
            })
        }
    }
}

export default removeTodoItem;