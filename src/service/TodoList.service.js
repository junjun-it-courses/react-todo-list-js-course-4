import {nanoid} from "nanoid";

class TodoListService {
    #id = 1;
    #key = 'todo_list'

    getItemById(id) {
        const data = this.getAllItems();
        const item = data.find((item) => item.id === id);

        return item || null ;
    }

    saveSingleItem(data) {
        const {title, description} = data

        const dataToSave = {
            id: nanoid(),
            title,
            description
        }

        const savedData = JSON.parse(localStorage.getItem(this.#key));

        if (savedData && savedData.length) {
            savedData.push(dataToSave)
            localStorage.setItem(this.#key, JSON.stringify(savedData))
            return savedData;
        }

        localStorage.setItem(this.#key, JSON.stringify([dataToSave]))
        return [dataToSave]
    }

    deleteTodoById(id) {
        const data = this.getAllItems();
        const filteredData = data.filter(item => item.id !== id);
        this.saveTodos(filteredData);
    }


    getAllItems() {
        const data = JSON.parse(localStorage.getItem(this.#key));
        return data ? data : [];
    }

    saveTodos(data) {
        if(!Array.isArray(data)) return;
        localStorage.setItem(this.#key, JSON.stringify(data));
    }


    deleteAll() {

    }

}


export default TodoListService;
