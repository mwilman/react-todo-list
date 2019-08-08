import * as React from "react";
import {AddTodoList} from "./AddTodoList";

export const TodoList: React.FC = () => {
    const [items, setItems] = React.useState([""]);

    const addItem = (item: string) => {
        setItems([
            ...items,
            item
        ]);
    };

    return (
        <div>
            <AddTodoList handleSubmit={addItem}/>
            {items.map(x => <p key={Math.random()}>{x}</p>)}
        </div>
    );
};
