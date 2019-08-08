import * as React from "react";

type ButtonProps = {
    name: string;
    id: string;
    label: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
      <div>
          <button name={props.name}
                  id={props.id}
                  onClick={props.onClick}>
              {props.label}
          </button>
      </div>
  );
};
