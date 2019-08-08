import * as React from "react";
import {InputField} from "./Inputfield";
import {Button} from "./Button";

type AddTodoListProps = {
    handleSubmit: (item: string) => void;
};

export const AddTodoList: React.FC<AddTodoListProps> = (props: AddTodoListProps) => {
    const [todoItem, setTodoItem] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setTodoItem(value);
    };

    const handleSubmit = () => {
        props.handleSubmit(todoItem);
    };

    return (
        <div>
            <InputField label={"Todo-Item"} name={"input_todoitem"} id={"input_todoitem"} value={todoItem} handleChange={handleChange}/>
            <Button name={"button_add"} id={"button_add"} label={"Add"} onClick={handleSubmit}/>
        </div>
    );
};
