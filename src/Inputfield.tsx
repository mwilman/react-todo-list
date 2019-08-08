import * as React from 'react';

type InputFieldProps = {
    name: string;
    id: string;
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;

} & ComponentWithoutChildren;

type ComponentWithoutChildren = {
    children?: never;
}

export const InputField: React.FC<InputFieldProps> = (props: InputFieldProps) => {
   return (
     <div>
         <label> {props.label}:
         <input
             type="text"
             value={props.value}
             name={props.name}
             id={props.id}
             onChange={props.handleChange}
         />
         </label>
     </div>
   );
};
