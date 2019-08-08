import * as React from "react";
import {AddTodoList} from "./AddTodoList";
import {Button} from "./form-controls/Button";

interface TodoItem {
    id: number;
    title: string;
}

export const TodoList: React.FC = () => {
    const [items, setItems] = React.useState([] as TodoItem[]);

    const addItem = (item: string) => {
        setItems([
            ...items,
            {id: Math.random(), title: item}
        ]);
    };

    const deleteElementInArray = (array: TodoItem[], element: TodoItem) => {
        const index = array.findIndex(x => x.id === element.id);
        if (index !== -1) {
             return array.slice(0, index).concat(array.slice(index+1, array.length));
        }
        return array;
    };

    const deleteButton = (item: TodoItem) => {
        setItems(deleteElementInArray(items, item))
    };

    function renderRow(x: TodoItem) {
        return (
            <div>
                <p key={x.id}>{x.title}</p>
                <Button name={"button_delete"} id={"button_delete"} label={"Loeschen!"} onClick={() => deleteButton(x)}/>
            </div>
        );
    }

    return (
        <div>
            <AddTodoList handleSubmit={addItem}/>
            {items.map(renderRow)}
        </div>
    );
};
